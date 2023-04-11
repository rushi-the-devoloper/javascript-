// colining the arrays by 3 methods
// this ith first method slice method
let array1 = ["item1","item2"];
let array2 = array1.slice(0);
console.log(array1);
console.log(array2);
array1.push("item3");
console.log(array1);
console.log(array2);
// this is the second method concat method
let fysyllabus = ["english" ,"physics","chemistry"]
let sysyllabus = [].concat(fysyllabus);
console.log(fysyllabus);
console.log(sysyllabus);
fysyllabus.push("quantum physics");
console.log(fysyllabus);
console.log(sysyllabus);
console.log(fysyllabus===sysyllabus);
 
// thisi is the third method spread operator
let book1 =  [ "english", "physics", "bio" ];
let book2 =  [...book1];
console.log(book2);
console.log(book1===book2);

// note slice method is the fastest method according to the perfomance
// but mostly people use the spread operator method
// how to add elements in that created new array
// first method is slice method
let subjects = ["english","bio",];
let newSubjects = subjects .slice(0).concat(["physics","bio"]);
console.log(newSubjects);
// second method is concat method
let students = ["rushikesh", "ganesh"];
let morestudents= [].concat(students,["mayur","avi"]);
console.log(morestudents);
console.log(students);
