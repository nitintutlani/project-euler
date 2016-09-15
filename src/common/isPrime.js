function isPrime(value) {
    if( value <= 3 ) return true;
    for(var i = 2; i < Math.sqrt(value / 2); i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

module.exports = isPrime;
