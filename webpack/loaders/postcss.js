module.exports = [
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