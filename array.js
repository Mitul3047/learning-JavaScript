//taking value from an arrya
var friendsAge = [12, 17, 13, 31, 32]; //[0 1 2 3 4 5 ]
var kalamAge = friendsAge[2];

// console.log(friendsAge)
// console.log(friendsAge[3])
// console.log(kalamAge)

//changing  valu in an arry
friendsAge[1] = 21;

//console.log(friendsAge)

//finding the position of an array
var position =friendsAge.indexOf(32);
//console.log(position)

//pushing an element in an array
friendsAge.push(15);
console.log(friendsAge)

// finding the length(important)
console.log(friendsAge.length)

// elemanating an element from an array
friendsAge.pop();   //last element pop hobe
console.log(friendsAge)

//add and remove element from begining (google it)
friendsAge.shift();
console.log(friendsAge)
friendsAge.unshift(100);
console.log(friendsAge)
