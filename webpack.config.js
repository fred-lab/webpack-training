const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
        /* Check the code with Eslint and after use Babel to compile js to es5 */
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
  plugins: [
    /* Clean useless files in the dist folder before recompilation */
    new CleanWebpackPlugin(outputPath, {
      verbose: true,
    }),
  ],
};

module.exports = config;
