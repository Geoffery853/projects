const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/taskmanager')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

