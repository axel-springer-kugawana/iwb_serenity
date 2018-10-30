var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        'serenity': './src/js/serenity.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist/js'),
        publicPath: '/dist/',
        filename: '[name].min.js',
        library: 'Serenity',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: "vue"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devtool: '#eval-source-map',
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: "/[\\/]node_modules[\\/]",
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}