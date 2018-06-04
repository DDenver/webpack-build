const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CssPlugin = new ExtractTextPlugin('app.css');

module.exports = {
    entry: path.join(__dirname, 'src/app.js'),
    output: {
        filename: './app.js',
        path: path.join(__dirname, 'dist/')
    },
    module: {
        rules: [
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.css$/, use: CssPlugin.extract(['css-loader','autoprefixer-loader'])},
        ]
    },
    plugins:[
        CssPlugin
    ]

};