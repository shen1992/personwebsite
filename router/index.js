/**
 * Created by shen on 2017/1/30.
 */
var express = require('express')
var router = express.Router()


var Kitten = require('../model/model')

router.get('/', function (req, res) {

})

router.get('/list', function (req, res) {
    Kitten.find({}, function (err, doc) {
        if(err) return console.error(err)
        res.json(doc)
    })
})

router.get('/delete', function (req, res) {
    res.send('this is delete')
})

module.exports = router

