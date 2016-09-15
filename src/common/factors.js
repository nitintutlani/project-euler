/*

 */

function factors(num) {
    if(num === 0 || num === 1) return [1];

    var half = Math.floor(num / 2), // Ensures a whole number <= num.
        result = [1], // 1 will be a part of every solution.
        i, j;

    // Determine our increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? result.push(i) : false;
    }

    result.push(num); // Always include the original number.
    return result;
}

module.exports = factors;
