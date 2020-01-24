const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    bundle: path.join(__dirname, "./src/app")
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
    { test: /\.css$/, use: [MiniCssExtractPlugin.loader,"css-loader"], exclude: /node_modules/ },
    {
      test: /\.(png|jp(e*)g|svg)$/,  
      use: [{
          loader: 'url-loader',
          options: { 
              limit: 8000, // Convert images < 8kb to base64 strings
              name: './img/[name].[ext]'
          } 
      }]
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [{
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
        }
    }]
}]
  },
  resolve: {
    extensions: [".ts",".css",".js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./docs")
  },
  devServer: {
    contentBase: path.resolve(__dirname, './docs')
  },
  plugins: [
    new CopyWebpackPlugin([ { from: './src/index.html', to: './' }, ], {}),
    new MiniCssExtractPlugin({ filename: 'app.css' })
  ]
};
