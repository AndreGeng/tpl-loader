var path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: '\.es6|\.js$',
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
