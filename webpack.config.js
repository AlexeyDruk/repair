const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { loader } = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
console.log('ISDEV:', isDev)

const optimisation = () => {
   const config =  {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isProd) {
        config.minimizer = [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetWebpackPlugin()
        ]
    }
    return config
}

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output:{
    filename:'bundle.js',
    path: path.resolve(__dirname,'dist')
 },
 plugins:[
    new HtmlWebpackPlugin({
        template: './src/index.html',
        minify:{ 
            collapseWhitespace: isProd
        }
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),
    new CleanWebpackPlugin()
 ],
 optimization: optimisation(),
 devServer:{
    port: 4200,
    hot: isDev
 },
 module:{
    rules:[
        {
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options:{},
            },
                'css-loader'
            ]
        },
        {
            test: /\.s[ac]ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            },
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test:/\.(ttf|woof|woof2|eot)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
              }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options:{
                presets: [
                    '@babel/preset-env',        
                ],
                plugins:[
                    '@babel/plugin-proposal-class-properties'
                ]
            }
        },
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options:{
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript'
                ],
                plugins:[
                    '@babel/plugin-proposal-class-properties'
                ]
            }
        
    }
    ]
 }
}