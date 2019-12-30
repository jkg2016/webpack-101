const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {   test: /\.(sa|sc|c)ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: '/dist',
                      },
                  },
                  'css-loader',
                  'sass-loader',
                ],
            },
            {  
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        stats: 'errors-only',
        open: true // open browser when you run the first time.
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        title: 'Project',
        //minify:{
        //    collapseWhitespace: true
        //},
        hash: true,
        // Load a custom template (lodash by default)
        template: './src/index.html'}),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'app.css'
          })
    ]
}