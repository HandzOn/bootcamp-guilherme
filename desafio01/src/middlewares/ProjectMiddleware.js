const Project = require('../models/Project');

module.exports = {
    hasProject(req, res, next) {
        const { id } = req.params;

        if (!Project.find(id)) 
            return res.json({ error: `The project with id ${id} not found`});
            
        return next();
    }
};