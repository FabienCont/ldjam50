const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|mp3|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};