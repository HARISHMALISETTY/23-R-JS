// var arr=[1,2,3,4];

// // console.log(arr.length)

// arr[arr.length]=5; // arr[4]=5
// arr[arr.length]="hello"; // arr[5]="hello"
// arr[2]=7

// console.log(arr)

// var arr = [[1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]];

// console.log(arr[0][3][3][3][1]);

// var arr = [1, 2, [3, 4, ["a", "b", "c"], ["hi", "hello", "welcome"]], 5, 6];

// console.log(arr[2][3][1]);

// var obj = { name: "john", role: "dev", skills: ["html", "css", "js"] };

// console.log(obj.skills[1])
// console.log("skill is "+obj.skills[1])

// skill is

//john fav skill is js

// console.log(obj.name + " fav skill is " + obj.skills[2])

// string literals or template literals

// console.log(`${obj.name} fav skill is ${obj.skills[2]}`);

// var obj1 = {
//   name: "raj",
//   source: "nijamabad",
//   destination: "10kcoders",
//   role: "fullstack",
//   duration: "6-7 months",
// };

// raj is travelling from nijamabad to 
// 10kcoders daily to become fullstack developer in 6-7 mnths 
// console.log(`${obj1.name} travelling Form ${obj1.source} to ${obj1.destination} daily to become ${obj1.role} developer in ${obj1.duration}`) 


// var arr=[1,2,3,4,5]; // defining an array using array literal method.

 var arr1=[]
  arr1[arr1.length]=4; // arr1[0]=4. after that length will become 1
  arr1[arr1.length]=5; // arr1[1]=5, after that length will become 2
  arr1[arr1.length]=6; // arr1[2]=6
//   console.log(arr1);



// console.log(arr[2])

// arr.length

// at method:
//--------------
// console.log(arr[-2])
// console.log(arr.at(-2))

// tostring method:
// -------------------
//   var x=arr1.toString();

//   console.log(x)

//push method:
//-----------

var arr2=[1,2,3,4];
let x=arr2.push();

// console.log(arr2.length);

// console.log(x);

// push method will adds elements at the end of the array by modifying existing array and
// returns the new length of the array.

//pop method:
//-----------

var arr3=["a","b","c","d"];

var z=arr3.pop() // it will pop out the last element from the array.

// console.log(z)

// pop will removes the last element from the array and returns the element which is popped out.

var z1=arr3.pop();

// console.log(z1)


//shift

var arr3=[1,2,3,4,5];

var c1=arr3.shift();

// console.log(c1)

//unshift

var arr4=["a","b","c",4,5,6,"hello"];

var d1=arr4.unshift(4,2,1);

// console.log(d1);


var arr=[1,2,3,4,5];


// console.log(arr[8])


// console.log(arr.at(-4))

var x1=arr.at(-4) // here this method is returns/prints the value based on index(positive /negative). 

console.log(x1)

//methods---predefined and userdefined


var x2=arr.push(4,5,6);// push method will modifies the existing array by adding elements at the end of the array 
//and also it returns the updated length of the array.

// console.log(x2,arr);

var x3=arr.pop(); // pop method will removes element at the end of the array and returns the removed element .

console.log(arr,x3);




