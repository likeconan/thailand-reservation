var webpack = require('webpack');
var path = require('path');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const extractLess = new ExtractTextPlugin({ filename: "build/bundle.[chunkhash].css" })

var plguins = [
    extractLess,
    new HtmlWebpackPlugin({
        filename: 'build/index.html',
        template: path.resolve(__dirname, 'tmp-index.html')
    }),
    new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'runtime', // vendor libs + extracted manifest
    //     minChunks: Infinity,
    // }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
        filename: "build/chunk-manifest.json",
        manifestVariable: "webpackManifest"
    })
]

if (env != 'development') {
    plguins = plguins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]);
}


module.exports = {
    entry: ['babel-polyfill', './src/app.client.js'],
    output: {
        path: path.resolve(__dirname),
        filename: 'build/bundle.[chunkhash].js',
        chunkFilename: 'build/bundle.[chunkhash].js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        alias: {
            config: path.resolve(__dirname, 'config/config.' + env + '.json')
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015', 'react', 'stage-0'
                    ],
                    plugins: ['babel-plugin-transform-class-properties', 'transform-decorators-legacy']
                }
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.less$/,
                include: /(client)/,
                use: extractLess.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }, {
                            loader: "postcss-loader"
                        }, {
                            loader: "less-loader"
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]

    },
    plugins: plguins
}