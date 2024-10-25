// for-in-loop
//for -of-loop
var str = "javascript";

// i will iterate till length of the string (10)

for (i in str) {
//   console.log(parseInt(i)+1)
// console.log(str[i].toUpperCase())
}

var arr=[1,2,3,4,5,6,7,8,9,10];
for(x in arr){
    // console.log(2,'*',x,'=',(2*(parseInt(x))));
    // console.log("js")
    // console.log(arr[x]*2)

    // console.log(`2x${arr[x]}=${arr[x]*2}`)
}

// 2x1=2
// 2x2=4
// 2x3=6

// x=0,1,2,3(string)*-->(implicit type conversion)
// explicit type conversion.

var str1="welcome";

for(i of arr){
    // console.log(i)
}


var obj={"name":"23r","strength":"55","session":"js"};


// delete obj.strength;
obj.location="hyd"

 var x=Object.keys(obj);
console.log(x.length)
// obj.entries()
// console.log(Object.entries(obj))

// console.log(Object.entries(obj))

// console.log(obj)


// for(j in obj){
//     // console.log(obj[j])

//     console.log(`${j} is ${obj[j]}`)
// }

// nameis 23r 
// strength is 55 
// session is js


// for( j of obj){
//     console.log(j)
// }


// topics:
// --------
// for-in,for-of for arrays,strings and objects.Object
// few methods in objects.
// delete,keys,values and entries