const MoviesRoutes = require('express').Router();
const { moviesSearch } = require('../controllers/movies.controllers');

MoviesRoutes.post('/search', moviesSearch);
MoviesRoutes.get('/favorite', moviesSearch);

module.exports = MoviesRoutes;