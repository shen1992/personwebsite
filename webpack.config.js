/**
 * Created by Administrator on 2016/4/6.
 */
module.exports = {
    entry: './view/src/index.js',
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
    }
};