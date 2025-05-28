// Singleton:
// An object created using a constructor function is a singleton (i.e., unique).
// If an object is created using object literals, it is not necessarily a singleton.

// Object literal (not guaranteed to be singleton)
const mysym=Symbol("key1")
// use symbol as key in object & print the value
const JsUser = {
    name:"abhi",
    "full name":"abhi ac",
    [mysym]:"key1",
    //correct way use square brackets
    //can't do like mysm:"key1"
    //as mysym datatype not mysym
    age:18,
    location:"kolkata",
    email:"abhi@google.com",
    isLoggedIn:false,
    lastlogindays:["Monday","Saturday"],
};
//object has key value pairs
// console.log(JsUser.email);
// console.log(typeof JsUser[mysym]);
// console.log(JsUser["email"]);
// key email is taken as string by default by system ,so when accesing by key we need to give as string as console log does not does that
JsUser.email="abhi@chatgpt.com"
// Object.freeze(JsUser)
//it locks the values of JsUser so noone can change it
// JsUser.email="abhi@microsoft.com"
//does not throw any error but does not do any changes in JsUser
// console.log(JsUser);
// {
//   name: 'abhi',
//   'full name': 'abhi ac',
//   age: 18,
//   location: 'kolkata',
//   email: 'abhi@chatgpt.com',
//   isLoggedIn: false,
//   lastlogindays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'key1'
// }
//In Js function can be used as a variable
JsUser.greeting=function(){
    console.log("Hello JsUser");   
}
console.log(JsUser.greeting());
//Hello JsUser
//undefined
//this is the output as our function is not returning any value, so it prints "Hello JsUser" due to the console.log inside the function, but since the function doesn't return anything, it implicitly returns undefined, which is then printed by the outer console.log.
JsUser.greetingtwo=function(){
    console.log(`Hello JsUser,${this.name}`);
    //for referencing any value we can use `` & ${},for referencing same object use this word can access with .
}
console.log(JsUser.greetingtwo());


// Object created using a constructor function (can be a singleton)
const shyam={
    name:"Shyam",
    class:0,
}
const students=Object.create(shyam);
