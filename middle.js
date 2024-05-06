const middle = function(arr) {
  const output = [];
  const midElement = arr.length / 2;
  if (arr.length <= 3) {
    return [];
  } else if (arr.length % 2 !== 0) {
    output.push(arr[Math.floor(midElement)]);
    return output;
  } else if (arr.length % 2 === 0) {
    output.push(arr[midElement - 1],
      arr[midElement]);
    return output;
  }
};

module.exports = middle;