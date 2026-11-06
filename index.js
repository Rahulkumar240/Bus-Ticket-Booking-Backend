const express = require('express');
const connectDB = require('./database/db');
const app = express();
const data = require('./data/rawfigures');
const dns = require('dns');

dns.setServers(['8.8.8.8',
    '1.1.1.1',
    '0.0.0.0'
]);

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/',(req,res) => {
    res.status(200).json({message: "Server is running"})
})



app.get('/user',(req,res)=>{
    res.status(200).json()
})
connectDB();