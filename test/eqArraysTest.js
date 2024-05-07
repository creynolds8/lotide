const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArray', () => {
  it('return false if array lengths are not the same', () =>
    assert.isFalse(eqArrays([1, 2], [1, 2, 3])
    ));
  it('return false if any elements of the array are not the same', () =>
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, 4])
    ));
  it('return false when given one array that is empty', () =>
    assert.isFalse(eqArrays([1], [])
    ));
  it('return true when given two empty arrays', () =>
    assert.isTrue(eqArrays([], [])
    ));

});