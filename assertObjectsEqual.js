const eqObjects = function(obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (const key of arr1) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 });
assertObjectsEqual({ a: 1, b: 2, c: 4 }, { a: 1, b: 2, c: 3 });
assertObjectsEqual({ a: 1, b: [2, 3], c: 4}, {a: 1, b: [2, 3], c: 4});
assertObjectsEqual({ a: 1, b: [2, 3], c: 5}, {a: 1, b: [2, 3], c: 4});

module.exports = assertObjectsEqual;