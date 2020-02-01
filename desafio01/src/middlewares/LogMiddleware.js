module.exports = {
    logRequests(req, res, next) {
        console.count("Número de requisições");
        return next();
    }
}