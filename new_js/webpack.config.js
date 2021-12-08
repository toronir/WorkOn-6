const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        filename: '[name].js',
        path: path.resolve[__dirname, './dist']
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_moduels/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                            '@babel/preset-react'
                        ],

                    }
                }

            },
            {
                test: /\.scss$/,
                exclude: /node_moduels/,
                use: ['style-loader', { loader: MiniCssExtractPlugin.loader, options: { esModule: false } }, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jepg|gif)$/,
                type: 'asset/resource'
            },

        ]

    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        }

    }
}