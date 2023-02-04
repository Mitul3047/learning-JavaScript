// var business = 250;
// var minister = 350;
// if (business > minister) {
//     console.log('b is biger')
// }else{
//     console.log('m is biger')
// }
var business = 450;
var minister = 350;
var sochib = 150;
if (business>minister) {
    if (business>sochib) {
        console.log('business is bigger');
    }
}
else{
    if (minister>sochib) {
        console.log('misiter is bigger')
    }
    else{
        console.log('sochib is bigger')
    }
}
// or can be done with Math.max
var max = Math.max(business,minister,sochib)
console.log(max)