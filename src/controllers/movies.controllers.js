require('dotenv').config();
const axios = require('axios');
const mysql = require('../config/db')

const moviesSearch = async (req, res) => {
    try {
        // if(!req.body.name){
        //     window.alert('Please type a movie')
        //     res.render('search', { "data": data })
        // }
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
        let checkingExistingIDQuery = `select * from favMovies where imdbID = ?;`
        let checkingExistingID = [req.body.imdbID];
        let checkingExistingData = await mysql.promise().query(checkingExistingIDQuery, checkingExistingID);

        let sqlInsert = "INSERT INTO favMovies (Title, Year, imdbID, Type, Poster) VALUES (?, ?, ?, ?, ?)";
        let insertData = [req.body.Title, req.body.Year, req.body.imdbID, req.body.Type, req.body.Poster]

        // return console.log(req.body, "needs to add", checkingExistingData[0].length)
        if(checkingExistingData[0].length == 0){
            mysql.query(sqlInsert, insertData, (err, result) => {
                if(err) throw err;
                res.send({status: 200, message: 'Added to favorite', success: true})
            })
        }
    } catch (e){
        console.log(e)
    }
}

const getFavList = async (req, res) => {
    try {
        let favSqlQuery = `select * from favMovies;`
        let getFavList = await mysql.promise().query(favSqlQuery);
        let data = getFavList[0];
        console.log(getFavList[0])
        res.render('favMovies', {data: data})
    } catch(e){
        console.log(e)
    }
}

module.exports = {
    moviesSearch,
    favMovies,
    getFavList
}