var path = require('path');

module.exports = {
  entry: './src/utils/client-server-code.js',
  output: {
    path: path.resolve(__dirname, 'client-server-code'),
    filename: 'client-server-code.js',
    library: 'client-server-code',
    libraryTarget: 'umd'
  }
};
