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

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const test1 = ['aa', 'bb', 'cc', 'dd'];
const test2 = ['bob', 'jim', 'john', 'rob'];
const test3 = ['12', '13', '13', '14'];

assertArraysEqual(map(test1, (word) => word[0]), ['a', 'b', 'c', 'd']);
assertArraysEqual(map(test2, (word) => word[0]), ['b', 'j', 'j', 'r']);
assertArraysEqual(map(test3, (word) => word[0]), ['1', '1', '1', '1',]);

module.exports = map;