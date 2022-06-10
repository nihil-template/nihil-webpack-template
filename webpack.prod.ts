import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'production',
  devtool: 'hidden-source-map',
  entry: {
    app: path.resolve(__dirname, 'src', 'index'),
  },
  resolve: {
    extensions: [ '.js', '.ts', ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/images': path.resolve(__dirname, 'src/images/'),
      '@/styles': path.resolve(__dirname, 'src/styles/'),
      '@/utils': path.resolve(__dirname, 'src/utils/'),
      '@/data': path.resolve(__dirname, 'src/data/'),
      '@/types': path.resolve(__dirname, 'src/types/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[tj]s?/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules'),
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: [ 'last 2 chrome versions', ], },
              },
            ],
            '@babel/preset-typescript',
          ],
        },
      },
      {
        test: /\.(css|scss)/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
  },
};

export default config;
