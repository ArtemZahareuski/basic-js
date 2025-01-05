const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let step = 1;
  let count = 1;

  while(step <= str.length) {
    if(str[step] === str[step - 1]) {
      count += 1;
    } else {
      result += count === 1 ? str[step - 1] : `${count}${str[step - 1]}`;
      count = 1;
    }
    step += 1;
  }
  return result;
}

module.exports = {
  encodeLine
};
