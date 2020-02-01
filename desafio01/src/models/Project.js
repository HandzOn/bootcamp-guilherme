class Project {

    constructor() {
        this.projects = [];
    }

    add(project) {
        this.projects.push(project);
    }

    all() {
        return this.projects;
    }

    update(projectId, title) {
        const project = this.projects.find(project => project.id == projectId);
        project.title = title;
        return project;
    }

    find(projectId) {
        return this.projects.find(project => project.id === parseInt(projectId));
    }

    delete(projectId) {
        this.projects = this.projects.filter(project => project.id !== parseInt(projectId));
    }

    addTask(projectId, task) {
        const project = this.projects.find(project => project.id == projectId);
        project.tasks.push(task);
        return project;
    }

}

module.exports = new Project();