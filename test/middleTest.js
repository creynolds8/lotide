const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('return empty array if given empty array', () => {
    assert.deepEqual(middle([]), []);
  });
  it('return empty array if given array with 1 or 2 elements', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('return array containing the middle element if given array of odd length', () =>{
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('return array of middle two elements from given array if length is even', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});