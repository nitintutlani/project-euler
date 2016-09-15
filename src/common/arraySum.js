/*

 */

function arraySum(arr) {
    return arr.reduce(function(a,b) {
        return a + b;
    });
}

module.exports = arraySum;
