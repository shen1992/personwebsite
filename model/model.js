/**
 * Created by shen on 2017/1/30.
 */
var mongoose = require('mongoose')
mongoose.connect('mongodb://shen:lyg5518263@ds161049.mlab.com:61049/pesonwebsite')

const db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误'))
db.once('open', function () {
    console.log('连接成功！')
})

var PersonWebsite = mongoose.Schema({
    title: String,
    author: String,
    content: String,
    postTime: Number,
    type: String,
    commentName: String,
    commentContent: String,
    commentTime: Number,
})

// PersonWebsite.index({postTime: -1})

var Website = mongoose.model('website', PersonWebsite)

module.exports = Website