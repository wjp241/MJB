const Path = require('path');

const Config = {
    mode: 'development',

    devServer: {
        publicPath: '/build',
        port: 8080
    },

    entry: {
        app: './client/index.jsx'
    },

    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build/')
    },

    module: {
        rules: [
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
        ]
    },
}

module.exports = Config;