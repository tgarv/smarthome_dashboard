const webpack = require('webpack');
const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css?/,
          use: ['style-loader', 'css-loader'],
        },
        { test: /\.json$/,
          loader: 'json-loader'
        },
      ]
    }
};
module.exports = config;
