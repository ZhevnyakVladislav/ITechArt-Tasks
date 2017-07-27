var path = require('path');
var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

const webpackConfig = {
    entry: {
        fourth: './fourthTask(es+babel)/index.js',
        fifth: './fifthTask(deepJS)/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, './fourthTask(es+babel)'),
                use: ['babel-loader']
            }, {
                test:    /\.js$/,
                exclude: /node_modules/,
                loader: 'jscs-loader'
            }
        ]
    },
    plugins: [
        new BellOnBundlerErrorPlugin()
    ]
};

module.exports = webpackConfig;
