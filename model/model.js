/**
 * Created by shen on 2017/1/30.
 */
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

const db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误'))
db.once('open', function () {
    console.log('连接成功！')
})

var KittySchema = mongoose.Schema({
    name: String
})

var Kitten = mongoose.model('Kitten', KittySchema)

module.exports = Kitten