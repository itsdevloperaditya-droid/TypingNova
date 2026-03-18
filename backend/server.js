const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Serve static files from the frontend
// This should come before the catch-all route
app.use(express.static(path.join(__dirname, '../frontend')));

// For any other routes, serve the index.html file.
// This is crucial for Single Page Applications (SPAs) to handle client-side routing.
// Using '/*' ensures that all paths not caught by API routes or static files
// are directed to the index.html.
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// A simple health check route for Render
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to TypeNova API' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in \${process.env.NODE_ENV || 'development'} mode on port \${PORT}`);
});
