const path = require('path')

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'index.js',
        library: 'PriceToWordsPl',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this',
        module: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
    mode: 'production'
};