const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const homeRoutes = require('./routes/homeRoute');
const toDoRoutes = require('./routes/toDoRoute');

const app = express();

// For Deployment 
const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port,() => {
    console.log(`The port is running on http://localhost:${port}/todo`);
});

app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/todo-db');

// For Deployment
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-db';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

console.log('DB connected');

app.use(homeRoutes);
app.use('/todo',toDoRoutes);

app.use((req,res) => {
    res.status(404).send('Not Found');
});