// const user = {
//     username: "abhi",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username}, welcome to the website`);
//         // 'this' refers to the current object context (user)
//         console.log(this);
//     }
// };

// // user.welcomeMessage(); // Calls the method - logs welcome message & user object

// // user.username = "shyam"; // Changes username property of user object
// // user.welcomeMessage(); // Reflects updated username in the welcome message

// // ------------------ Global Context ------------------

// // console.log(this); 
// // In Node.js, this logs an empty object `{}` in the global scope
// // In the browser, it logs the global `window` object

// // ------------------ Function Context ------------------

// function chai() {
//     let username = "abhi";
//     console.log(this.username); // undefined - 'this' doesn't refer to chai's scope
// not able to use this in function 
// }

// chai(); // In non-strict mode, 'this' refers to global object; in strict mode, it's undefined

// // Function expression version
// const chaiFunc = function () {
//     let username = "abhi";
//     console.log(this); // In Node.js, refers to global object; in browser, also global (window)
//     console.log(this.username); // undefined - no 'username' on the global object

// };

// chaiFunc();

// // ------------------ Arrow Function Context ------------------

// const chaiArrow = () => {
//     let username = "abhi";
//     console.log(this); // Arrow functions do not bind their own 'this'; inherits from lexical scope
//     // In global scope in Node.js, this is still {}
//<ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]
// }
//     // console.log(this.username); // undefined - 'this' doesn't refer to any object with 'username'
// };

// chaiArrow();

// // ------------------ Arrow Function with Return ------------------

// // Regular arrow function with explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(addTwo(3, 4)); // 7

// // Arrow function with implicit return (no 'return' keyword required)
// const addTwoCompact = (num1, num2) => (num1 + num2);
// // If using curly braces {}, you MUST use 'return'
// // If using parentheses (), return is implicit

// console.log(addTwoCompact(2, 5)); // 7

// const addThree=(num1,num2)=>({username:"abhi"})
// //way of returning object can't do like {username:"abhi"}

// console.log(addThree(3,4));

const myarray=[3,5,6]

myarray.forEach(function (){})
