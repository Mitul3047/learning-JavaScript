var speech = 'i am a good person and i am a student'
// console.log(speech.length)
// console.log(speech[2])
var count = 0;
for (let i = 0; i < speech.length; i++) {
    var char = speech[i];
    if (char == " " && speech[i-1] !=" ") {       //! means not equal to
        // console.log(char)
        count++;
    }
}
count++;
console.log(count);