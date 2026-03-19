const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find({ 'stats.bestWpm': { $gt: 0 } })
      .select('username stats.bestWpm stats.avgAccuracy stats.testsDone plan')
      .sort({ 'stats.bestWpm': -1 })
      .limit(100);

    const leaderboard = users.map((user, index) => ({
      rank: index + 1,
      name: user.username,
      wpm: user.stats.bestWpm,
      acc: user.stats.avgAccuracy ? Math.round(user.stats.avgAccuracy * 10) / 10 + '%' : '0%',
      tests: user.stats.testsDone || 0,
      tag: user.plan === 'pro' ? 'pro' : ''
    }));

    res.json({ success: true, leaderboard });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
