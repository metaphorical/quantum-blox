const path = require('path');
const webpack = require('webpack');

//Use text extraction plugin to get all the css in separate file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    context: __dirname + "/",
    //Since key is used as a name of a file, I use it to add multiple output points by joining path and
    //concatinating with name that includes new path (pushing it all to public/js, but sorting into static and app folders
    entry: [
        'webpack-hot-middleware/client',
        // 'webpack-dev-server/client?http://0.0.0.0:3000/__webpack_hmr', // WebpackDevServer host and port
        // 'webpack/hot/only-dev-server',
        "./ui/main.js"
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            // Babel loader with added react preset, react 0.14+ and babel 6+ wont work together w/o this
            {
                test:/\.(js|jsx)?$/,
                use:[
                    {
                        loader: "react-hot-loader"
                    },
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["react", ["es2015", {"modules": false}]],
                            plugins: ["transform-object-assign", "transform-runtime"]
                        }
                    }
                ],
                exclude: /node_modules/,
                
            },
            {
                test:/\.json$/,
                use:[
                    {
                        loader: "json-loader"
                    }
                ]
                
            },
            // Post-css loader setup, to be able to bundle all the code for the components together
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            minimize: {
                                discardComments: {
                                    removeAll: true
                                }
                            }
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            // Order of postcss transforms is important
                            // since they are executed in sequence
                            plugins: function(webpack) {
                                return [
                                    require('lost'),
                                    // This adds all @import files to the watchlist of webpack
                                    // https://github.com/postcss/postcss-loader#integration-with-postcss-import
                                    require('postcss-import')({
                                        addDependencyTo: webpack,
                                        path: ['./ui/general-styles/', './ui/']
                                    }),
                                    require('postcss-custom-properties'),
                                    require('autoprefixer'),
                                    require('postcss-nested'),
                                    require('postcss-custom-media'),
                                    require('postcss-pxtorem')
                                ];
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eps)$/,
                use: [{
                    loader: 'url'
                }]
            },
            {
                test: /\.(png|jpg)?$/,
                use: [{
                    loader: 'url',
                    options: {
                        query: {
                            limit: 25000,
                            name: "[hash].[ext]"
                        }
                    }
                
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        query: {
                            limit: 25000,
                            name: "[hash].[ext]"
                        }
                    }
                }]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        // Plugin for writing css bundle loaded in components
        new ExtractTextPlugin({ 
            filename: '../css/style.css', 
            allChunks: true 
        }),
        new webpack.DefinePlugin({
            // This is way to set or create global variables...
            // Will use it to check if React is rendered on server or on client side (in webpack or node)
            // APP_ENV does not need to be in process.env
            // NODE_ENV needs to be set to production in prod since lots of stuff, including React use it to optimize prod
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                APP_ENV: JSON.stringify('browser')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin()
    ]
};