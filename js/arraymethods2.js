// // // // let arr=[1,2,3,4,5,6];
// // // // arr.splice(2);// modifying existing array.
// // // // let x=arr.splice(2)// returning new array to x
// // // // console.log(x)

// // // // splice will modifies the existing array with remained elements

// // // // splice will returns a new array with removed elements.

// // // // let arr=[1,2,3,4,5,6];

// // // // arr.splice(2,3) // modifies exiting array with remained elements.

// // // // let x=arr.splice(2,3); // returns a new array with removed elements.

// // // // console.log(x)

// // // let arr=[1,2,3,4,5,6];

// // // //let x=arr.splice(2,1,"hi","hello"); // returns a new array with removed elements

// // // //arr.splice(2)// it will prints the array with remained
// // // //elements after removing the elements from index-2

// // // let x=arr.splice(2,0,"hi","hello"); // it will returns removed elements as a new array to x.

// // // console.log(arr)

// // // delete method

// // // let arr=[1,2,3,4,5];

// // // // delete arr[3];

// // // // console.log(arr)

// // // arr.splice(3,1);
// // // console.log(arr)

// // // flat method

// // // let arr=[1,2,3,[2,4],[4,5],[6,7,[8,9],[10,11]]];

// // // let x=arr.flat(2); // it will returns new array by applying flat

// // // console.log(x)

// // // let arr = [1, 2, [3, 4, [5, 6]], [4, 5]];

// // // let x = arr.flat().flat();

// // // console.log(x);

// // // let arr=["hi","js","css","react","js"];

// // // let x=arr.indexOf("js",2);

// // // console.log(x)

// // // indexof element is used to search the element in the array...
// // //if the element is available it will returns its index otherwise returns -1.

// // // let arr=["hi","hello","welcome","hello","hi","welcome","js"];

// // // let x=arr.lastIndexOf("hello");

// // // console.log(x)

// // // includes method

// // // let arr=[3,4,1,2,5,3,2,10,1];

// // // let x=arr.includes(1,5);

// // // console.log(x)

// // //iteration/looping methods in array
// // // in an array...while iterating every element if you want to perform a specific task for each and
// // // every element then we have to use one function as a callbackfunction.

// // let arr = ["awe", "b1", "c1", "dude", "ele"];

// // // let x=arr.map(function(){ return "hii"}) // ["hii","hii","hii","hii","hii"]

// // // let x=arr.map(function(a,b){ return a+"hii"})

// // // let x= arr.map((a)=>{return a+"hii"});

// // // let x = arr.map((a) => a + "hii");

// // // console.log(x);

// // let arr1 = [1, 2, 3, 4, 5, 6];

// // let x1 = arr1.map((a) => a * 2);

// // console.log(x1);

// // // map method is a one of the array iteration method which contains a cbf, executes for every
// // // iteration of element in the array.

// // // arr.map(function(){});

// // let arr2 = ["css", "html", "js", "react"];

// // // op=["csS","htmL","jS","reacT"];

// // let x11 = arr2.map((a) => {
// //   console.log(a.slice(0, -1) + a.at(-1).toUpperCase());

// // });

// // // console.log(x11);

// // // map will returns all the elements into a new array but
// // //foreach won't returns anything, so we get undefined.

// // let arr3=[1,2,3,4,5];
// // let x=arr3.forEach((a)=>{
// //     let x= a*2;
// //     console.log(x)
// //     return x;
// // })
// // console.log(x)

// // filter method--it is also a one of the iteration method which uses cbf for filtering the elements
// // in the array.

// // let arrf=[6,2,9,10,23,19,123,124];

// // let x1=arrf.forEach((x,y,z)=>{
// //     console.log (x%2==0,y,z);
// // })

// // console.log(x1)

// const users = [
//   { id: 1, name: "Alice", email: "alice@example.com", age: 25, isActive: true },
//   { id: 2, name: "Bob", email: "bob@example.com", age: 30, isActive: false },
//   {
//     id: 3,
//     name: "Charlie",
//     email: "charlie@example.com",
//     age: 28,
//     isActive: true,
//   },
// ];

// // let op = users.map((a) => {
// //   if (a.isActive) {
// //     return a.name;
// //   } else return null;
// // });

// // console.log(op);


// // let opp=users.filter((a)=>{return a.isActive}).map((x)=>x.name);
// // // console.log(opp)

// // console.log(opp)



// const products = [
//     {
//       id: 101,
//       name: "Smartphone",
//       description: "A high-end smartphone with a 6.5-inch display, 128GB storage, and a 48MP camera.",
//       price: 699.99,
//       category: "Electronics",
//       inStock: true,
//       ratings: 4.5,
//     },
//     {
//       id: 102,
//       name: "Laptop",
//       description: "A powerful laptop with 16GB RAM, 512GB SSD, and a 15.6-inch display.",
//       price: 1199.99,
//       category: "Computers",
//       inStock: false,
//       ratings: 4.7,
//     },
//     {
//       id: 103,
//       name: "Wireless Headphones",
//       description: "Noise-canceling wireless headphones with a 20-hour battery life and Bluetooth 5.0.",
//       price: 199.99,
//       category: "Accessories",
//       inStock: true,
//       ratings: 4.3,
//     },
//     {
//       id: 104,
//       name: "Smartwatch",
//       description: "A smartwatch with fitness tracking, heart rate monitoring, and GPS.",
//       price: 149.99,
//       category: "Wearables",
//       inStock: true,
//       ratings: 4.2,
//     },
//     {
//       id: 105,
//       name: "Gaming Console",
//       description: "A next-gen gaming console with 4K resolution support and a powerful GPU.",
//       price: 499.99,
//       category: "Gaming",
//       inStock: true,
//       ratings: 4.8,
//     }
//   ];


//   let x=products.filter(a=>a.ratings>=4.5).map(a=>a)
  
//   console.log(x)
  

// let ip=["hi","hello","welcome","bye"];

// let op=ip.findIndex((a)=>a.length>12);

// console.log(op)


let ip=[-1,-2,-3,-4,-5];

let op=ip.some((a)=>a>0)

console.log(op)

// map,foreach,filter,find,findindex,every,some.
