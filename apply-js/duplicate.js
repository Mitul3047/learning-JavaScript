var nam = [2, 5, 6, 2, 4, 5, 2, 5, 7, 9, 9, 33 , 55, 77, 43]
var uniqueNam = []

for (let i = 0; i < nam.length; i++) {
    const element = nam[i];
    var index = uniqueNam.indexOf(element)
    if (index== -1) {
        uniqueNam.push(element)
    }
}
console.log(uniqueNam)