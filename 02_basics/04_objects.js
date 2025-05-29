const tinderUser=new Object()
//forms singleton object
// const tinderUser={}
//forms non-singleton object else no difference
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isloggedin=false

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"abhi",
            lastname:"ac",
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname);
const obj1={
    1:"a",
    2:"b",
}
const obj2={
     3:"c",
     4:"d",
}
// const obj3={obj1,obj2}
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//gives object in object but we don't want to do that in merging two objects
//Object.assign(obj1,obj2)
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// Object.assign(target, source1, source2, /* …, */ sourceN)
// const obj3=Object.assign({},obj1,obj2)
//copies all the value to empty array acting as  target & others acting as source
//if keys are same it overwrites the value
// console.log(obj1);
const obj3={...obj1,...obj2}
//it spreads ,mostly use this
// console.log(obj3);
const users=[
    {
        id:1,
        email:"a@gmail.com",
    },
    {
        id:2,
        email:"b@gmail.com",
    }
]

//values from database accessing come in this form comma seperated values mostly
//for accessing values either use loop or use below method
users[1].email
// console.log(tinderUser);
console.log(Object.keys(tinderUser));
//gives key values in the form of array which increases its usecase,same is for values
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isloggedin', false ] ]
//key value pairs are formed elements of array as array,hence returns a 2d-array
console.log(tinderUser.hasOwnProperty('islogged'));
//whenever want to know properties ,go to console & intialise & declare the variable in it & know the properties

//+++++++++++++++de-structuring++++++++++++
const course={
    coursename:"jshindi",
    price:"999",
    courseinstructor:"abhi",
}
// course.courseinstructor
const {courseinstructor:instructor}=course
//using short name for convenience 
console.log(instructor);

// const navbar=(props.company)=>{

// }
// not done like this in react but
//  const navbar=({company})=>{

// }
//this is destructing
// navbar(company="hitesh")

//json
// {
//     "name":"abhi",
//     "coursename":"js in hindi",
//     "price":"free",
// }
//when we call api ,we mostly get value in form of json






