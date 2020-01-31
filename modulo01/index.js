const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = { test: 1 }

const users = ['Guilherme', 'Erisvaldo', 'William']


server.use((req, res, next) => {
    console.time('Request');
    console.log(`Method: ${req.method} | URL: ${req.url}`);
    next();
    console.timeEnd('Request');
});

function checkIfUserExists(req, res, next) {
    if (!req.body.name) 
        return res.status(400).json({ 
            error: 'User name is required'
        });

    return next();
}


server.get('/api/users', (req, res) => {
    return res.json(users);
})

server.get('/api/users/:index', (req, res) => {
    const { index } = req.params;
    return res.json({ user: users[index]});
});

server.post('/api/users', checkIfUserExists, (req, res) => {
    const { name } = req.body;
    users.push(name);
    return res.json(users);
});

server.put('/api/users/:index', checkIfUserExists, (req, res) => {
    const { name } = req.body;
    const { index } = req.params;
    users[index] = name;
    return res.json({ name: users[index] });
});

server.delete('/api/users/:index', (req, res) => {
    const { index } = req.params;
    users.splice(index, 1);
    return res.send();
});

server.listen(3000);