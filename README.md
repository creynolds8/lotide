# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: return the first indexed element of a given array.
- `tail(array)`: return all but the first indexed element of a given array.
- `middle(array)`: return the middle element of a given array, two if array is of even length, in an array.
- `eqArrays(array1, array2)`: return boolean whether two given arrays are equal.
- `assertArraysEqual(array1, array2)`: log a colorful pass/fail message, requires eqArrays.
- `eqObjects(object1, object2)`: return boolean whether two given objects are equal.
- `assertObjectsEqual(object1, object2)`: log a colorful pass/fail message, requires eqObjects.
- `assertEqual(actual, expected)`: log a colorful pass/fail message whether two given primative values are equal.
- `countLetters(string)`: count letters in a given string and return an object of how many times each letter appears in that string.
- `countOnly(array, object)`: return an object containing the number of times each object key from the given object appears in the array.
- `findKey(object, callback)`: return key from given object that meets callback function requirements.
- `findKeyByValue(object, string)`: return key from the given object that has a value matching the given string.
- `letterPositions(string)`: return an object containing the letters and the indices at which they appear in the given string.
- `takeUntil(array, callback)`: return an array containing all elements from the given array until the callback function returns true.
- `without(array1, array2)`: return array containing all values from array1 with any values from array2 removed.
- `flatten(array)`: return new flattened array, only supports 1 level of nesting.