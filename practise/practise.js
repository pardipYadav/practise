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
// The filter() method in JavaScript is used to create a new array containing only the elements that pass a specific condition (i.e., return true in the callback function).
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

// const sumnumber = (a, b) => {
//   console.log("yes its runiing " + (a + b));
// };

// setTimeout(sumnumber, 2500, 8, 9);

// setInterval(() => {
//   // alert("its Setinterval alert");
// }, 4000);

/****** Clone object  *******/

// const person = {
//   name: "happy",
//   age: 25,
// };

// const coneObject = Object.assign(
//   { name: "happy", age: "25", gender: "male" },
//   person
// );
// let changeName = (coneObject.name = "hellow rodl");

// console.log(coneObject);
// console.log(person);

// const person1 = {
//   name: "param",
//   sername: "yadav",
//   age: 25,
// };

// const objectClonePerson1 = Object.assign({}, person1);
// let changeNamep1 = (objectClonePerson1.name = "deepak");
// console.log(objectClonePerson1);
// console.log(person1);

// promises

// let promise = new Promise(function (resolve, reject) {
//   console.log("first Hello");
// });

// console.log("one");
// setTimeout(() => {
//   console.log("two");
// }, 2000);

// console.log("three");

// multiple handling in promise

// let p1 = new Promise((resolve, reject) => {
//   alert("Hey I am not resolved");
//   setTimeout(() => {
//     resolve(1);
//   }, 2000);
// });

// p1.then(() => {
//   console.log("congratulation this promise is resolved");
// });
// p1.then(() => {
//   console.log("hurray");
// });

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolve p1");
//   }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("reject");
//     // resolve("Resolve p2");
//   }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolve p3");
//   }, 3000);
// });

// let promise_all = Promise.all([p1, p2, p3]);
// let promise_all = Promise.allSettled([p1, p2, p3]);
// let promise_all = Promise.race([p1, p2, p3]);
// let promise_all = Promise.race([p1, p2, p3]);

// promise_all.then((value) => {
//   console.log(value);
// });

// async function weather() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 deg");
//     }, 1000);
//   });
//   let bangalore = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("21 deg");
//     }, 2000);
//   });
//   let delhiW = await delhiWeather;
//   let bangaloreW = await bangalore;
//   return [delhiW, bangaloreW];
// }

// let w = weather();
// w.then((v) => {
//   console.log(v);
// });

const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " Done");
    };
    document.head.append(script);
  });
};

// let a = loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
// );
// a.then((v) => {
//   console.log(v);
// });

// const main = async () => {
//   let a = await loadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
//   );
//   console.log(a);
// };
// main();

// let p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Please this is not acceptable"));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try {
//     let c = await p();
//     console.log(c);
//   } catch (err) {
//     console.log("This error has been handled");
//   }
// };
// a();

let p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};
let p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
};

let p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};

const run = async () => {
  console.time("run");
  // its taking too much time in millisecond
  // let a1 = await p1();
  // let a2 = await p2();
  // let a3 = await p3();

  let a1 = p1();
  let a2 = p2();
  let a3 = p3();
  let prom = await Promise.all([a1, a2, a3]);
  console.log(prom);
  console.timeEnd("run");
};
run();
