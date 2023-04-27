const glob = require("glob")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new PurgeCSSPlugin({
            paths: glob.sync("./**/*.html"),
            safelist: {
                greedy: [/swiper/, /active/],
            }
        }),
    ],
})