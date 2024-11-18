// // let arr=[1,2,3,4,5,6];
// // arr.splice(2);// modifying existing array.
// // let x=arr.splice(2)// returning new array to x
// // console.log(x)

// // splice will modifies the existing array with remained elements

// // splice will returns a new array with removed elements.

// // let arr=[1,2,3,4,5,6];

// // arr.splice(2,3) // modifies exiting array with remained elements.

// // let x=arr.splice(2,3); // returns a new array with removed elements.

// // console.log(x)

// let arr=[1,2,3,4,5,6];

// //let x=arr.splice(2,1,"hi","hello"); // returns a new array with removed elements

// //arr.splice(2)// it will prints the array with remained
// //elements after removing the elements from index-2

// let x=arr.splice(2,0,"hi","hello"); // it will returns removed elements as a new array to x.

// console.log(arr)

// delete method

// let arr=[1,2,3,4,5];

// // delete arr[3];

// // console.log(arr)

// arr.splice(3,1);
// console.log(arr)

// flat method

// let arr=[1,2,3,[2,4],[4,5],[6,7,[8,9],[10,11]]];

// let x=arr.flat(2); // it will returns new array by applying flat

// console.log(x)

// let arr = [1, 2, [3, 4, [5, 6]], [4, 5]];

// let x = arr.flat().flat();

// console.log(x);


// let arr=["hi","js","css","react","js"];

// let x=arr.indexOf("js",2);

// console.log(x)

// indexof element is used to search the element in the array...
//if the element is available it will returns its index otherwise returns -1.




// let arr=["hi","hello","welcome","hello","hi","welcome","js"];

// let x=arr.lastIndexOf("hello");

// console.log(x)



// includes method

// let arr=[3,4,1,2,5,3,2,10,1];

// let x=arr.includes(1,5);

// console.log(x)



//iteration/looping methods in array
// in an array...while iterating every element if you want to perform a specific task for each and
// every element then we have to use one function as a callbackfunction.


let arr=["awe","b1","c1","dude","ele"];

// let x=arr.map(function(){ return "hii"}) // ["hii","hii","hii","hii","hii"]

// let x=arr.map(function(a,b){ return a+"hii"})

// let x= arr.map((a)=>{return a+"hii"});

let x=arr.map(a=>a+"hii");

console.log(x)


let arr1=[1,2,3,4,5,6];

let x1=arr1.map(a=> a*2 );

console.log(x1);