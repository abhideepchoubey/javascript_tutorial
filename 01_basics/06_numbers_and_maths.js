const  score=400
const balance =new Number(100)
// console.log(balance.toFixed(2));
//shows value upto fixed decimal places

const othernumber=23.8966
// console.log(othernumber.toPrecision(4));
//23.90 output
const otherNumber1 = 1123.8966
console.log(otherNumber1.toPrecision(3));
// Output - 1.12e+3 (exponential value)

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));
//by default in us standards

//++++++++++++++++++MATHS++++++++++++++++++++++
//Maths library comes along with JS
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.min(4,3,6,9));
// console.log(Math.max(4,3,6,9));
console.log(Math.random());
// value between [0,1) is given
console.log(Math.floor(Math.random()*10)+1);
const min=10
const max=23
console.log(Math.floor(Math.floor(Math.random()*(max-min+1))+min));
//formula that gives the value between a given range





