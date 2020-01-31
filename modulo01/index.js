const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = { test: 1 }

const users = ['Guilherme', 'Erisvaldo', 'William']

server.get('/api/users', (req, res) => {
    return res.json(users);
})

server.get('/api/users/:index', (req, res) => {
    const { index } = req.params;
    return res.json({ user: users[index]});
});

server.post('/api/users', (req, res) => {
    const { name } = req.body;
    users.push(name);
    return res.json(users);
});

server.put('/api/users/:index', (req, res) => {
    const { name } = req.body;
    const { index } = req.params;
    users[index] = name;
    return res.json({ name: users[index] });
});

server.delete('/api/users/:index', (req, res) => {
    const { index } = req.params;
    users.splice(index, 1);
    return res.json(users);
});

server.listen(3000);