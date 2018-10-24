const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = path.resolve(__dirname, 'dist');
const sourcePath = path.resolve(__dirname, 'src');

const config = {
  entry: {
    app: [`${sourcePath}/js/main.js`, `${sourcePath}/scss/main.scss`],
  },
  output: {
    filename: '[name].js',
    path: outputPath,
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
      {
        /* Convert SASS to CSS */
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS to an external file
          'css-loader', // Allow to import CSS
          {
            /* Add auto prefix to css */
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 2 versions', 'ie > 8'],
                }),
                require('cssnano')({
                  preset: ['default', {
                    discardComments: {
                      removeAll: true,
                    },
                  }],
                }),
              ],
            },
          },
          {
            /* Convert sass to css */
            loader: 'sass-loader',
            options: {
              includePaths: [
                `${sourcePath}/scss`,
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    /* Clean useless files in the dist folder before recompilation */
    new CleanWebpackPlugin(outputPath, {
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
  ],
};

module.exports = config;
