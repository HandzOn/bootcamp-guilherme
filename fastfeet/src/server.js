import express from 'express';

const server = express();

server.get('/', (req, res) => {
  return res.json({ message: 'Teste'});
});

server.listen(3333);