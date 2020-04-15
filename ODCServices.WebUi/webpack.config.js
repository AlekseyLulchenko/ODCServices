const path = require('path');

module.exports = {
  entry: './src/scripts/configStorage/configStorage.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'configStorage.js',
    path: path.resolve(__dirname, 'wwwroot/dist/configStorage'),
  },
};