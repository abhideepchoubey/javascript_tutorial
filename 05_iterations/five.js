const coding = ["js", "ruby", "java", "python", "cpp"]

// Using forEach with an anonymous callback function
// A callback function is passed to forEach
// It automatically takes each element of the array as a parameter

// coding.forEach(function (val) {
//     console.log(val);
// })

// Using arrow function as the callback
// coding.forEach((item) => {
//     console.log(item);
// })

// Defining a named function to use as callback
function printMe(item) {
    console.log(item);
}

// Passing a reference to the named function (without invoking it)
// coding.forEach(printMe)

//it has every time access to each element ,it's index and the whole array
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

const arr = [
    new Map([
        ["name", "Alice"],
        ["age", 25]
    ]),
    new Map([
        ["name", "Bob"],
        ["age", 30]
    ])
];

// Loop through each Map in the array
arr.forEach(map => {
    // For each Map, you can loop through its entries (key-value pairs)
    map.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});
