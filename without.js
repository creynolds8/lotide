const without = function (source, itemsToRemove) {
  const newArr = [];
  for (let i = 0; i < source.length; i++) {
    let itemMatch = false;
    for (const item of itemsToRemove) {
      if (source[i] === item) {
        itemMatch = true;
        // can use a break statement to bypass needing a variable since if auto checks for truey statement
      }
    }
    if (!itemMatch) {
      newArr.push(source[i])
    }
  }
  return newArr;
};

const eqArrays = function (arr1, arr2) {
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

const result = without([1, 2, 3], [1]);
assertArraysEqual(result, [2, 3]); // should pass

without([1, 2, 3], [1]);

const words = ["hello", "world", "lighthouse"];
without(words,["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;