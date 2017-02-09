/**
 * Created by shen on 2017/1/30.
 */
var express = require('express')
var router = express.Router()
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var markdown = require('markdown').markdown



var Website = require('../model/model')

router.get('/', function (req, res) {

})

router.get('/list', function (req, res) {
    Website.count({type: 'post'}, function (err, count) {
        if(err) return console.error(err)
        var pageCount = Math.ceil(count / 10)
        var page = req.query.page || 0
        var pageArr = []
        for(var i = 0; i < pageCount; i++) {
            pageArr.push(i)
        }
        Website.find({type: 'post'}, 'title postTime _id', {limit: 10, skip: page * 10}, function (err, postList) {
            if(err) return console.error(err)
            res.json({count, pageArr, postList,})
        })
    })
})

router.get('/singlepost', function (req, res) {
    Website.findById(req.query._id, 'title content _id, postTime', function (err, doc) {
        if(err) return console.error(err)
        doc.content = markdown.toHTML(doc.content)
        res.json(doc)
    })
})

router.get('/naturePost', function (req, res) {
    Website.findById(req.query._id, 'title postTime _id content', function (err, doc) {
        if(err) return console.log(err)
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
    var arr = [{
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

router.post('/userComment', function (req, res) {
    var arr = [{
        commentName: req.body.commentName,
        commentContent: req.body.commentContent,
        commentTime: req.body.commentTime,
        type: req.body.type
    }]
    Website.create(arr, (err, doc) => {
        if(err) return console.log(err)
        if(doc) {
            res.send({code: '200', doc})
            console.log('成功插入数据库！')
        }
    })
})

router.get('/userComment', function (req, res) {
    Website.find({type: `comment${req.query._id}`},  'commentName commentContent commentTime _id', function (err, doc) {
        if(err) return console.log(err)
        if(doc) {
            res.json(doc)
        }
    })
})

router.post('/delete', upload.array(), function (req, res) {
    Website.remove({_id: req.body._id}, function (err, doc) {
        if(err) return console.error(err)
        if(doc) {
            res.json(doc)
        }
    })

})

router.get('/findPost', function (req, res) {
    Website.find({title: new RegExp(req.query.title)}, '_id title postTime', function (err, doc) {
        if(err) return console.log(err)
        res.json(doc)
    })
})


router.post('/updatePost', function (req, res) {
    Website.updateOne({_id: req.body._id}, {
        title: req.body.title,
        content: req.body.content,
        postTime: req.body.postTime,
    }, function (err, row) {
        if(err) return console.log(err)
        res.send({code: '200'})
    })
})


module.exports = router

