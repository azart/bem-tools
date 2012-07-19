var assert = require('chai').assert,
    PATH = require(process.env.COVER? '../lib-cov/path' : '../lib/path');

/**
 * Mocha BDD interface.
 *
 * @name describe @function
 * @name it @function
 * @name before @function
 * @name after @function
 * @name beforeEach @function
 * @name afterEach @function
 */

function absolute(path) {
    return PATH.absolute(path, __dirname);
}

describe('path', function() {

    describe('relative() call with params', function() {

        it("('./', './data/') resolves to 'data/'", function() {
            assert.equal(PATH.relative(absolute('./'), absolute('./data/')), PATH.unixToOs('data/'));
        });

        it("('./data/', '../lib') resolves to '../lib'", function() {
            assert.equal(PATH.relative(absolute('./data/'), absolute('../lib')), PATH.unixToOs('../../lib'));
        });

        it("('./file.js', '../lib') resolves to '../lib'", function() {
            assert.equal(PATH.relative(absolute('./file.js'), absolute('../lib')), PATH.unixToOs('../lib'));
        });

    });

});
