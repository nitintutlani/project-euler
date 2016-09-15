function isPrime(value) {
    if( value <= 3 ) return true;
    for(var i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

module.exports = isPrime;
