// module.exports = {
//   // 1
//   entry: "./src/index.js",
//   // 2
//   output: {
//     path: "/dist",
//     filename: "bundle.js",
//   },
//   // 3
//   devServer: {
//     contentBase: "./dist",
//   },
// };
const path = require("path");
const webpack = require("webpack"); //hot loader
module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
  },
};
