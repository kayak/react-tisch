var webpack = require('webpack');
var path = require('path');

var ROOT_DIR = path.resolve(__dirname, 'demo');

var config = {
    devtool: 'source-map',
    entry: ROOT_DIR + '/src/index.jsx',
    output: {
        path: ROOT_DIR,
        filename: 'demo.js',
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
        },
        'react-tisch': {
            root: 'ReactTisch',
            commonjs2: 'react-tisch',
            commonjs: 'react-tisch',
            amd: 'react-tisch'
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
        root: ROOT_DIR,
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
};

module.exports = config;