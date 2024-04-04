require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
 
app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
app.use('/api/files', require('./Routes/files'));
app.use('/files', require('./Routes/show'));
app.use('/files/download', require('./Routes/download'));


app.listen(PORT, console.log(`Listening on port ${PORT}.`));