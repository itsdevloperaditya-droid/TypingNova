const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

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
      user: { id: user._id, username: user.username, email: user.email, stats: user.stats }
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
      user: { id: user._id, username: user.username, email: user.email, stats: user.stats }
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
    res.json({ success: true, user });
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
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   POST /api/auth/test-result
// @desc    Save test result to user stats
router.post('/test-result', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'Not authenticated' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const { wpm, accuracy, timeLimit, totalWords } = req.body;

    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    user.stats.testsDone = (user.stats.testsDone || 0) + 1;
    user.stats.totalWords = (user.stats.totalWords || 0) + (totalWords || 0);
    
    if (wpm && wpm > (user.stats.bestWpm || 0)) {
      user.stats.bestWpm = wpm;
    }
    
    const currentTotal = (user.stats.avgAccuracy || 0) * (user.stats.testsDone - 1);
    user.stats.avgAccuracy = Math.round((currentTotal + accuracy) / user.stats.testsDone);

    await user.save();

    res.json({ success: true, stats: user.stats });
  } catch (error) {
    console.error('Test result save error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
