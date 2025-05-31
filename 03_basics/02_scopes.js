let a = 300;

if (true) {
    // console.log(a); 
    // If 'a' is not defined inside the block, this would access the outer 'a' (300).
    // But since 'a' is declared below with 'let' inside this block,
    // it causes a ReferenceError due to the temporal dead zone(accessing the values before their declaration).

    let a = 10; // Block-scoped variable 'a'
    console.log(a); // Output: 10

    const b = 20; // Block-scoped constant
    var c = 30;   // Function-scoped variable (or globally scoped if not in a function)
}

//{}-refers to block scoping
// `let` and `const` are block-scoped, so `a` and `b` are **not** accessible here.
// This will cause a ReferenceError:
//console.log(a); // Uncaught ReferenceError: a is not defined
// console.log(b); // Uncaught ReferenceError: b is not defined

// `var` is function-scoped(global scoped), not block-scoped, so `c` is still accessible here:
console.log(c); // Output: 30
//This can break modularity and lead to bugs, as variables might unintentionally leak outside their intended context.
for(let i=0;i<Array.length;i++){
    const element=Array[i]
}
//Scope is different in this Codespace because you're using Node.js to run code (where the global scope is global), but the console you're using runs in the browser (where the global scope is window).

//nested scope
function one(){
    const username="abhi"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()
if(true){
    const username="abhi"
    if(username==="abhi"){
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website);//reference error due to block scope
    
}
//console.log(username);//reference error due to block scope
//explore about closure

//++++++++++++++interesting+++++++++++++

// Function declaration
addOne(5); // ✅ This will run smoothly due to hoisting

function addOne(num) {
    return num + 1;
}

// Function expression
addTwo(5); // ❌ This will throw an error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 1;
};
//both are functions but second one can be called expression 

// Explanation:
// In JavaScript, function declarations are hoisted to the top of their scope,
// which means you can call them before they are defined in the code.
// Function expressions, on the other hand, are not hoisted in the same way.

// In the case of `const addTwo = function(num) {...}`, only the variable declaration (`addTwo`)
// is hoisted, but not its assignment. So calling it before its definition throws a ReferenceError.

// Summary:
// - Function Declaration: Hoisted completely (both name and body)
// - Function Expression: Not hoisted (or rather, the variable is hoisted but uninitialized)

// Best practice:
// Always define functions before calling them to avoid confusion and potential runtime errors.

