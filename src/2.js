// [ 1, 1, 2, 3, 5, 8, 13, 21, 34 ...]
// every 3rd number is even as it is sum of two previous odds
var a = 1;
var b = 1;
var c = a + b;
var result = 0; // we add 2 as first even number manually

while(true) {
    if( c >= 4000000) {
        break;
    } else {
        console.log('Add',c, 'to', result, 'gives', result + c);
        result += c;
    }
    // first step
    a = b;
    b = c;
    c = a + b;
    console.log(a,b,c);
    // second step
    a = b;
    b = c;
    c = a + b;
    console.log(a,b,c);
    // third step
    a = b;
    b = c;
    c = a + b;
    console.log(a,b,c);
}

console.log('Solution', result);
