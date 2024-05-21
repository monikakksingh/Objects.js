// methods in object
// methods are functions that are stored as object properties


// arrow function

// const Arrowfunction = ()=>{

// }
// const user = {
//     name: "puran",
//     sayHi:function(){
//         return "hello, good morning" ; //method
//     },    
//     sayBye(greet){
//             return `Hello, Good Night, ${greet}`; //short hand method
//         },
//     sayInSpanish:(greet)=>{
//         return `hola ${greet}`; 
//     }
// }
// // console.log(user.sayHi); 
// // console.log(user.sayHi())
// console.log(user.sayBye("See you tomorrow"));
// // console.log(user.sayInSpanish());

// this keyword in js
// this keyword refers to the parent object

// Arrow fucntion doesnt have thier own this keyword

// const user = {
//     name:"Eram",
//     sayHi: function(){
//         console.log(this);
//         console.log(this.name);
//     },
//     sayBye:()=>{
//         console.log(this);
//         // console.log(this.name);
//     }
// }
// console.log(user.name);
// // user.sayHi();

//In and hasOwnProperty

// const person = {
//     name: "Aditi",
//     age: 25,
//     location:"bengal"

// }
// console.log("location" in person);
