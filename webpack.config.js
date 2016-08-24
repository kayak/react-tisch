var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    devtool: 'source-map',
    entry: SRC_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'react-tisch.js',
        library: 'ReactTisch',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
        'react-bootstrap': {
            root: 'ReactBootstrap',
            commonjs2: 'react-bootstrap',
            commonjs: 'react-bootstrap',
            amd: 'react-bootstrap'
        }
    },
    module: {
        loaders: [
            {
                // to transform JSX into JS
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [
                        "transform-class-properties",
                        "transform-object-rest-spread"
                    ]
                }
            }
        ],
    },
    resolve: {
        root: SRC_DIR,
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
};

module.exports = config;