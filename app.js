const express = require('express');
const app = express();
const blogsRouter = require('./api/routes/blogs_r');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// database connection
mongoose.connect("mongodb://localhost:27017/blogger")
.then(() => {
    console.log('database connected successful.');
})
.catch(err => {
    console.log(`database connection error: ${err.message}`);
})

app.use(cors());
mongoose.Promise = global.Promise;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     req.header("Access-Control-Allow-Origin", "*");
//     req.header("Access-Control-Allow-Headers", "Origin, X-Requisted-With, Content-Type, Accept, Authorization");
//     if(req.method === "POTIONS") {
//         req.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE");
//             return res.status(200).json({});
//     }
// })
app.use(express.static(__dirname + '/'));

app.use('/blogs', blogsRouter);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message
    })
})

module.exports = app;