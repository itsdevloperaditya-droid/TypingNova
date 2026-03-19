const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();

app.use(express.json());
app.use(cors());

connectDB()
  .then(() => {

    app.use('/api/auth', authRoutes);
    app.use('/api/admin', adminRoutes);
    app.use('/api/leaderboard', leaderboardRoutes);

    app.get('/api', (req, res) => {
      res.json({ message: 'Welcome to TypeNova API' });
    });

    const frontendPath = path.join(__dirname, '..', 'frontend');
    app.use(express.static(frontendPath));

    // Catch-all for SPA
    app.use((req, res) => {
      res.sendFile(path.join(frontendPath, 'index.html'));
    });

    // Error handling middleware - MUST be last
    app.use((err, req, res, next) => {
      console.error('Server Error:', err);
      if (!res.headersSent) {
        res.status(500).json({ success: false, message: err.message || 'Internal server error' });
      }
    });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });