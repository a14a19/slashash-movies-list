const MoviesRoutes = require('express').Router();
const { moviesSearch, favMovies, getFavList } = require('../controllers/movies.controllers');

MoviesRoutes.post('/search', moviesSearch);
MoviesRoutes.post('/add/favorite', favMovies);
MoviesRoutes.get('/get/favorite', getFavList);

module.exports = MoviesRoutes;