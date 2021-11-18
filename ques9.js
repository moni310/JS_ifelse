let readlineSync=require("readline-sync");
var varx=readlineSync.questionInt("enter your number ")
if (varx%2==0){
    console.log(varx,"it is divisible by 2")
}

else{
    console.log(varx,"it is not divisible by 2 ")
}