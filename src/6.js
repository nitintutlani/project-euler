// But since this is a sequence of n numbers
// Sum of first n numbers = n(n + 1)/2
// Sum of sqs of first n numbers = (2n+1)(n+1)(n)/6

// 1*1 + 2*2 + ... + limit * limit

var n = Number(process.argv[2]) || 100;

console.log('Solution',  Math.pow(( n * (n + 1) / 2 ), 2) - ((2*n + 1) * (n + 1) * n / 6) );
