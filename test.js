'use strict';

require('mocha');
var assert = require('assert');
var re = require('./');

describe('floating-point-regex', function() {
  it('should export a function', function() {
    assert.equal(typeof re, 'function');
  });

  it('should match a floating point string', function() {
    assert(re().test('3.1415926'));
    assert(re().test('-.123456789'));
    assert(re().test('-3.1E+12'));
    assert(re().test('-3.1E-12'));
    assert(re().test('+3.1E-12'));
    assert(re().test('3.1E-12'));
    assert(re().test('3.1E12'));
    assert(re().test('3.1e12'));
    assert(re().test('0.1e-23'));
    assert(re().test('.1e-23'));
    assert(re().test('-2.001'));
    assert(re().test('2.001'));
    assert(re().test('2'));
    assert(re().test('2.0e1'));
  });

  it('should not match a non-floating point string', function() {
    assert(!re().test('.e-23'));
    assert(!re().test('.E-23'));
    assert(!re().test('2.E-23'));
  });
});
