const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        watchContentBase: true,
        hot: false
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Component Dev',
            template: path.resolve(__dirname,'src/index.html')
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                // use: ['style-loader', 'css-loader','sass-loader']
                use: ['raw-loader','sass-loader']
            }
        ]
    }
};