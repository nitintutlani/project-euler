// Very simple problem
var isPrime = require('./common/isPrime');
// Start from 3 skip all evens
// isPrime is optimised for entire app
var n = 3;
var cnt = 1;
while (true) {
    if( isPrime(n) ) {
        cnt++;
        // console.log(n, cnt);
    }
    if( cnt === 10001) break;
    n+=2;
}

console.log('Solution', n);