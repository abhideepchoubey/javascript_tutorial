const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
//this is string manipulation
// use this backtix method to concatenate
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);
//can't put negative values in substring
const anotherString = gameName.slice(-2, 4)
// console.log(anotherString);
const newstringone=" hitesh "
//user may give some extra whitespaces+line terminators,so to remove that we can use trim
// console.log(newstringone.trim());
const url="https://abhi.com/abhi%20rocks"
console.log(url.replace("%20",'-'));
//if some one keeps name with a space than browser fills it with %20 like values by url encoding ,replacing makes it user-friendly & more readable to use the link
console.log(url.includes('abhi'));
console.log(gameName.split('-'));


