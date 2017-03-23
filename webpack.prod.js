'use strict';

const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const postcssLoaders = [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules:true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ];

module.exports = {
        name: 'client',
        context: __dirname + '/',
        entry: [
            'babel-polyfill',
            './ui/main.js'
        ],
        output: {
            path: path.join(__dirname, 'static'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.(gif|png|jpg|svg)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        context: 'app/client/images',
                        name: '../img/[path][name].[ext]',
                    }
                },
                {
                    test: /\.css$/,
                    use: postcssLoaders
                },
                {
                    test: /\.(woff|woff2)$/,
                    loader: 'url-loader'
                }
            ]
        },
        resolve: {
            alias: {
                app: path.resolve(__dirname, 'app'),
                client: path.resolve(__dirname, 'app/client')
            }
        },
        plugins: [
            new ExtractTextPlugin({
                filename: '../style.css',
                disable: false,
                allChunks: true
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                sourceMap: false,
                output:{
                    comments: false
                },
                compress: {
                    warnings: false
                }
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new WebpackNotifierPlugin(),
        ]
};

