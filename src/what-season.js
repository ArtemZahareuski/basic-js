const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if(typeof date.getMonth !== 'function' || typeof date !== 'object' || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
  }
  
  let winter = [11, 0, 1];
  let spring = [2, 3, 4];
  let summer = [5, 6, 7];
  let autumn = [8, 9, 10];
  let season = date.getMonth();
  
  if(winter.includes(season)) {
    return 'winter';
  }
  if(spring.includes(season)) {
    return 'spring';
  }
  if(summer.includes(season)) {
    return 'summer';
  }
  if(autumn.includes(season)) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
