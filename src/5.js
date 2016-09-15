// This is simple LCM problem

var primeMultiples = require('./common/primeMultiples');
var firstPrimeMultiple = require('./common/firstPrimeMultiple');

var numbers = [];
for(var i = 2; i <= (process.argv[2] || 20); i++) {
    numbers.push(i);
}
var result = 1;
while(numbers.length) {
    console.log(numbers);
    var p = firstPrimeMultiple(numbers[0]);
    console.log(p);
    result *= p;
    numbers = numbers.map((item) => {
        return item % p === 0 ? item / p : item;
    }).filter((item) => {
        return item !== 1;
    });
}

console.log('Solution', result);
