// console.log(2032 / 4);

// let year = 3581;
// let remainder = year % 4;
// // console.log(remainder==0);
// if (remainder==0) {
//     console.log('its a leap year');
// } else {
//     console.log('not a laep year');
// }

//using fuction

function isLeapyear(year) {
    const remainder =year % 4
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}