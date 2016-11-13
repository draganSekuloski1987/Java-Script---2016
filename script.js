/**
Task II
Write an JavaScript program that will read the two sides of a rectangle and calculate its area
*/

function calculateArea(){
//Input
var hight, width, area;
hight = document.getElementById("hight");
width = document.getElementById("width");
console.log(hight);
console.log(width);

hight = hight.value;
width = width.value;
console.log(hight);
console.log(width);

//Calculations
if (hight === "" || width === ""){
  alert("Please enter missing values, for  Hight and/or Width");
  area = "No Result: populate missing values and click on the button";
} else if (hight <= 0  || width <= 0) {
  alert("Hight and Width can only have positive values");
  area = "No Result: Hight and Width can only have positive values, try againg and click on the button";
} else {
  area = width * hight;
}


//Output
console.log(area);
document.getElementById("result").innerHTML = area;

}
