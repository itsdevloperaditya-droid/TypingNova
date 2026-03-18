const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const ADMIN_ID = 'admin6143';
const ADMIN_PASSWORD = '#include6143';
const ADMIN_JWT_SECRET = 'typenova_admin_secret_2024';

router.post('/login', async (req, res) => {
  try {
    const { id, password } = req.body;
    
    if (id === ADMIN_ID && password === ADMIN_PASSWORD) {
      const token = jwt.sign({ role: 'admin' }, ADMIN_JWT_SECRET, { expiresIn: '24h' });
      return res.json({ success: true, token });
    }
    
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.get('/stats', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    
    jwt.verify(token, ADMIN_JWT_SECRET);
    
    const totalUsers = await User.countDocuments();
    const proUsers = await User.countDocuments({ plan: 'pro' });
    const basicUsers = await User.countDocuments({ plan: 'basic' });
    
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    
    const avgWpm = users.reduce((acc, u) => acc + (u.stats?.bestWpm || 0), 0) / (totalUsers || 1);
    const avgAccuracy = users.reduce((acc, u) => acc + (u.stats?.avgAccuracy || 0), 0) / (totalUsers || 1);
    const totalTests = users.reduce((acc, u) => acc + (u.stats?.testsDone || 0), 0);
    
    res.json({
      success: true,
      stats: {
        totalUsers,
        proUsers,
        basicUsers,
        avgWpm: Math.round(avgWpm * 10) / 10,
        avgAccuracy: Math.round(avgAccuracy * 10) / 10,
        totalTests,
        recentUsers: users.slice(0, 20)
      }
    });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
