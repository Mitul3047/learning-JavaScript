// var i = 1;
// var factorial = 1;
// while (i<=10) {
//     factorial =factorial * i;
//     console.log(i, factorial);
//     i++;
// }
function factorial(n) {
    var i = 1;
    var factorial = 1;
    while (i <= n) {
        factorial = factorial * i;
        // console.log(i, factorial);
        i++;
    }
        return factorial;
}
var result = factorial(3);
console.log(result)