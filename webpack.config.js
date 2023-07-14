const path = require('path');

module.exports = {
  entry: './src/index.js', // Specify the entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output directory for the bundled files
    filename: 'bundle.js', // Specify the name of the bundled file
  },
  // Add additional webpack settings and plugins as needed
};
