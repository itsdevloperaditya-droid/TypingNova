const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { toPublicUser } = require('../utils/userStats');

// Helper to generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '30d'
  });
};

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const user = await User.create({ username, email, password });
    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: toPublicUser(user)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.json({
      success: true,
      token: generateToken(user._id),
      user: toPublicUser(user)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user profile
router.get('/me', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ success: false });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const user = await User.findById(decoded.id);
    res.json({ success: true, user: toPublicUser(user) });
  } catch (error) {
    res.status(401).json({ success: false });
  }
});

// @route   POST /api/auth/upgrade-test
// @desc    Upgrade user to pro (for simulation)
router.post('/upgrade-test', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ success: false });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const user = await User.findByIdAndUpdate(decoded.id, { plan: 'pro' }, { new: true });
    res.json({ success: true, user: toPublicUser(user) });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   POST /api/auth/test-result
// @desc    Save test result to user stats
router.post('/test-result', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      console.log('Test result: No token provided');
      return res.status(401).json({ success: false, message: 'Not authenticated' });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    } catch(e) {
      console.log('Test result: Invalid token');
      return res.status(401).json({ success: false, message: 'Invalid token' });
    }

    const wpm = Number(req.body.wpm) || 0;
    const accuracy = Number(req.body.accuracy) || 0;
    const totalWords = Number(req.body.totalWords) || 0;
    const statsSnapshot = req.body.statsSnapshot || null;
    console.log('Test result received:', { wpm, accuracy, totalWords, userId: decoded.id });

    const user = await User.findById(decoded.id);
    if (!user) {
      console.log('Test result: User not found');
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const previousTests = Number(user.stats?.testsDone) || 0;
    const previousAvgAccuracy = Number(user.stats?.avgAccuracy) || 0;
    const previousBestWpm = Number(user.stats?.bestWpm) || 0;
    const previousTotalWords = Number(user.stats?.totalWords) || 0;
    const previousStreak = Number(user.stats?.streak) || 0;

    if (statsSnapshot) {
      user.stats.testsDone = Math.max(Number(statsSnapshot.totalTests) || 0, previousTests + 1);
      user.stats.totalWords = Math.max(Number(statsSnapshot.totalWords) || 0, previousTotalWords + totalWords);
      user.stats.bestWpm = Math.max(Number(statsSnapshot.bestWpm) || 0, previousBestWpm, wpm);
      user.stats.avgAccuracy = Math.max(0, Math.round((Number(statsSnapshot.avgAccuracy) || accuracy) * 10) / 10);
      user.stats.streak = Math.max(Number(statsSnapshot.streak) || 0, previousStreak + 1);
    } else {
      user.stats.testsDone = previousTests + 1;
      user.stats.totalWords = previousTotalWords + totalWords;
      user.stats.streak = previousStreak + 1;

      if (wpm > previousBestWpm) {
        user.stats.bestWpm = wpm;
      }

      const currentTotalAccuracy = previousAvgAccuracy * previousTests;
      user.stats.avgAccuracy = Math.round(((currentTotalAccuracy + accuracy) / user.stats.testsDone) * 10) / 10;
    }
    user.markModified('stats');

    await user.save();
    console.log('Stats saved for user:', user.username, user.stats);

    res.json({ success: true, stats: user.stats });
  } catch (error) {
    console.error('Test result save error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   POST /api/auth/sync-stats
// @desc    Sync the dashboard stats shape from the client into MongoDB
router.post('/sync-stats', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authenticated' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const bestWpm = Number(req.body.bestWpm) || 0;
    const avgAccuracy = Number(req.body.avgAccuracy) || 0;
    const totalTests = Number(req.body.totalTests) || 0;
    const totalWords = Number(req.body.totalWords) || 0;
    const streak = Number(req.body.streak) || 0;

    user.stats.bestWpm = Math.max(Number(user.stats?.bestWpm) || 0, bestWpm);
    user.stats.avgAccuracy = Math.max(Number(user.stats?.avgAccuracy) || 0, Math.round(avgAccuracy * 10) / 10);
    user.stats.testsDone = Math.max(Number(user.stats?.testsDone) || 0, totalTests);
    user.stats.totalWords = Math.max(Number(user.stats?.totalWords) || 0, totalWords);
    user.stats.streak = Math.max(Number(user.stats?.streak) || 0, streak);
    user.markModified('stats');

    await user.save();

    res.json({ success: true, user: toPublicUser(user) });
  } catch (error) {
    console.error('Sync stats error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
