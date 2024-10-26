const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Make sure to define your MongoDB connection in this file
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Use CORS middleware
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Log incoming requests
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

// Health check route
app.get('/', (req, res) => {    
    res.send('Hello World');
});

// Routes
app.use('/api', taskRoutes);
app.use('/api/auth', authRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
