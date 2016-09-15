var factors = require('./common/factors');

function sigma2(n) {
    return factors(n).map(function(v) {
        return v *v;
    }).reduce(function(a, b) {
        return a + b;
    });
}

function SIGMA2(n) {
    var result = 0;
    for(var cnt = 1; cnt <= n; cnt++) {
        result += sigma2(cnt);
    }
    return result;
}

// console.log(Math.pow(SIGMA2(10), 15) % Math.pow(10, 9));

// As per question we need: SIGMA2(Math.pow(10,15)) % Math.pow(10, 9);
// But finding factors of 10^15 will take several days
// The solution uses concept of modulo reduction


