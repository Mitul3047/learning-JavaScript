//iteracting method
// var factorial = 1;
// for (let i = 1; i < 6 ; i++) {
//     //   const element = array[i];
//     factorial = factorial * i
//     console.log(i, factorial);
// }

//by function
function fac(n) {
    var fac = 1;
    for (let i = 1; i <= n ; i++) {
        //   const element = array[i];
        fac = fac * i;
    } 
    return fac;
}
let result = fac(3);
console.log(result);