module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path: __dirname,
        publicPath: '/assets/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader'},
            {test: /\.styl$/, loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'},
            {test: /\.(jpg|png|svg|woff)$/, loader: 'file-loader'}
        ]
    },
    devServer: {
        contentBase: __dirname,
        hot: true,
        inline: true
    }
};
