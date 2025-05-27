const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// //pushes array as a value
// // changes in same array
// console.log(marvel_heroes);
// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]);
const allheroes=marvel_heroes.concat(dc_heroes)
//gives a new array consisting all values
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allheroes);

const all_heroes=[...marvel_heroes,...dc_heroes]
//... represents spread operator
//it is like drop a glass ,then its pieces will spread throughout the floor
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//This creates a new array combining both hero lists without changing the originals.
// console.log(all_heroes);

const another_array=[1,2,3,[4,5,6],[5,[3,5]]]
const real_another_array=another_array.flat(1)
//[ 1, 2, 3, 4, 5, 6, 5, [ 3, 5 ] ]
const real_another_array_one=another_array.flat(Infinity)
// [1, 2, 3, 4, 5, 6, 5, 3, 5]
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth that is given in flat(d)
// console.log(real_another_array);
// console.log(real_another_array_one);

// console.log(Array.isArray("abhi"));//returns false
// console.log(Array.from("abhi"));
// // returns array [ 'a', 'b', 'h', 'i' ]
// //used to convert anything to array
// console.log(typeof({name:"abhi"}));// returns object
// console.log(Array.from({name: "abhi"})); 
// Creates an array from an iterable or array-like object.
// Objects like {name: "abhi"} are not iterable, and without a length property, they can't be treated as array-like.
// To extract keys or values from an object, use Object.keys(obj) or Object.values(obj) instead.
console.log(Object.keys({name: "abhi"})); // ["name"]
console.log(Object.values({name: "abhi"})); // ["abhi"]
let score1=100
let score2=200
let score3=300
console.dir(Array.of(score1, score2, score3, another_array), { depth: null });
//This line logs the full structure of deeply nested objects or arrays — something console.log() might abbreviate (e.g., showing [Array] instead of expanding the full contents).
//Returns a new array from a set of elements.







