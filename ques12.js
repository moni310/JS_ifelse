let readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter the number ")
if (num%5==0 && num%15==0){
    console.log(num,"it is divisible by both")
}
else{
    console.log(num,"it is not divisible")
}