const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find({ 'stats.testsDone': { $gt: 0 } })
      .select('username email stats plan createdAt')
      .sort({ 'stats.bestWpm': -1, 'stats.avgAccuracy': -1 })
      .limit(100);

    const leaderboard = users.map((user, index) => {
      const wpm = user.stats.bestWpm || 0;
      const acc = user.stats.avgAccuracy || 0;
      const tests = user.stats.testsDone || 0;
      const totalWords = user.stats.totalWords || 0;
      
      let rank = index + 1;
      let rankLabel = 'C';
      let rankClass = 'rank-c';
      
      if (rank === 1) { rankLabel = 'S+'; rankClass = 'rank-s-plus'; }
      else if (rank === 2) { rankLabel = 'S'; rankClass = 'rank-s'; }
      else if (rank === 3) { rankLabel = 'A+'; rankClass = 'rank-a-plus'; }
      else if (wpm >= 80 && acc >= 95) { rankLabel = 'A'; rankClass = 'rank-a'; }
      else if (wpm >= 60 && acc >= 90) { rankLabel = 'B+'; rankClass = 'rank-b-plus'; }
      else if (wpm >= 40 && acc >= 80) { rankLabel = 'B'; rankClass = 'rank-b'; }
      else if (wpm >= 30) { rankLabel = 'C+'; rankClass = 'rank-c-plus'; }
      
      return {
        rank,
        name: user.username,
        email: user.email,
        wpm,
        acc: acc > 0 ? Math.round(acc * 10) / 10 : 0,
        tests,
        totalWords,
        plan: user.plan,
        rankLabel,
        rankClass,
        joinedAt: user.createdAt
      };
    });

    res.json({ success: true, leaderboard, totalUsers: users.length });
  } catch (e) {
    console.error('Leaderboard error:', e);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
