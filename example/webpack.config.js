const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "/app/index.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js",
  },
  resolveLoader: {
    modules: ["node_modules"],
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.twss/,
        loader: "twss-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "/app/index.html"),
    }),
  ],
};
