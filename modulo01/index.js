const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { test: 1 }

server.get('/teste', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}` });
});

server.listen(3000);