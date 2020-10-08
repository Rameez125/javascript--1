// alert('welcome to the bootcamo');
// var names = prompt("what is your name");
// console.log(names);

// diff b/w var, let, const

// function name(){
//     for(var i=0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }
// name();

// const pi = 3.142;
// pi = 2;
// console.log(pi);

// Data types
// primitive
//      1. string
let email = 'rameezjafri980@gmail.com';
console.log(email);
let name = 'basit'
let job = 'Developer'
let exp = 'more than 2 years'
let result = 'My name is ' + name +  " and i am a " + job + " having " + exp + " experience ";
console.log(result);

let author = 'saad';
let likes = 12;
let shares = 2;
let comments = 44;
let result2 = `This is ${author} and my post has ${likes} likes, ${comments} comments and ${shares} shares`;
console.log(result2);

let email1 = 'rameezjafri25@gmail.com';
console.log(email1.toUpperCase());
console.log(email1.toLowerCase());
console.log(email1.length);
console.log(email1[4]);
console.log(email1.slice(2, 4));
console.log(email1.substr(3, 6));
//      2. number
    //    operators
console.log("Number");
let val1 = 3, val2 = 2;
console.log(val1 + val2);
console.log(val1 - val2);
console.log(val1 / val2);
console.log(val1 * val2);
console.log(val1**2);
console.log(val1 % val2);
   // increment
val1++;
console.log(val1);

//   decrement

val1--;
val1--;
console.log(val1);

// Assignment operators +=, -=, *=, /=

// val2 /= 6;
//  2 / 6
let x = val2 * 'rameez';
 console.log(x);
//  undefine and null
let age1 = null;
console.log(age1 +3);
//      3. boolean work for true or false
let age = 18;
console.log(age == 18);
console.log(age != 18);
console.log(age != 15);
console.log(age == 19);
console.log(age === "18");
console.log(age < 18);
console.log(age <= 18);
console.log(age >= 18);

// array
let name2 = ['Rameez', 'hussain','faraz', 'saad'];
let diff = ['ali', 123, 'true']

let result3 = name2[2]
console.log(result3);

name2[2] = 'aqib';
console.log(name2);
console.log(name2.join('-'));
console.log(name2.concat([true, 123]));
console.log(name2.push('arsalan','ali'));
console.log(name2);
console.log(name2.pop());
console.log(name2.pop());
console.log(name2);
console.log(name2.unshift(true));
console.log(name2);
console.log(name2.shift());
console.log(name2.shift());
console.log(name2.shift());
console.log(name2.shift());
console.log(name2);

