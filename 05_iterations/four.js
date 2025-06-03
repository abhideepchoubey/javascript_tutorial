const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//for in loop

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
//can't apply for of loop for iterating object

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}
//map is not iterable
//for in loop does not work for map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }