let readlineSync=require("readline-sync")
var num1=readlineSync.questionInt("enter your number ");
readlineSync=require("readline-sync")
var num2=readlineSync.questionInt("enter your sec number ");
if (num1>num2){
    console.log(num1,"number is greater than num2")
}
else if (num2>num1){
    console.log(num2,"number is greater than num1")
}
else{
    console.log("both are equal")
}
