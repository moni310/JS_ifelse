var number1 = 44 * 30
let readlineSync=require("readline-sync");
var user=readlineSync.questionInt("enter your number ");
if (number1<=user){
    console.log("user is greater  or equal than number1")
}
else{
    console.log("user is less or equal than number")
}
