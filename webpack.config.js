'use strict';

const path = require('path');
const webpack = require('webpack');
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
                        limit: 2500,
                        context: 'static/img',
                        name: '[path][name].[ext]',
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
                ui: path.resolve(__dirname, 'ui')
            }
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('development')
                }
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new WebpackNotifierPlugin(),
        ]
};

