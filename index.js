const express = require('express');
const connectDB = require('./database/db');
const app = express();

const dns = require('dns');

dns.setServers(['8.8.8.8']);

// Middleware to parse JSON requests
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Bus Ticket Booking Backend!');
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})

connectDB();