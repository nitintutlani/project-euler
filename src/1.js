function multiplesUntil(num, until) {
  var result = [];
  for(var cnt = 1; cnt <= (until / num); cnt++) {
      result.push(num * cnt);
  }
  return result;
}

var arraySum = require('./common/arraySum');

var until = 999;

// All multiples of 3 + all multiples of 5 - all multiples of 15 (as they get added twice)
console.log('Solution', arraySum(multiplesUntil(3, until)) + arraySum(multiplesUntil(5, until)) - arraySum(multiplesUntil(15, until)));
