const tail = require('../tail');
const assert = require('chai').assert

describe('#tail', () => {
  it('return the tail of a given array', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it('return empty array when given empty array',() => {
    assert.deepEqual(tail([]), []);
  });
  it('return an empty array when given a array with one element', () => {
    assert.deepEqual(tail([1]), []);
  });
});