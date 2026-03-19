const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { getNormalizedStats, toPublicUser } = require('../utils/userStats');

const toPublicLeaderboardEntry = (user, index) => {
  const publicUser = toPublicUser(user);
  const stats = getNormalizedStats(publicUser);
  const wpm = stats.bestWpm;
  const acc = stats.avgAccuracy;
  const tests = stats.testsDone;
  const totalWords = stats.totalWords;
  const streak = stats.streak;

  let rank = index + 1;
  let rankLabel = 'C';
  let rankClass = 'rank-c';
  const hasTested = tests > 0;

  if (!hasTested) {
    rankLabel = 'NEW';
    rankClass = 'rank-new';
  } else if (rank === 1) {
    rankLabel = 'S+';
    rankClass = 'rank-s-plus';
  } else if (rank === 2) {
    rankLabel = 'S';
    rankClass = 'rank-s';
  } else if (rank === 3) {
    rankLabel = 'A+';
    rankClass = 'rank-a-plus';
  } else if (wpm >= 80 && acc >= 95) {
    rankLabel = 'A';
    rankClass = 'rank-a';
  } else if (wpm >= 60 && acc >= 90) {
    rankLabel = 'B+';
    rankClass = 'rank-b-plus';
  } else if (wpm >= 40 && acc >= 80) {
    rankLabel = 'B';
    rankClass = 'rank-b';
  } else if (wpm >= 30) {
    rankLabel = 'C+';
    rankClass = 'rank-c-plus';
  }

  return {
    id: String(user._id),
    rank,
    username: publicUser.username,
    name: publicUser.username,
    wpm,
    accuracy: acc > 0 ? Math.round(acc * 10) / 10 : 0,
    acc: acc > 0 ? Math.round(acc * 10) / 10 : 0,
    tests,
    words: totalWords,
    totalWords,
    streak,
    plan: publicUser.plan,
    rankLabel,
    rankClass,
    hasTested,
    joinedAt: publicUser.createdAt
  };
};

router.get('/', async (req, res) => {
  try {
    const users = await User.find({})
      .select('username stats plan createdAt')
      .sort({ 'stats.bestWpm': -1, 'stats.avgAccuracy': -1 })
      .lean()
      .limit(100);

    const leaderboard = users.map(toPublicLeaderboardEntry);

    res.json({ success: true, leaderboard, totalUsers: users.length });
  } catch (e) {
    console.error('Leaderboard error:', e);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
