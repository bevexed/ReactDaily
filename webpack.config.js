const path = require('path');
const webpackHtmlPlugin = require('html-webpack-plugin');

const htmlPlugin = new webpackHtmlPlugin({
    template: path.join(__dirname, './index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"
    },
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            {test: /\.js|jsx$/, use: 'babel-loader',exclude:/node_modules/}
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.json']
    }
}