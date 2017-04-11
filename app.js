/**
 * Created by shen on 2017/1/29.
 */
var express = require('express')
var path = require('path');
var bodyParser = require('body-parser')
var session = require('express-session')
var app = express()

app.use(express.static(path.join(__dirname, 'view')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*10*100 //过期时间设置(单位毫秒)
    }
}))
// app.use(require('express-formidable')({
//     uploadDir: path.join(__dirname, 'public'),
//     multiples: true,
//     keepExtensions: true
// }))


var router = require('./router/index')
app.use(router)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

app.listen(9527)

// module.exports = server