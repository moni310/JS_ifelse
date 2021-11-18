let readlineSync=require("readline-sync");
var num=readlineSync.questionInt("enter your number  ");
if (num<10){
    console.log("user is less than 10");
}
else if (num>10 &&  num<20){
    console.log("it is less than 20")

}
else{
    console.log("greater then 20")

}