//immediately invoked function expressions (IIFE)

// Why use IIFE?
// - Functions that execute immediately
// - Helps avoid polluting the global scope(i.e., preventing global variable conflicts) by creating a private scope

(function  chai(){
    //named iife
    console.log("DB connected");
})();
// you need a semicolon (;) after the closing parentheses to properly end the statement
//Without a semicolon after the first IIFE, JavaScript might try to treat the second ( as a call on the result of the first IIFE, causing a syntax error.

//Adding a semicolon after the first IIFE ensures they are separate statements 

//iife declaration

// ()-first function definition
// ()-function call/invoked 

//taking name as parameter
((name)=>{
    //unnamed iife
    console.log(`DB connected to ${name}`);
    
})("abhi");//<--given argument

