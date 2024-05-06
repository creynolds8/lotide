//more AI feedback
//simplify first array length check
//store Math.floor in variable to simplify
//remove Math.floor from line lines 33 & 34 since midElement
//    already has integer value
const middle = function(arr) {
  const output = [];
  const midElement = arr.length / 2;
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    output.push(arr[Math.floor(midElement)]);
    return output;
  } else if (arr.length % 2 === 0) {
    output.push(arr[Math.floor(midElement - 1)],
      arr[Math.floor(midElement)]);
    return output;
  }
};

module.exports = middle;