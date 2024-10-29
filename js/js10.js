// // switch("user1")
// // {
// //     case "client": console.log("client logged in"); break;

// //     case "user":console.log("user logged in"); break;

// //     default :console.log("invalid loggin"); break;

// //     case "admin":console.log("admin logged in"); break;

// //     case "hr" :console.log("hr logged in"); break;
// // }

// // logical operators:
// //----------------------

// // 1.OR (||)
// // it will check for any one of the multiple conditions is true

// // if(cnd1 || cnd2 || cnd 3){

// //     console.log("hello")
// // }

// // var user = "admin";
// // if (user == "admin" || user == "client") {
// //   console.log("authorised");
// // } else {
// //   console.log("unauthorised access");
// // }
// // var x=5;
// // if (x<1 || x>15) {
// //     console.log("number is accepted")
// // //   console.log("true statement");
// // } else {

// //     console.log("number is not accepted")
// // //   console.log("false statement");
// // }

// // var username = "akshay"; // length is 6

// // if (username.length == 0 || username.length < 10) {
// //   console.log("username is valid");
// // } else {
// //   console.log("invalid username");
// // }

// // var user="harishh";
// // var pswd="harish1234";

// // if(user=="harish" && pswd =="harish123"){

// //     console.log("successfully logged in")
// // }
// // else if(user=="harish" && pswd!="harish123"){

// //     console.log("incorrect password");
// // }
// // else if(user!="harish" && pswd=="harish123"){

// //     console.log("incorrect username")
// // }
// // else{
// //     console.log("invalid credentials")
// // }

// // marks >90 -- distinction

// // marks>75 and marks< 90 -- first class

// // marks >60 and marks < 75 -- second class

// // marks >35 and marks <60 -- third class

// //marks < 35 fail

// var marks =95;
// if (marks >= 90) {
//   console.log("passed in distinction with",marks);
// } else if (marks >= 75 && marks < 90) {
//   console.log("first class with", marks);
// } else if (marks >= 60 && marks < 75) {
//   console.log("second class with", marks);
// } else if (marks >= 35 && marks < 60) {
//   console.log("third class with", marks);
// } else if (marks>=0&&marks < 35) {
//   console.log("failed with", marks);
// }
// else{
//     console.log("invalid marks")
// }

// var age=19;
// var citizenship=true;

// if(age>=18 && citizenship){
//   console.log("eligible to vote")
// }

// else{
//   console.log("not eligible")
// }

// var age = 20;

// var hasInvitation = true;

// if (age >= 21 || hasInvitation) {
//   console.log("can enter into club");
// } else {
//   console.log("no entry");
// }

var gpa = 3.75;

var recommendation = true;

var eca = !true;

// if((gpa>=3.5) && (recommendation || eca)){
// console.log("eligible for scholarship")
// }

// else{
//   console.log("not eligible for scholarship")

// }

if (gpa >= 3.5) {
  if (recommendation || eca) {
    console.log("eligible for scholarship");
  } else {
    console.log("not eligible");
  }
} else {
  console.log("not eligible");
}
