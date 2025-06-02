important for interview
//javascript execution context
{}-suppose code
global execution context(gec) is made & refer to this
gec is always there ,may have or haven't value
gec is different for different environment (bun,node)
gec for browser is window
javascript is single threaded

different ecs-
-global ec
-function ec
-eval ec

order of operations on code {}
-memory creation phase /creation phase
-execution phase

code run
step 1:global execution run & allocated to this
step 2:memory phase
//taken name of variables & filled with undefined
in functions goes only function definition
step 3:execution phase
//values are filled in variables
when function called ,forms new executional context[new variable environment +execution thread],repeats step 1  &  step 2 for this new ec 
then values are returned to global executional context ,& this new ec,that was created for function is deleted

//call stack(LIFO)-last in first out








+++++++++++++++chatgpt notes++++++++++++++++++++++++++++
// 📌 JavaScript Execution Context (EC) is the environment in which JS code runs

// 🔸 3 Types of Execution Context:
// 1. Global Execution Context (GEC) – created by default when JS runs
// 2. Function Execution Context (FEC) – created every time a function is called
// 3. Eval Execution Context – created by eval(), rarely used

// 🧠 GEC in different environments:
// - Browser: GEC's global object is 'window'
// - Node.js: global object is 'global'

// 🧵 JS is single-threaded – one thing runs at a time, using the call stack

// 🔁 Each EC has 2 phases:
// Phase 1: Memory Creation Phase (a.k.a. Hoisting phase)
// - Variables → set to 'undefined'
// - Function declarations → stored with full definition
// - 'this' keyword → set based on context

// Phase 2: Execution Phase
// - Variables are assigned real values
// - Function calls are executed (creating new FECs)

// 📚 Function Call → Creates new FEC
// - Has its own variable environment + execution thread
// - Repeats memory + execution phases
// - After execution, the FEC is removed from the call stack

// 🧱 Call Stack – LIFO structure
// - GEC sits at the bottom
// - Each function call adds a new FEC to the top
// - When a function finishes, its EC is popped off

// 💡 Remember: Function declarations are hoisted, but function expressions are not

// ❗ Important: Variables declared with var are hoisted with 'undefined'
// let & const are hoisted too but kept in 'temporal dead zone' (TDZ)




