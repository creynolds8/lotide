const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArray', () => {
  it('return false if array lengths are not the same', () =>
    assert.isFalse(eqArrays([1, 2], [1, 2, 3])
    ));
});