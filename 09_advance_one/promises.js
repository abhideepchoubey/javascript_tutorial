//promise is an object takes callback function as input
//creating promise
const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete'); // logs when task is done
        resolve() // signals that the promise is fulfilled (no error)
        //connects resolve & .then 
    }, 1000) // 1 second delay to mimic async operation
})

//consuming promise
promiseOne.then(function() {
    console.log('Promise consumed'); // runs when resolve() is called
})

//get a function from .then
//resolve has a connection with .then


// another way of writing promise directly without saving in variable
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2"); // async task done
        resolve() // promise resolved
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved"); // then() runs when promise resolves
})


// promise returning a user object
const promisethree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"}) // resolved with user data
    }, 1000);
})

//putting values through resolve & consuming data
promisethree.then(function(user) {
    console.log(user); // logs the resolved object
})


// Promise with conditional resolve/reject
const promisefour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true; // set to true to trigger reject
        if(!error) resolve({
            username: "hitesh", // resolved with username & password
            password: "123"
        })
        else {
            reject("ERROR: something went wrong") // rejected if error = true
        }
    }, 1000);
})

// consuming promisefour
promisefour
.then((user) => {
    console.log(user); // first then: logs the user object
    return user.username; // returns username to next then
})
.then((username) => {
    console.log(username); // second then: logs username from previous
})
.catch(function(error) {
    console.log(error); // runs if reject() is called
})
.finally(() => console.log("the promise is either resolved or rejected"))
// finally always runs — useful for closing loaders, logging, etc.


//useful in database connection chaining
//if not array .then take values
//if error .catch take values


// async function to consume promise using await
const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true; // simulate failure
        if(!error) resolve({
            username: "javascript", // successful object
            password: "123"
        })
        else {
            reject("ERROR: JS went wrong") // error case
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promisefive // waits for promise to resolve
        console.log(response); // logs if successful
    }
    catch(error) {
        console.log(error); // logs error if rejected
    }
}
// can't handle errors directly with await, so use try & catch
consumePromiseFive()


// async function for API call (commented out)
/*
async function getallusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //fetch gives the promise
        //fetch needs a url
        const data = await response.json() // convert response to JSON
        console.log(data);
    } catch (error) {
        console.log("E:", error); // logs if network/API error
    }
}
*/
// getallusers() // function call


// fetching data using fetch & chaining
fetch('https://api.github.com/users/hiteshchoudhary') // API endpoint
.then((response) => {
    return response.json() // convert raw response to JSON
})
.then((data) => {
    console.log(data);  // logs fetched data
})
.catch((error) => {
    console.log(error); // handles fetch failure
})
//for fetch microqueue is formed ,whose priority is higher than taskqueue