// var isSense=false;
// if(isSense){
//     console.log("sense undhi")}
// else{
//     console.log("sense ledhu")
// }

// var ip=11;

// if(ip%2==0){
//     console.log(`${ip} is a even num`)
// }

// else{
//     console.log(`${ip} is odd num`)
// }

// var arr = [10, 12, 13, 14, 15, 16, 17, 18, 19, 11];

// for (i in arr) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }

var arr = ["*", "**", "***", "****", "*****", "******", "*******"];

for (i in arr) {
  if (arr[i].length % 2 == 0) {
    // console.log(arr[i]);
  }
}

var arr1 = ["a", "A", "b", "B", "c", "C"];

// for (i in arr1) {
//   if (arr1[i] == arr1[i].toUpperCase()) {
//     // console.log(arr1[i]);
//   } else {
//     console.log(arr1[i]);
//   }
// }

// var str = "helloWORld";
// var op = "";
// for (i in str) {
//   if (i % 2 != 0) {op = op + str[i]}
// }

// console.log(op);

// var ip="JavaSCRipt"
//  op="avaipt"

var str = "JavaSCRipt";
var str1 = "";
for (i in str) {
  if (str[i] == str[i].toLowerCase()) {
    str1 = str1 + str[i];
  }
  // console.log(str[i].toLowerCase())
}
// console.log(str1)

// var str=["good","hi","Hello","Welcome","students","Bye"]

// op = Hello,Welcome,Bye

// var arr = [3, 5, 9, 10, 11, 14, 20, 25, 33];

// var arr1 = [];

// for (i in arr) {
//   if (arr[i] % 5 == 0) {
//     arr1[arr1.length] = arr[i];
//   }
// }

// console.log(arr1);

// var arr=["htmL","csS","javascrIPT","react","angulaR"];

// var arr1=[];

// // op=["htmL","csS","javascrIPT","angulaR"];

// for (i in arr){

//   console.log(arr[i][arr[i].length-1])

//   // if(arr[i].at(-1)==arr[i].at(-1).toUpperCase()){
//   //   if(arr[i][arr[i].length-1]==arr[i][arr[i].length-1].toUpperCase()){
//   //   arr1[arr1.length]=arr[i]

//   // }
// }

// console.log(arr1)

var arr = ["html", "css", "js", "React", "anGulAr"];

var arr1 = [];

for (i in arr) {
  if (i % 2 == 0) {
    arr1[arr1.length] = arr[i].toUpperCase();
  }
}
console.log(arr1);
