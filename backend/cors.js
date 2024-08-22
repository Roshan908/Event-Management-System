const express = require('express');
const app = express();

const allowedOrigins = ['http://192.168.16.184:3000', 'http://localhost:3000'];

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    if (req.method === 'OPTIONS') {
        return res.status(200).json({});
    }
    next();
});

// Your other middleware and routes here

module.exports = app;