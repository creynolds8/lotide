const countLetters = function(str) {
  const check = {};
  for (const letter of str) {
    if (letter === ' ') {
      continue;
    } else if (check[letter]) {
      check[letter] += 1;
    } else {
      check[letter] = 1;
    }
  }
  return check;
};

module.exports = countLetters;