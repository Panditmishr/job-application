const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
const port = 8000;

// Middleware
app.use(express.json());

// Routes
app.use('/job', jobRoutes);

// MongoDB Connection
mongoose.connect("mongodb+srv://mmithlesh772:4CGluxtKka0334ce@cluster0.xrfjtrc.mongodb.net/jobDB")
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((err) => {
        console.log("Database connection error:", err);
    });

// Start Server
app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});
