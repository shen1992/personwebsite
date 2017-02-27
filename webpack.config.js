/**
 * Created by Administrator on 2016/4/6.
 */
var path = require('path'),
    join = path.join,
    resolve = path.resolve
var root = resolve(__dirname)
var app = join(root, 'view/src/app')
var utils = join(root, 'view/src/utils')
var sass = join(root, 'view/src/sass')
var assets = join(root, 'view/src/assets')
var comp = join(root, 'view/src/components')
var webpack = require('webpack')

module.exports = {
    entry: {
        'app': './view/src/container/index.js',
        'vendor': ['react', 'react-dom', 'react-router']
    },
    output: {
        filename: 'bundle.js',
        path: 'view/js',
        publicPath : 'js/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendors.bundle.js"}),
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "css-loader"
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        }, {
            test: /\.scss$/,
            loader:'style!css!sass!autoprefixer'
        }, {
            test: /\.(jpg|png)$/, loader: "url?limit=8192"
        }]
    },
    resolve: {
        alias: {
            app,
            utils,
            sass,
            assets,
            comp
        }
    }
}