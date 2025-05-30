function saymyname(){
    console.log("A");
    console.log("C");    
}
saymyname
//it is referencing to function that function exists
// saymyname()
//executing the function

// function addTwoNumbers(number1, number2) {
//     // number1 and number2 are parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(); 
// // NaN - both parameters are undefined, so undefined + undefined results in NaN

// addTwoNumbers(3, "4"); 
// // 34 - number 3 is coerced to a string, and string concatenation occurs

// addTwoNumbers(3, "a"); 
// // 3a - same logic: number 3 is coerced to a string and concatenated with "a"

// addTwoNumbers(3, null); 
// // 3 - null is coerced to 0 in numeric addition, so 3 + 0 = 3

// const result=addTwoNumbers(3,5)
// console.log(`Result:${result}`);
//Result:undefined as by default any function returns undefined

function addTwoNumbers(number1, number2) {
    // number1 and number2 are parameters
    // let result=number1 + number2
    // return result
    return number1+number2
    console.log("abhi");
    //The following line will never be executed because the function exits after 'return'
}
const result=addTwoNumbers(3,5)
//the result in function has scope upto function but the result in const has scope throughout this code file

function loginUserMessage(username="sam"){
    //way of giving default value
    // if(username===undefined){
    //or you can write
    if(!username){
    //as undefined & null is by default taken as false
        console.log("please enter the username")
        return
    }
    return `${username} just logged in`
}

loginUserMessage("abhi")
//the funtion is executed but not printing as not given command to print the returned value using console.log
// console.log(Boolean(null));

//if you do not how many arguments gonna come ,for example consider a shopping cart,shopper can put any number of items there,how to do that?
//ta da ,you have rest operator ...(same as seperate operate?Yes,depending on usecase name changes)
function calculateCartPrice(val1,val2,...num1){
    //good habit to give proper names to functions so it is easy to understand what function is doing
    return num1
}
// console.log(calculateCartPrice(200,400,600,800));
//funtions returns the values in form of array with values as individual elements
//after console.log [ 600, 800 ]

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username:"sam",
    price:399,
})
// direct giving the object
//professionally check type  & varible name using if else statements as it is not by default in javascript

const mynewarray=[200,400,600,100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewarray));
console.log(returnSecondValue([200,400,600,800]));

