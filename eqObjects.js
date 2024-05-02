const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const eqObjects = function(obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (const key of arr1) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        eqArrays(obj1[key], obj2[key]);
      } else if (obj1[key] !== obj2[key]) {
        return false;
      } else {
        return true;
      }
    } 
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

const multiColourShirtObject = {
  colours: ['red', 'blue'],
  size: 'medium'
};
const anotherMultiColourShirtObject = {
  size: 'medium',
  colours: ['red', 'blue']
};
const longSleeveMultiColourShirtObject = {
  size: 'medium',
  colours: ['red', 'blue'],
  sleeveLength: 'long'
};

assertEqual(eqObjects(multiColourShirtObject, anotherMultiColourShirtObject), true);
assertEqual(eqObjects(multiColourShirtObject, longSleeveMultiColourShirtObject), false);