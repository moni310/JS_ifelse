let readlineSync = require("readline-sync");
var a=readlineSync.questionInt("enter your number  ")
 
if(a%3==0 && a%7==0){
   console.log("chocolate")
}
else if(a % 7==0){
   console.log("late")
}
else if(a%3==0) {
   console.log("Choco")
}
else {
   console.log("Not divisible by 3 , 7")
}
