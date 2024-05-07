const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


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

describe('#eqObjects', () => {
  it('return true when objects are the same', () => {
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });
  it('return false when there are a different number of keys', () => {
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });
  it('return true if objects match even if some values are arrays provided arrays are equal', () => {
    assert.isTrue(eqObjects(multiColourShirtObject, anotherMultiColourShirtObject))
  });
  it('return false when objects are not equal, includes array values', () => {
    assert.isFalse(eqObjects(multiColourShirtObject, longSleeveMultiColourShirtObject))
  });
});




// assertEqual(eqObjects(multiColourShirtObject, anotherMultiColourShirtObject), true);
// assertEqual(eqObjects(multiColourShirtObject, longSleeveMultiColourShirtObject), false);
