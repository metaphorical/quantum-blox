'use strict';

const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
// const BabiliPlugin = require('babili-webpack-plugin');


const postcssLoaders = require('./webpack/loaders/postcss');

module.exports = {
        name: 'client',
        context: __dirname + '/',
        entry: {
            main: [
                'webpack-hot-middleware/client',
                'babel-polyfill',
                './ui/main.js'
            ]
        },
        output: {
            path: path.join(__dirname, 'static/js'),
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /node_modules/,
                    use: [
                        'react-hot-loader/webpack',
                        {
                            loader: 'babel-loader',
                            options: { presets: [ ['es2015', { modules: false }], 'react' ]  }
                        }
                    ],
                },
                {
                    test: /\.(gif|png|jpg|svg)?$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 2500,
                            name: '../img/[name].[ext]'
                        }
                    }]
                },
                {
                    test: /\.css$/,
                    use: postcssLoaders
                },
                {
                    test: /\.(woff|woff2)$/,
                    loader: [{
                        loader: 'url-loader',
                        options: {
                            limit: 2500,
                            name: '../fonts/[name].[ext]'
                        }
                    }]
                }
            ]
        },
        devtool: 'eval',
        resolve: {
            alias: {
                ui: path.resolve(__dirname, 'ui')
            }
        },
        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            // new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new WebpackNotifierPlugin(),
        ]
};

