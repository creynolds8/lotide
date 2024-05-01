const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const check = {};
  for (const letter of str) {
    if (check[letter]) {
      check[letter] += 1;
    } else {
      check[letter] = 1;
    }
  }
  return check;
};

const check1 = countLetters('hello');
const check2 = countLetters('lighthouse labs is great');
const check3 = countLetters('ccccccccan');

assertEqual(check1['l'], 2);
assertEqual(check2['s'], 3);
assertEqual(check3['c'], 8);