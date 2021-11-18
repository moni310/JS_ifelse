let readlineSync=require("readline-sync")
var varx=readlineSync.questionInt("enter the number ")
readlineSync=require("readline-sync")
var vary =readlineSync.questionInt("enter the number ")
if (varx%vary==0){
    console.log("it is divisible")
}
else{
    console.log("it is not divisible")
}