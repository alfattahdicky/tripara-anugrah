const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
 entry: "./src/app.js",
 output: {
  filename: "bundle.js",
 },
 module: {
  rules: [
   {
    test: /\.(png|svg|jpg|gif)$/,
    use: ["file-loader"],
   },
   {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ["file-loader"],
   },
   {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
   },
  ],
 },
 plugins: [
  new MiniCssExtractPlugin(),
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
   template: "./src/index.html",
   filename: "index.html",
  }),
  new HtmlWebpackPlugin({
   template: "./src/index-interior.html",
   filename: "index-interior.html",
  }),
  new HtmlWebpackPlugin({
   template: "./src/index-contact.html",
   filename: "index-contact.html",
  }),
  new HtmlWebpackPlugin({
   template: "./src/index-billboard.html",
   filename: "index-billboard.html",
  }),
  new CopyWebpackPlugin({
   patterns: [
    {
     from: "src/img",
     to: "img",
    },
   ],
  }),
 ],
 performance: {
  hints: false,
 },
};
