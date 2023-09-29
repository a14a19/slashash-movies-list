const routes = require('express').Router();
const moviesList = require('./movies-list.routes');

routes.get('/', (req, res) => {
    res.render('search', { result: "Search" });
});

routes.use('/movies', moviesList);

module.exports = routes; 
