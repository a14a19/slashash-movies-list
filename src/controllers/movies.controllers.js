require('dotenv').config();
const axios = require('axios');
const mysql = require('../config/db')

const moviesSearch = async (req, res) => {
    try {
        let searchWord = req.body.name
        let url = process.env.OMDB_API + searchWord
        let moviesSearch = await fetch(url, { method: "GET" })
        let data = await moviesSearch.json();
        console.log(req.body.name, url, data)
        if (data.Search) {
            res.render('searchMoviesList', { "data": data })
        } else {
            res.render('noMoviesToShow', { "data": data })
        }
    } catch (e) {
        console.warn(e.red)
    }
}
const favMovies = async (req, res) => {
    try {
        // mysql.promise().query(`select `)
    } catch (e){
        console.log(e)
    }
}


module.exports = {
    moviesSearch,
    favMovies
}