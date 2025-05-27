//array

const myarr=[0,1,2,3,4]
// const myarr=[0,1,2,3,4,"abhi",true]
//javascript arrays are resizable & can contain mix data types
//array-copy operations create shallow copies(same reference)
const myarr2=new Array(1,2,3,5)

//array methods
// myarr.push(6)
// //like push_back
// myarr.pop()
myarr.unshift(0)
//like push_front
myarr.shift()
//removes value from front
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));
//if value exists ,then returns index else -1

const newarr=myarr.join()
//adds arr values to a string resulting in string type(newarr)
//slice,splice

console.log("a",myarr)
const  myn1=myarr.slice(1,3)
console.log(myn1);
console.log("b",myarr)
const myn2=myarr.splice(1,3)
console.log(myn2);
console.log("c",myarr);
//a [ 0, 1, 2, 3, 4 ]
// [ 1, 2 ]
// b [ 0, 1, 2, 3, 4 ]
// [ 1, 2, 3 ]
// c [ 0, 4 ]
//observe in slice  it returns the subarray in range [a,b)(b exclusive) & there is no change in original array but in splice it returns the subarray in range [a,b](both inclusive) & the original array is modified to array,where spliced elements are removed



