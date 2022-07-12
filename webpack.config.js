const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: { booking: path.resolve(__dirname, './src/index.js')},
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: production ? '[name].[hash].js' : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
                                ]
                            ],
                    }
                }
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: !production
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !production
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Travel && Booking',
            template: './src/index.html',
            // favicon: ""
        })
    ],
    devServer: {
        port: 3000,
        hot: true,
    },
    mode: production ? 'production' : 'development'
}