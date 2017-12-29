const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Entry is an array that contains the babel-polyfill to translate es2016 to 2015 and the entry point main.js
    entry: ['babel-polyfill', './src/main.js'],

    // Where webpack will output the bundle.js
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // Loaders are used to apply transformations or perform operations on files of a given type
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    },

    // Plugins are the way, other than loaders, to install custom functionality into webpack
    // Here we are using the HTMLwebpackPlugin to generate an HTML file
    plugins: [
        new HTMLWebpackPlugin({
            title: 'intro to webpack',
            template: './src/index.html'
        })
    ]
};