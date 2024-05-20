//in objects every keys data type is string

// function sayHi(){
//     // console.log("Hello");
//     return 9;
// }
// console.log(typeof sayHi());

//1. objects literal

// const user ={
//     name: "monika",
//     age: [20, 30, 40],
//     "my game":"Criket",
// };

// console.log(typeof user);
// const key1 = Object.keys(user);

// console.log(typeof key1[1], key1[1]); 

function sayHi(){
    return {
        name:"monika",
        age: 20,
    }
}
console.log(typeof sayHi);
console.log(typeof sayHi());
