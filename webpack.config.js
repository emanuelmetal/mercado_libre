const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'app')

module.exports = {
  context: __dirname,
  entry: './app/ClientApp.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true,
    port: 9090
  },
  resolve: {
    alias: {
      npm: 'node_modules',
      src: 'src',
      app: APP_PATH,
      actions: `${APP_PATH}/actions`,
      api: `${APP_PATH}/api`,
      constants: `${APP_PATH}/constants`,
      utils: `${APP_PATH}/utils`,
      components: `${APP_PATH}/components`,
      containers: `${APP_PATH}/containers`,
      selectors: `${APP_PATH}/selectors`
    },
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules|mocks/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        include: [
          path.resolve(__dirname, 'app')
        ],
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=100000&mimetype=image/svg+xml&name=images/[sha512:hash:base64:7].[ext]'
      }, {
        test: /\.gif$/,
        loader: 'url-loader?limit=100000&mimetype=image/gif&name=images/[sha512:hash:base64:7].[ext]'
      }, {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&mimetype=image/png&name=images/[sha512:hash:base64:7].[ext]'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=100000&minetype=application/font-woff&name=fonts/[sha512:hash:base64:7].[ext]'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=100000&name=fonts/[sha512:hash:base64:7].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ]
}
