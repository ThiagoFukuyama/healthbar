const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        })
    ]
})