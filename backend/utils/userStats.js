const firstNumber = (...values) => {
  for (const value of values) {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  return 0;
};

const getNormalizedStats = (user = {}) => {
  const stats = user.stats || {};

  const wpm = firstNumber(
    stats.bestWpm,
    stats.wpm,
    user.bestWpm,
    user.wpm
  );

  const accuracy = firstNumber(
    stats.avgAccuracy,
    stats.accuracy,
    user.avgAccuracy,
    user.accuracy
  );

  const tests = firstNumber(
    stats.testsDone,
    stats.tests,
    user.testsDone,
    user.tests
  );

  const words = firstNumber(
    stats.totalWords,
    stats.words,
    user.totalWords,
    user.words
  );

  const streak = firstNumber(
    stats.streak,
    user.streak
  );

  return {
    bestWpm: wpm,
    avgAccuracy: Math.round(accuracy * 10) / 10,
    testsDone: tests,
    totalWords: words,
    streak
  };
};

const toPublicUser = (user = {}) => {
  const normalizedStats = getNormalizedStats(user);

  return {
    id: String(user._id || user.id || ''),
    _id: String(user._id || user.id || ''),
    username: user.username || '',
    email: user.email || '',
    plan: user.plan || 'basic',
    createdAt: user.createdAt,
    stats: normalizedStats
  };
};

module.exports = {
  getNormalizedStats,
  toPublicUser
};
