const express = require('express');
const routes = express.Router();

const ProjectController = require('./controllers/ProjectController');
const ProjectMiddleware = require('./middlewares/ProjectMiddleware');

routes.use(require('./middlewares/LogMiddleware').logRequests);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.post('/projects/:id/tasks', ProjectMiddleware.hasProject, ProjectController.storeTask);
routes.put('/projects/:id', ProjectMiddleware.hasProject, ProjectController.update);
routes.delete('/projects/:id', ProjectMiddleware.hasProject, ProjectController.destroy);

module.exports = routes;