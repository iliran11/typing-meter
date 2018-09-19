var path = require('path');

module.exports = {
  entry: './src/utils/sharedCode',
  output: {
    path: path.resolve(__dirname, 'isomoprhic-code'),
    filename: 'sharedCode.js',
    library: 'sharedCode',
    libraryTarget: 'umd'
  }
};
