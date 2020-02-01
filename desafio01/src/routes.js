const express = require('express');
const routes = express.Router();

const ProjectController = require('./controllers/ProjectController');

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.post('/projects/:id/tasks', ProjectController.storeTask);
routes.put('/projects/:id', ProjectController.update);
routes.delete('/projects/:id', ProjectController.destroy);

module.exports = routes;