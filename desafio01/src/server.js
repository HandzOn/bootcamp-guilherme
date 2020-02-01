const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.json());

server.use('/api', require('./routes'));

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
