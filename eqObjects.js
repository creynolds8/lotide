const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) {
    return false;
  } else {

  }
};

const shirtObject = {
  colour: 'red',
  size: 'medium'
};
const anotherShirtObject = {
  colour: 'red',
  size: 'medium'
};
const longSleeveShirtObject = {
  colour: 'red',
  size: 'medium',
  sleeveLength: 'long'
};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);