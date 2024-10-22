// // string and string methods

// var str="weLcome";

// // console.log(str[12])

// // console.log(str.length)

// // length of the welcome is 7.

// // console.log(`length of the ${str} is ${str.length}`);

// // console.log(str.at(15))
// // console.log(str[-2]) // basic
// // console.log(str.charAt(-2)); //next level
// // console.log(str.at(-2))// next-next level
// // console.log(str.charCodeAt(25)) // it will accept only positive indexes and gives ASCII  values of characters.

// // console.log("str".toUpperCase());

// // console.log("heLLooJKJKJN".toLowerCase());

// var x3="string1";

// // console.log(x3.concat(str,"hi","something"));

// // console.log("hello".concat("world"))

// var strr="harish    ";

// console.log(strr.length);

// var str1=strr.trim(); 
// // it will not modifies the existing string but it will returns the new string by applying trim.
// // trim is nothing but removing unnecessary whitespaces.

// console.log(str1.length);


// var strr1="  123  45  ";

// // console.log(strr1.length,"before trimming")

// // var afterTrim=strr1.trim();

// // console.log(afterTrim.length,"after trimming");

// // var trimAtStart=strr1.trimEnd();
// // // console.log(trimAtStart.length,"trimming at start");


// // var ip="wheresriya";


// // console.log(ip.slice(-4));


// //join method is used to join all the elements in the array and converts it into a string.

// var arr=[1,2,3,4,5];

// console.log(arr.join(""))



// var str1="hiee lll oop";

// console.log(str1.split(" "));


// var str3="fullstack";

// // console.log(str3[0])

// // for(iterator in variable){
// //     //tasks 
// // }



// // for(x of str3){
// //     // console.log(str3[x])
// //     console.log(x)
// // }





// // topics:
// // -------
// // recap of array methods and join method
// // methods in strings
// // at,charat,charcodeat,touppercase,tolowercase,concat,trim,trimstart,trimend,slice,split
// // small intro to for-in/for-of







// var fruits=["apple","banana","orange"];
// // o/p= "apple,banana,orange";

// console.log(fruits.join("-"))

// var chars=["h","e","l","l","o"];

// // hello

// console.log(chars.join(""))

// var text="javascript is awesome";
// //o/p: javascript.

// console.log(text.slice(0,10))


// var text1="i love learning javascript";

// console.log(text1.slice(-19,-11))


// var date="2024-10-21";
// //o/p:["2024","10","21"];

// console.log(date.split("-"))

var text="i love javascript programming";

// console.log(text.split(" ",2))

// programming

var x=text.split(" ");

// console.log(x[3])

var y=x[3]; // "programming"
var z=y.split() // insert into array
console.log(z) // print that array.

var z1=[];
z1.push(y);
console.log(z1)

var url="https://fakestoreapi.com/products"

//o/p:["https","","fakestoreapi.com","products"];


console.log(url.split("/"))


