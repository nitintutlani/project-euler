function isPrime(value) {
    for(var i = 2; i < Math.floor(value / 2); i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

module.exports = isPrime;
