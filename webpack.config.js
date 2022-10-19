const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets:
                            [
                                '@babel/preset-env',
                                ['@babel/preset-react',
                                    {
                                        runtime: 'automatic'
                                    }
                                ],
                                '@babel/preset-typescript',
                            ],
                    }
                }
            },
            {
                test: /\.(ts|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                }
            },
            {
                test: /\.(s[ac]ss)|(css)$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Travel && Booking',
            template: path.resolve(__dirname, './src/index.html'),
            // favicon: ""
        })
    ],
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    mode: production ? 'production' : 'development'
}