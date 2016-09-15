var isPrime = require('./isPrime');

function firstPrimeMultiple(n) {
    if( isPrime(n) ) return n;
    for(var i = 2; i <= Math.sqrt(n); i++) {
        if( n % i === 0 && isPrime(i) ) {
            return i;
        }
    }
}

module.exports = firstPrimeMultiple;
