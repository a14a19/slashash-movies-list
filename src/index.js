require('dotenv').config();
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
const routes = require('./routes/index.routes')
const fs = require('fs');
const path = require('path');

// cors
app.use(cors())
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// setting template engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')
// router
app.use('/', routes)

app.listen(port, console.log(`Server running at ${port}; http://127.0.0.1:${port}`.red.bgYellow.underline.italic));