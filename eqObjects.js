const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) return false;
  for (const key of arr1) {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};


module.exports = eqObjects;