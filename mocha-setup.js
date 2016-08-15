/**
 * Setup jsdom headless browser for running unit-tests.
 * See https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md
 *
 * This file is included using mocha's --require command line option. See mocha-webpack.opts
 */

require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;