let readlineSync=require("readline-sync");
var day=readlineSync.question("enter the day   ");
if (day=="monday"){
    console.log("poha")
}
else if(day=="tuesday"){
    console.log("maggie")
}
else if(day=="wednesday"){
    console.log("pasta")
}
else if(day=="thursday"){
    console.log("sprouts")

}
else if (day=="friday"){
    console.log("fryrice")

}
else if(day=="saturday"){
    console.log("pakudi")
}
else{
    console.log("aalu paratha")
}