const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './modules/src/app.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'modules', 'assets', 'scripts'),
    publicPath: 'modules/assets/scripts/'
  },
  devtool: 'cheap-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};