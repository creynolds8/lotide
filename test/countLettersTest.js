const assert = require('chai').assert;
const countLetters = require('../countLetters');

const check1 = {
  h: 1,
  e: 1,
  l: 2,
  o: 1
};

const check2 = {
  t: 1,
  h: 2,
  e: 3,
  o: 2,
  n: 1,
  s: 1,
  w: 1,
  l: 1,
  i: 1,
  v: 1,
};

const check3 = {
  H: 1,
  i: 1,
  h: 1,
  e: 1,
  l: 2,
  o: 1,
};

const check4 = {
  h: 1,
  e: 2,
  l: 2,
  o: 2,
  ',': 1,
  C: 1,
  a: 1,
  m: 1,
  r: 1,
  n: 1,
  '.': 1,
};

describe('#countLetters', () => {
  it('return object containing letter keys and number of times seen values for a given string', () => {
    assert.deepEqual((countLetters('hello')), check1);
  });
  it('return object as above but without spaces for multi word strings', () => {
    assert.deepEqual((countLetters('the ones who live')), check2);
  });
  it('return object with case sensitive key value pairs', () => {
    assert.deepEqual((countLetters('Hi hello')), check3);
  });
  it('return object with key value pairs as above, including punctuation', () => {
    assert.deepEqual((countLetters('hello, Cameron.')), check4);
  });
});