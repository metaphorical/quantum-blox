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
        loaders: [
            // Babel loader with added react preset, react 0.14+ and babel 6+ wont work together w/o this
            {
                test:/\.(js|jsx)?$/,
                loaders: ["react-hot", 'babel?presets[]=react,presets[]=es2015,plugins[]=transform-object-assign'],
                exclude: /node_modules/,
                // We use two loaders above, for dev server so we can not use clean and neat syntax below 
                // Since webpack does not know which loader queries apply to. 
                // query: {
                //     presets:['react', 'es2015'],
                //     plugins: ['transform-object-assign']
                // }
            },
            {
                test:/\.json$/,
                loader: "json-loader"
            },
            // Post-css loader setup, to be able to bundle all the code for the components together
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&minimize' + JSON.stringify({discardComments: {removeAll: true}}) + '!postcss-loader'
            },
            {
                test: /\.woff$/,
                loader: 'url'
            },
            {
                test: /\.(png|jpg)?$/,
                loader: 'url',
                query: {
                    limit: 25000,
                    name: "[hash].[ext]"
                }
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                query: {
                    limit: 25000,
                    name: "[hash].[ext]"
                }
            }
        ]
    },
    // Order of postcss transforms is important
    // since they are executed in sequence
    postcss: function(webpack) {
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
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        // Plugin for writing css bundle loaded in components
        new ExtractTextPlugin('../css/style.css', { allChunks: true }),
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.DedupePlugin(),
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