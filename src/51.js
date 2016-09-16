// Find smallest prime of 8 member prime family by replacing 2 digits with same number

// Here can needs to be 0..9 to get a 8 member prime family
// xxx   - 1aa...9aa, a1a..a9a, aa1..aa9
// xxxx  - 10aa..99aa, 1aa0.., ... several combinations
// xxxxx -

// last number needs to be odd and cannot be part of replacement
// all numbers can be replaced or can be 0 to 9

var isPrime = require('./common/isPrime');
var replaceAll = require('./common/replaceAll');
var padNumbers = require('./common/padNumbers');

var digits = Number(process.argv[2]) || 6; // Digits
var replacements = Number(process.argv[3]) || 3; // Replacements
var size = Number(process.argv[4]) || 8; // Prime family size

// For 6 digits: 000000 to 999999
for(let i = 0; i < Math.pow(10, digits) ; i++) {

    let num = padNumbers(i, digits); // Pad left zeros, we use zero as replacement digits

    // Find numbers with as many zeros as replacements with last digit to be 1,3,5,7,9
    if(num.search('^' + '[0-9]*0'.repeat(replacements) + '[1,3,5,7,9]$') !== -1) {

        // Replace zeros to generate 10 number family
        let numbers = [ i ];
        for(let j = 1; j <= 9; j++) {
            numbers.push(replaceAll(num, '0', String(j)));
        }

        // test family for primes
        let firstPrime, nonPrimes = 0;
        for(let k = 0; k <= 9; k++) {
            if( ! isPrime(Number(numbers[k])) ) {
                nonPrimes++;
                if( nonPrimes > (10 - size) ) { // reject if more non-primes found
                    break;
                }
            } else {
                if( ! firstPrime ) firstPrime = numbers[k];
            }
        }
        // Finish after finding first prime family
        if( nonPrimes <= (10 - size) ) {
            console.log('Solution', firstPrime);
            process.exit(0);
        }
    }

}
