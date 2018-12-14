var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
    externals: [{
        vue: "vue"
    }],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, '../src')],
            }
        ]
    },
    // resolve: {
    //     alias: {
    //         'vue$': 'vue/dist/vue.common.js'
    //     }
    // },
    plugins: [
        new VueLoaderPlugin(),
    ]
}