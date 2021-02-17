const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  entry: ["webpack/hot/poll?1000", path.join(__dirname, "src/index.ts")],
  externals: [
    nodeExternals({
      allowlist: ["webpack/hot/poll?1000"],
    }),
  ],
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/images", to: "images" }],
    }),
  ],
  watch: true,
  // watch: false ,  true in developement
});
