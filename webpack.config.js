var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    mode: 'none',
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },
    output:{
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    devServer:{
        port: 5000,
        publicPath: 'http://localhost:5000'
    },
    plugins: [HTMLWebpackPluginConfig]
};
