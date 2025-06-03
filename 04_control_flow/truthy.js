const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//to check if array is empty
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//to check if object is empty
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??):
// Returns the right-hand value only if the left-hand value is null or undefined.
// Safer alternative to || when you want to allow 0, false, or "" as valid values.
// Useful for setting default values without overwriting legitimate falsy data.


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
//short hand of if else
//(condition)?(o/p if condition is true):(o/p if condition is false)