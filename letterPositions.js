const letterPositions = function(sentence) {
  const results = {};
  const str = sentence.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (results[str[i]]) {
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }
    }
  }
  return results;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const check1 = 'hello';
const check2 = 'lighthouse labs is great';
const check3 = 'the ones who live';

assertArraysEqual(letterPositions(check1).h, [0]);
assertArraysEqual(letterPositions(check1).e, [1]);
assertArraysEqual(letterPositions(check1).l, [2, 3]);

assertArraysEqual(letterPositions(check2).l, [0, 11]);
assertArraysEqual(letterPositions(check2).i, [1, 16]);
assertArraysEqual(letterPositions(check2).s, [8, 14, 17]);

assertArraysEqual(letterPositions(check3).e, [2, 6, 16]);
assertArraysEqual(letterPositions(check3).o, [4, 11]);
assertArraysEqual(letterPositions(check3).v, [15]);