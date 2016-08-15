const config = require('./webpack.config');
const extend = require('extend');
var nodeExternals = require('webpack-node-externals');

module.exports = extend(
    // shallow extend the base configuration to avoid extending
    // unwanted configuration options in `output` and `external`
    false,
    config,
    {
        target: 'node',

        output: {
            // Override base config's output with an empty dictionary.
            // umd options would break unit tests.
                // sourcemap support for IntelliJ/Webstorm
                devtoolModuleFilenameTemplate: '[absolute-resource-path]',
                devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
        },

        externals: [nodeExternals()]
    }
);
