// based on how memory is stored & how it is accessed it is categorised into two types

//primitive

//given as copies call by value

//7 types-string ,number,symbol,boolean,undefined,bigint,null

// h/w javascript is static or dynamic language

const id=Symbol('123')
const anotherid=Symbol('123')
//both are not same 
const bignumber=979749217917979n 
//bigint

//preference/non-primitive

//call by reference

//Arrays,Objects,Functions
//there types are function but for function it is function object output is function

const heros=['shaktiman','dongo','naagraj'];
let myobj={
    name: "abhi",
    age:35,
}

const myfunction=function(){
    console.log("hello world");
}

console.log(typeof heros);
