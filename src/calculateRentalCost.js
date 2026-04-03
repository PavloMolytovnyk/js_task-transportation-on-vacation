/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  payment = 40;
  discont_per_thirddays = 20;
  discont_per_fifthdays = 50;

  if (days < 0) {
    return 'Enter valid days';
  }

  if (days < 3) {
    return days * payment;
  }

  if (days > 2 && days < 7) {
    return days * payment - discont;
  }

  if (days > 6) {
    return days * payment - discont_per_fifthdays;
  }
}

module.exports = calculateRentalCost;
