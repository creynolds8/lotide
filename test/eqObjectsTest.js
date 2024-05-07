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

describe('#eqObjects', () => {
  it('return true when objects are the same', () => {
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });
  it('return false when there are a different number of keys', () => {
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });
});

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

// assertEqual(eqObjects(multiColourShirtObject, anotherMultiColourShirtObject), true);
// assertEqual(eqObjects(multiColourShirtObject, longSleeveMultiColourShirtObject), false);
