// const person = {
//     name:"Aditi",
//     age: 25,
//     location: "bengal"
// }
// // In property checks prototype chain
// console.log("surname" in person);

// // hasownproperty  doen't  checks in prototype chain
// console.log(person.hasOwnProperty("surname"));

// //every objects has a prototype chain

// Object.freeze

// const person = {
//     name: "monika",
//     age:15,
//     location: "bangal"
// }

// Object.freeze(person)  // we cant update or delete anything

//update
// person.location="monika";
// person.name= "puran";

//delete
// delete person.location;

//example
// let person2= object.freeze(person);
// person2.name = "sonam";

// console.log(person2);

//can we freeze a single property of an object ???

//reference and value 
// reference data type
// let x= 10;
// let y= -x;
// y-20;
// console.log(x);
// console.log(y); 

// let name = "puran";
// let name2= name;
// name2 = "monika";
// console.log(name);
// console.log(name2);

// const arr= [1,2,3,4,5];
// const arr2= arr;
// arr2.push(6);
// console.log(arr);
// console.log(arr2);

// const obj1={
//     name:"moinka",
//     age:20,
// }
// const obj2= obj1;
// obj2.name= "sonam";
// console.log(obj1);
// console.log(obj2);

//shallow copy and deep copy

// const obj1={
//     name:"moinka",
//     age:20,
//     address:{
//         permanent:"bengal",
//         temporary:"jharkhand",
//     }
// };
// const obj3  = {
//     location: "bengal",
// }
// const obj2= object.assign({},obj1);  //shallow
// obj2.name= "sonam";
// obj1.address.permanent="delhi"
// console.log(obj1);
// console.log(obj2);

// spread operator- shallow

// const obj2 = {...obj1,...obj3};
// console.log(obj2);


// shallow copy and copy

// shallow copy -
// only top level properties are copied
//nested objects are copied

// lets do it by spread operator
// const obj1={
//     name:"moinka",
//     age:20,
//     address:{
//         permanent:"bengal",
//         temporary:"jharkhand",
//     }
// };
// const obj2 = {...obj1}
// console.log(obj1);
// console.log(obj2);












