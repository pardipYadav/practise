/*let age = prompt("enter your age");
age = parseInt(age);
if (age > 10 && age < 20) {
  console.log("you are eligible to participate in the event");
} else {
  console.log("you are not eligible to participate in the event");
}*/

/*let age = prompt("enter your age");
age = parseInt(age);

switch (age) {
  case 10:
    console.log("you are 10 years old");
    break;
  case 20:
    console.log("you are 20 years old");
    break;
  case 30:
    console.log("you are 30 years old");
    break;
  case 40:
    console.log("you are 40 years old");
    break;
  default:
    console.log("you are not in the range of 10 to 40");
}*/

/*let num = prompt("enter a number");
num = parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
  console.log("the number is divisible by 2 and 3");
} else {
  console.log("the number is not divisible by 2 and 3");
}*/

/*let num = prompt("enter a number");
num = parseInt(num);
if (num % 2 == 0 || num % 3 == 0) {
  console.log("the number is divisible by 2 or 3");
} else {
  console.log("the number is not divisible by 2 or 3");
}*/

/*let age = prompt("enter your age");
num = parseInt(age);
console.log("you", age >= 18 ? "can drive" : "cannot drive");*/

/*sum = 0;
let num = prompt("enter a number");
num = parseInt(num);
for (n = 1; n < num; n++) {
  //   sum += n + 1;
  console.log(n + 1, "+");
  if (n % 2 == 0) {
    console.log(n, "is even");
  }
}*/
// console.log("the sum of the numbers is", sum);

/*let obj = {
  rahul: 95,
  vinay: 90,
  shivam: 85,
  akash: 80,
  rohit: 75,
  ankit: 70,
  abhay: 65,
  abhi: 60,
};
for (let s in obj) {
  console.log(s + ":" + obj[s]);
}

for (let be of "hello world") {
  console.log(be);
}*/

// while demonstration code

/*let num = prompt("enter a number");
num = parseInt(num);
let i = 1;
while (i <= num) {
  console.log(i);
  i++;
}*/

/*let marks = {
  rahul: 95,
  vinay: 90,
  shivam: 85,
  akash: 80,
  rohit: 75,
  ankit: 70,
  abhay: 65,
  abhi: 60,
};*/
/*for (let i = 1; i <= Object.keys(marks).length; i++) {
  console.log(Object.keys(marks)[i] + ":" + marks[Object.keys(marks)[i]]);
}*/

/*for (let key in marks) {
  console.log(key + ":" + marks[key]);
}*/

/*let cn = 4;
let i;
while (i != cn) {
  console.log("you have entered wrong number, please try again");
  i = prompt("enter a number");
}
console.log("now you have entered correct number which is " + cn);*/ // this will be executed when the user enters the correct number

// simple mean program
/*const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(1, 2, 3, 4));*/ // this will return the mean of the four numbers

/*let str = 'abhinav\n"';
console.log(str.length);*/

/*let str1 = "Saturday night plans";
console.log(str1.startsWith("Sat"));
console.log(str1.startsWith("Sat", 3));
*/

/*let str2 = "Saturday full night plans";
console.log(str2.endsWith("night"));
console.log(str2.endsWith("night", 12));*/

/*let str3 = "Please give us 1000";
let amount = str3.slice("Please give us ".length);
amount = parseInt(amount);
console.log(amount);*/

/*let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
delete num[0]; 
console.log(num.length);
console.log(num);*/

/*let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num1 = [20, 30, 40, 50, 60, 70, 80, 90, 100];
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let num3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let parsArray = num.concat(num1, num2, num3);
console.log(parsArray);*/
/*const compare = (a, b) => {
  return a - b;
};
let num = [11, 52, 83, 74, 35, 46, 97, 28, 59, 150];
num.sort(compare);
console.log(num);*/

// let num = [32, 455, 55, 23, 12, 45, 67, 89, 90, 100];
// let deletedval = num.splice(1, 3, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55);
// console.log(deletedval);

/*let num = [32, 455, 55, 23, 12, 45, 67, 89, 90, 100];
num.slice(3, 5);
console.log(num);*/

// array methods:

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = num.toString();
// console.log(b); // this will convert the array to string
// let c = num.join("-");
// console.log(c); // this will join the array elements with -
// let d = num.pop(); // this will remove the last element from the array
// console.log(d); // this will return the last element of the array
// let e = num.push(11); // this will add the element to the end of the array
// console.log(num); // this will return the array with the new element added to the end of the array
// let f = num.shift(); // this will remove the first element from the array
// console.log(num, f); // this will return the first element of the array
// let g = unshift(66); // this will add the element to the beginning of the array
// console.log(num, g);

// loops method:

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// let num = [2, 5, 65, 6, 78];
// num.forEach((element) => {
//   console.log(element * element);
// });

/*let paragraph = "hello world something is wrong with the world"; // this is a string
let word = Array.from(paragraph); // this will convert the string or collection of html to an array of characters
console.log(word);*/

// let num = [81, 2, 63, 4, 75, 6, 7, 58, 39, 10];
// for (i of num) {
//   // this will iterate over the array and print the elements of the array
//   console.log(i);
// }

// for (item in num) {
//   // this will iterate over the array and print the index of the elements of the array
//   console.log(item);
// }

// for (j of num) {
//   // this will iterate over the array and print the elements of the array
//   console.log(j);
// }

/*let arr = [21, 32, 54, 65];
let d = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(d);*/

// let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let f = numarr.filter((value) => {
//   return value > 5;
// });

// console.log(numarr);
// console.log(f);

/*let numarr1 = [1, 2, 3, 4, 5, 6];
let r = numarr1.reduce((elemt, index) => {
  console.log(elemt, index);
  return elemt + index;
});
console.log(r); // this will return the sum of the elements of the array
*/

/*let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = prompt("enter a number");
a = parseInt(a);
num.push(a);
console.log(num);*/

/*let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a;
do {
  a = prompt("enter a number");
  a = parseInt(a);
  num.push(a);
} while (a != 0);
console.log(num); // this will add the number to the array until the user enters 0
*/

/*let filt = [1, 54, 2, 6, 44, 878, 23, 45, 67, 89, 90, 100];
let n = filt.filter((x) => {
  return x % 2 == 0;
});
console.log(n); // this will return the even numbers from the array
*/

/*let m = [25, 5, 4, 3, 2, 1];
let m1 = m.map((x) => {
  console.log("x value of", x);
  return x * x;
});
console.log(m1); // this will return the square of the numbers from the array
*/

/*let red = [1, 2, 3, 4];
let res = red.reduce((acc, curr) => {
  return acc + curr;
}, 2); // this will return the sum of the numbers from the array
console.log(res); // this will return the sum of the numbers from the array
*/

// let fruits = ["apple", "banana", "banana", "orange", "mango", "apple", "grape"];

// let fruit = fruits.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});
// console.log(fruit);

// document.writeln("hello worldss");
// let stt = setTimeout(() => {
//   document.writeln("hello new world");
// }, 2000);
// let p = prompt("do you want to settimeout please type y/n");
// if ("n" == p) {
//   clearTimeout(stt);
// }
// setTimeout(() => {
//   document.writeln("hello world");
// }, 5000);

const sumnumber = (a, b) => {
  console.log("yes its runiing " + (a + b));
};

setTimeout(sumnumber, 2500, 8, 9);

setInterval(() => {
  // alert("its Setinterval alert");
}, 4000);
