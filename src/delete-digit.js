const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let numArr = n.toString().split('');

  for(let i = 0; i < numArr.length; i++) {
    let newNumArr = numArr.slice('');
    newNumArr.splice(i, 1);
    let sum = newNumArr.join('');
    if(sum > max) {
      max = sum;
    }
  }
  return +max;
}

module.exports = {
  deleteDigit
};
