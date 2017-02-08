/**
 * Created by shen on 2017/1/30.
 */
var express = require('express')
var router = express.Router()
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data


var Website = require('../model/model')

router.get('/', function (req, res) {

})

router.get('/list', function (req, res) {
    Website.count({type: 'post'}, function (err, count) {
        if(err)console.error(err)
        let pageCount = Math.ceil(count / 10)
        let page = req.query.page || 0
        Website.find({}, 'title postTime _id', {limit: 10, skip: page * 10}, function (err, postList) {
            if(err) return console.error(err)
            res.json({count, pageCount, postList,})
        })
    })
})

router.get('/singlepost', function (req, res) {
    Website.findById(req.query._id, 'title content _id, postTime', function (err, doc) {
        if(err) return console.error(err)
        res.json(doc)
    })
})

router.get('/login', function (req, res) {
    if(req.session.user) {
        res.send({code: '200'})
    } else {
        res.send({code: '500', message: '请先登录！'})
    }
})

router.post('/login', function (req, res) {
    var user = {
        username: 'shen',
        password: 'lyg5518263'
    }
    if(req.body.username === user.username && req.body.password === user.password) {
        req.session.user = user
        res.send({code: '200'})
    } else {
        req.session.error = '用户名或密码不正确'
        res.send({code: '404', message: 'no found'})
    }
})

router.post('/create', function (req, res) {
    let arr = [{
        author: req.body.author,
        content: req.body.content,
        title: req.body.title,
        postTime: req.body.postTime,
        type: req.body.type,
    }]
    Website.create(arr, (err, doc) => {
        if(err) return console.log(err)
        if(doc) {
            res.send({code: '200'})
            console.log('输入成功插入数据库')
        }

    })
})

router.post('/delete', upload.array(), function (req, res) {
    Website.remove({_id: req.body._id}, function (err, doc) {
        if(err) console.error(err)
        if(doc) {
            res.json()
        }

    })

})

module.exports = router

