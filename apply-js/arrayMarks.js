var marks = [30, 40, 89, 45, 65, 88, 96, 23, 74]
var max =marks[0];
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element>max) {
        max=element;
    }
}
console.log('hight value:',max)