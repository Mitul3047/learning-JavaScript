// var n =79;

// for (let i = 2; i <= n-1 ; i++) {
//     console.log(i, n % i);
//     if (n % i ==0) {
//         console.log('is not a prime number');
//         break;
//     } 

// }
// console.log('prime number')

function isrime(n) {
    for (let i = 2; i <= n - 1; i++) {
        // console.log(i, n % i);
        if (n % i == 0) {
            return 'is not a prime number';
        }
    }
    return 'is prime';
}
var result =isrime(128);
console.log(result);