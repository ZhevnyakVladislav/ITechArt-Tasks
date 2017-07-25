var path = require('path');
var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin')

const webpackConfig = {
    entry: './fourthTask(es+babel)/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './fourthTask(es+babel)/dist')
    },
    watch: true,
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, './fourthTask(es+babel)'),
                use: ['babel-loader']
            },{
                test:    /\.js$/,
                exclude: /node_modules/,
                loader: 'jscs-loader'
            }
        ]
    },
    plugins: [
        new BellOnBundlerErrorPlugin()
    ],
};

module.exports = webpackConfig;
