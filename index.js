const express = require('express');
const mongoose = require('mongoose');

const homeRoutes = require('./routes/homeRoute');
const toDoRoutes = require('./routes/toDoRoute');

const app = express();
const port = 3000;

app.listen(port,() => {
    console.log(`The port is running on http://localhost:${port}/`);
});

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todo-db');

console.log('DB connected');

app.use(homeRoutes);
app.use('/todo',toDoRoutes);

app.use((req,res) => {
    res.status(404).send('Not Found');
});