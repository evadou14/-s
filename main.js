console.log("My Console Project");
var FName = "";
var LName = "";
var FNumber = 0;
var SNumber = 0;

function consoledisplay(){
    FName = document.getElementById("first_name").value;
    LName = document.getElementById("last_name").value;
    FNumber = document.getElementById("first_number").value;
    SNumber = document.getElementById("second_number").value;
    var resultnumber = 0;
    resultnumber = Number(FNumber)+Number(SNumber);
    console.log(FName.concat(LName));
    console.log(resultnumber);
}