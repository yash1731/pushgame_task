const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        index: "./src/index.ts"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devServer: {
        static: './dist',
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.png$/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Interaction Test',
        }),
    ],
};