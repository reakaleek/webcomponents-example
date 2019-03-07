const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    webcomponent: path.resolve(
      __dirname,
      'src',
      'webcomponents',
      'hyperapp-autocomplete',
      'index.js',
    ),
    mithril: path.resolve(__dirname, 'src', 'mithril', 'index.js'),
    react: path.resolve(__dirname, 'src', 'react', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'css-loader' }],
      },
      {
        test: /hyperapp-autocomplete\/.*\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-react-jsx', { pragma: 'h' }],
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /react.*\/.*\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-react-jsx',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new CopyPlugin([
      {
        from: path.resolve(
          __dirname,
          'node_modules',
          '@webcomponents',
          'webcomponentsjs',
          'custom-elements-es5-adapter.js',
        ),
        to: 'custom-elements-es5-adapter.js',
      },
      {
        from: path.resolve(
          __dirname,
          'node_modules',
          'bulma',
          'css',
          'bulma.min.css',
        ),
        to: 'bulma.min.css',
      },
    ]),
  ],
  devServer: {
    port: 3000,
    inline: true,
    stats: { colors: true },
  },
}
