const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

// Use CORS middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Health check route
app.get('/', (req, res) => {    
    res.send('Hello World');
});

// Preflight OPTIONS request
app.options('*', cors(corsOptions));

// Define your routes here
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
