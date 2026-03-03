const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/taskdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Test Route
app.use("/tasks", taskRoutes);

// Server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
