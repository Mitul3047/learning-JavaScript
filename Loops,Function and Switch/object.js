var student = { id:121, phone:1234, name:"Abir"};
var student2 = { id:11, phone:456, name:"kabir"};
// console.log(student);
// console.log(student2);
var idNo = student.id     //or we can write var phoneNo = student["phone"]
console.log(idNo);
//update element
student.id = 111;
student["id"] = 11111;
console.log(idNo);