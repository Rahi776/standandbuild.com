const path = require('path');

module.exports = {
  entry: {
    index: './src/scripts/index.js',
    home: './src/scripts/home.js',
    projects: './src/scripts/projects.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
