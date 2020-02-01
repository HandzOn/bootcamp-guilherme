const Project = require('../models/Project');

module.exports = {

    store(req, res) {
        const {id, title} = req.body;

        Project.add({id, title, tasks: []});

        return res.json(Project.all());
    },

    index(req, res) {
        return res.json(Project.all());
    },

    update(req, res) {
        const { id } = req.params;
        const { title } = req.body;
        return res.json(Project.update(id, title));
    },

    destroy(req, res) {
        const { id } = req.params;
        Project.delete(id);
        return res.json({ deleted: true });
    },

    storeTask(req, res) {
        const { id } = req.params;
        const { title } = req.body;
        return res.json(Project.addTask(id, title));
    }

};