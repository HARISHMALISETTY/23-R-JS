// // // scope---life of the variable throughout the code/document/file.

// // // global and local(block and function)

// // var a=40;

// // let b=50;

// // const c=70;

// // if(true){
// //     console.log(a,b,c)
// // }

// // for(i=0;i<=2;i++){
// //     console.log(a,b,c)
// // }

// // function demo(){
// //     console.log(a,b,c)
// // }

// // demo()

// // if(true){

// //     const x=5;
// //     console.log(x)
// // }

// // console.log(x)

// function demo() {
//   const x = 5;
// }

// demo();

// // console.log(x)

// // arrow functions
// //let/var/const
// //scopes
// //named function
// function sample() {
//   console.log("iam named");
// }

// //variable function or function expression
// var x = function sample1() {};

// // arrow function

// var y = () => {};

// // i want to print student name using arrow function.

// // var std=(a)=>{return a} // arrow function with single line of code in a block using return keyword
// // var std=(a)=>a; // arrow function with single line of code without a block and return keyword
// // var std=a=>a;// arrow function with single parameter and single line of code
// // console.log(std("suresh"));
// // console.log(std("harish"));
// // std("sagar")

// // using arrow function i will print sum of two numbers.

// // var sum=(a,b)=>{console.log(a+b)};
// // var sum=(a,b)=>a+b; // returns a+b == 9
// // console.log(sum(4,5));

// // i/p: 2,5
// // o/p:[2,4,6,8,10]

// // i/p:3,6
// // o/p:[3,6,9,12,15,18]

// var mul = (a, b) => {
//   var arr = [];
//   for (i = 1; i <= b; i++) {
//     arr.push(a * i);
//   }
//   // console.log(arr)
//   return arr;
// };

// // console.log(mul(2, 8));

// // var vs let vs const

// // var can be redeclare/reassign/re-intialise
// // let can be re assign but cannot be re declare and re-initialise
// // const can not be redeclare/reassign/reinitialize

// // scopes

// // we have two types of scopes mainly---global and local(block and function)

// if(true){

//     var a=40;
// }

// function demo(){

//     console.log(a,"helloo")
// }

// // demo();

// // if(true){
// //     console.log(a)
// // }
// // console.log(a)

// if(true){

//     const a=40;

// }

// console.log(a)

// // function demo(){
// //     console.log(a)
// // }

// // demo()

// function demo(){

//     const x=40;
// }

// demo();

// console.log(x)

// outer function will creates lexical environment...so x will be having lexical scope.
// whenevr a variable from outerfunction is getting access from innerfunction then it is said to be closure.
// function outerFun() {
//   let x = 40;

//   function innerFun() {
//     console.log(x);
//     var y = 50;
//     function innerInnerFun() {
//       console.log(y,x);
//     }
//     innerInnerFun();
//   }

//   innerFun();
// }

// outerFun();







// console.log(x1);
// const x1=7;

// let and const will hoist but they will store in temporal deadzone so we cannot access them before initialisation.