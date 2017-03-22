'use strict';

const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const generateConf =  function (env) {
    let config = {
        name: 'client',
        context: __dirname + '/',
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
                    loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
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
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('development'),
                    APP_ENV: JSON.stringify('browser')
                },
                HMR_ENABLED: env.hmr === 'true' ? JSON.stringify('true') : JSON.stringify('false')
            }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        require('lost'),
                        // This adds all @import files to the watchlist of webpack
                        // https://github.com/postcss/postcss-loader#integration-with-postcss-import
                        require('postcss-import')({
                            addDependencyTo: webpack,
                            path: ['./ui/general-styles/', './ui/']
                        }),
                        require('lost'),
                        require('postcss-custom-properties'),
                        require('autoprefixer'),
                        require('postcss-nested'),
                        require('postcss-custom-media'),
                        require('postcss-pxtorem')
                    ]
                }
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new WebpackNotifierPlugin(),
        ],
        devtool: 'eval'
    };

    config.entry = [
        'babel-polyfill',
        './ui/main.js'
    ];

    if (env.hmr === 'true') {
        config.plugins.push(new webpack.HotModuleReplacementPlugin());

        config.entry = [
            'babel-polyfill',
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            "./ui/main.js"
        ];

        config.devServer = {
            host: 'localhost',
            port: 3000,
            historyApiFallback: true,
            hotOnly: true
        };

        config.output.publicPath = 'http://localhost:3000/js/';
    } else {
        config.plugins.push(new ExtractTextPlugin({
            filename: '../css/style.css',
            disable: false,
            allChunks: true
        }));
    }

    return config;
};

module.exports = generateConf({hmr: false });