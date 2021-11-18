let readlineSync=require("readline-sync");
var water=readlineSync.questionInt("enter the water ");
if (water<1){
    console.log("we need more water to filled the tank")
}
else if (water>1 && water<10){
    console.log("there is no need to fill the water ")

}
else{
    console.log("the water is more than 10l ,it will overflow")
}