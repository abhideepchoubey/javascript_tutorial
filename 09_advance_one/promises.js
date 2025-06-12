//promise is an object takes callback function as input
//creating promise
const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        //connects resolve & .then 
    },1000)
})

//consuming promise
promiseOne.then(function(){
    console.log('Promise consumed');
    
})
//get a function from .then
//resolve has a connection with .then


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
        
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promisethree=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Chai",email:"chai@example.com"})
    }, 1000);
})
//putting values through resolve & consuming data
promisethree.then(function(user){
    console.log(user);
    
})

const promisefour=new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=true;
        if(!error) resolve({
            username:"hitesh",
            password:"123"
        })
        else{
            reject("ERROR:something went wrong")
        }
    }, 1000);
})

promisefour
.then((user)=>{
    console.log(user);
    return user.username;
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>console.log(("the promise is either resolved or rejected")
))
//useful in database connection chaining
//if not array .then take values
//if error .catch take values

const promisefive=new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=true;
        if(!error) resolve({
            username:"javascript",
            password:"123"
        })
        else{
            reject("ERROR:JS went wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try{
        const response=await promisefive
        console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
    
}
//can't handle errors so use try & catch
consumePromiseFive()

// async function getallusers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         //fetch gives the promise
//         //fetch needs a url
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
        
//     }
    
// }


//  getallusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);  
})
.catch((error)=>{
    console.log(error);
    
})