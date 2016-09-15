var firstPrimeMultiple = require('./firstPrimeMultiple');

function primeMultiples(num) {
    var result = []; num = Number(num);
    while(true) {
        var n = firstPrimeMultiple(num);
        if( n ) {
            result.push(n);
            num = num / n;
        } else {
            result.push(num);
            return result;
        }
    }
}

module.exports = primeMultiples;
