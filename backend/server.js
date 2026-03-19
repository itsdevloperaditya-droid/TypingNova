const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect DB and then start server
connectDB()
  .then(() => {

    // API Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/admin', adminRoutes);

    // Health check route
    app.get('/api', (req, res) => {
      res.json({ message: 'Welcome to TypeNova API' });
    });

    // Serve static frontend
    const frontendPath = path.join(__dirname, '..', 'frontend');
    app.use(express.static(frontendPath));

    // ✅ FIXED Catch-all route (IMPORTANT)
    app.get('/*', (req, res) => {
      res.sendFile(path.join(frontendPath, 'index.html'));
    });

    // Port
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(
        `Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`
      );
    });

  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });