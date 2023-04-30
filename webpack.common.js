const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

const templatesDirectoryPath = "src/pages";
const templates = [];

fs.readdirSync(templatesDirectoryPath).forEach((file) => {
    templates.push(
        new HtmlWebpackPlugin({
            filename: file,
            template: path.resolve(templatesDirectoryPath, file),
            favicon: path.resolve(
                __dirname,
                "src/assets/img/icons/favicon.ico"
            ),
            alwaysWriteToDisk: true,
        })
    );
});

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/img/[name].[contenthash][ext]",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name].[contenthash][ext]",
                },
            },
        ],
    },
    plugins: [...templates, new HtmlWebpackHarddiskPlugin()],
};
