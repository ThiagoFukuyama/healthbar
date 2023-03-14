const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/index.js"),  
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { 
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    } 
                }
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/img/[name][ext]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "assets/fonts/[name][ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "HealthBar",
            filename: "index.html",
            template: "src/template.html"
        })
    ]
}