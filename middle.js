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
//more AI feedback
//simplify first array length check
//store Math.floor in variable to simplify
//remove Math.floor from line lines 33 & 34 since midElement
//    already has integer value
const middle = function(arr) {
  const output = [];
  const midElement = arr.length / 2;
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    output.push(arr[Math.floor(midElement)]);
    return output;
  } else if (arr.length % 2 === 0) {
    output.push(arr[Math.floor(midElement - 1)],
      arr[Math.floor(midElement)]);
    return output;
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);