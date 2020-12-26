const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  watch: false,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

plugins: [
  new FaviconsWebpackPlugin('/path/to/logo.png') // svg works too!
]