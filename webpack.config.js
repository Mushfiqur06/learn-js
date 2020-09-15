const path = require("path");
const { test } = require("picomatch");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  devServer: {
    open: true,
  },
};
