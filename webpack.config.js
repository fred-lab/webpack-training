const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');
const sourcePath = path.resolve(__dirname, 'src/js');

const config = {
  entry: {
    main: './src/js/main.js',
  },
  output: {
    filename: '[name].js',
    path: `${outputPath}/js`,
    // publicPath n'a l'air de servir que pour le server de webpack
    publicPath: '/assets/',
  },
  resolve: {
    alias: {
      Src: path.resolve(__dirname, '/src/js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          sourcePath,
        ],
        exclude: [
          path.resolve('./node_modules'),
          outputPath,
        ],
        enforce: 'pre',
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
    ],
  },
};

module.exports = config;
