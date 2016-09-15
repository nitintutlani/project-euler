// Since every number can be broken down to multiples of just prime numbers.
// If we keep dividing the number itself with its first prime divisor we will be left with greatest prime factor.

var isPrime = require('./common/isPrime');

function firstPrimeDivisor(n) {
    for(var i = 2; i <= Math.floor(n / 2); i++) {
        if( n % i === 0 && isPrime(i) ) {
            return i;
        }
    }
}

var num = process.argv[2] || 600851475143;

var first = 1;
while(true) {
    if( num >= first ) {
        first = firstPrimeDivisor(num);
        if( first ) {
            num = num / first;
        } else {
            console.log('Solution', num);
            break;
        }
    }
}
