const reverse = function(arr) {
  for (let word of arr) {
    let newStr = "";
    for (let i = word.length - 1; i >= 0; i--) {
      newStr += word[i];
    }
    console.log(newStr);
  }
};

const arr = process.argv.slice(2);
let newStr = reverse(arr);