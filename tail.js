const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log((`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`));
  } else {
    console.log((`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`));
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

const nums = [1, 2, 3];
tail(nums);
assertEqual(nums.length, 3);

const result = tail([1, 2, 3]);
assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);

const empty = [];
assertEqual(tail(empty).length, 0);

const single = [1];
assertEqual(tail(single).length, 0);