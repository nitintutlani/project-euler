// All palidromes must be divisible by 11 because sum of odd places = sum of even places
// So atlest one of the two 3 digit numbers must be divisble by 11

function checkPalindrome(n) {
  return String(n) === String(n).split('').reverse().join('');
}

var minI = 100;
var minJ = 100;
var result = 0;
// The loop has been ran downwards on

var i = 999;

while(i >= minI && i >= minJ) { // Both i and j are decreasing, product of values lower than last match pallindrome will always be lower.
    var j = 990;
    while(j >= minJ) {
        var n = i * j;
        if( checkPalindrome(n) ) {
            minJ = j; // Bump minJ based on last match
            if( result < n) {
                result = n;
            }
        }
        j -= 11;
    }
    i--;
}

console.log('Solution', result);
