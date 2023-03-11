const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './entry.js',
        'bundle.min': './entry.js',
    },
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: '[name].js',
    },
    optimization: {
        minimize: false
    },
    plugins: [],
};
