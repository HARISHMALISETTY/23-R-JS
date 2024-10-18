// datatypes in js were classified into two categories:

// // 1.primitive
//     it will stores single values
//     they can store by values itself.
//     memory can be allocated in the stack.
//     they are immutable(unchangeble)
// THESE CAN BE CALL/PASS BY VALUES

// 1.number

var b = 45.45;
// console.log(typeof b)

// 2.STRING
var hello = 4;
var str = hello;
// console.log(str)

// 3.BOOLEAN
var b1 = "false";
// var b2=hello;
// console.log(typeof(b1+true))

// 4.UNDEFINED
var aa;

// console.log((aa)) // aa is undefined(value)
// console.log(typeof aa ) // undefined as a o/p will be treat as a string here

// console.log(typeof typeof 1)

// 5.NULL
var x1;

// console.log(x1)
x1 = null;

// console.log(x1)
// console.log(typeof(typeof x1)+5)
// console.log(typeof typeof typeof x1+500)

// 6.SYMBOL

// 2.non-primitive/referrence type
// it will stores multiple values to a single variable
// they can store by their referrence
// memory can be allocated in the heap.
// they are mutable(changeble)
// these can be call/pass by referrence.

// 1.array
var arr = [1, 2, "hello", 78, "hii", true]; // square bracket notation
// console.log(arr[arr.length - arr.length]);
// console.log(typeof arr);
// console.log(arr.length)

// 2.object

// var obj={key:value,key:value,key:value}
var mble = {
  m_name: "apple",
  "model num": "15",
  os: "18.2",
  color: "black",
  ram: "8gb",
  songs:["song1","song2","song3"]
};

// console.log(mble["model num"],mble.color)
console.log(mble.songs[1])

// 3.function
// 4.regex/regular expression.
