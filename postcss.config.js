const webpack = require('webpack');

module.exports = {
  plugins: [
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
};