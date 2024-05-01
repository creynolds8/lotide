const without = function (source, itemsToRemove) {
  const newArr = [];
  for (let i = 0; i < source.length; i++) {
    for (item of itemsToRemove) {
      if (source[i] !== item) {
        newArr.push(source[i]);
      }
    }
  }
  console.log(newArr);
};

without([1, 2, 3], [1]);