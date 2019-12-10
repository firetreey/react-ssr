const path = require('path')

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                options: {
                    presets: ['@babel/preset-react',['@babel/preset-env']]
                }
            }
        ]
    }
}