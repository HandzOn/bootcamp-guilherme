const express = require('express');
const routes = express.Router();

const ProjectController = require('./controllers/ProjectController');
const ProjectMiddlewares = require('./middlewares/ProjectMiddlewares');

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.post('/projects/:id/tasks', ProjectMiddlewares.hasProject, ProjectController.storeTask);
routes.put('/projects/:id', ProjectMiddlewares.hasProject, ProjectController.update);
routes.delete('/projects/:id', ProjectMiddlewares.hasProject, ProjectController.destroy);

module.exports = routes;