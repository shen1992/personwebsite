/**
 * Created by shen on 2017/1/29.
 */
var express = require('express')
var path = require('path');
var app = express()


var router = require('./router/index')

app.use(router)
app.use(express.static(path.join(__dirname, 'view')));

app.listen(9528)