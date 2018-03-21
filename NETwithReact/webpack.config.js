"use strict";

module.exports = {
    entry: {
        page: "./Scripts/React/src/page.js"
    },
    output: {
        path: "./Scripts/React/dist",
        filename: "[name]-bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};