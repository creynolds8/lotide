const tail = require('../tail');
const assertEqual = require('../assertEqual');

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