let readlineSync=require("readline-sync");
var age=readlineSync.questionInt("enter your age ");
if (age<5){
    console.log("you are not able to do anything")
}
if (age>=5){
    console.log("you can  go to school")
}
if (age>=18){
    console.log("you can vote")
}
if (age>=21){
    console.log("you can drive")
}
if (age>=24){
    console.log("you can marry")
}
if (age>=25){
    console.log("you can drink legally")
}
