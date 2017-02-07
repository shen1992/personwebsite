/**
 * Created by Administrator on 2016/4/6.
 */
var path = require('path'),
    join = path.join,
    resolve = path.resolve
var root = resolve(__dirname)
var app = join(root, 'view/src/app')
var utils = join(root, 'view/src/utils')

module.exports = {
    entry: './view/src/container/index.js',
    output: {
        filename: 'bundle.js',
        path: 'view/js'
    },
    module: {
        loaders: [{
            test: /\.coffee$/,
            loader: 'coffee-loader'
        }, {
            test: /\.css$/,
            loader: "css-loader"
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        }]
    },
    resolve: {
        alias: {
            app,
            utils
        }
    }
};