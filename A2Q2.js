// ------------------------------------------------------------------------------ 
// Assignment (2)
// Written by: (Xintong Cheng 40021566)
// For SOEN 287 Section (s) – Winter 2017
// -----------------------------------------------------------------------------
 
 var number = new Array(4);
number [0] = prompt("Enter first integer: \n", "");
number [1] = prompt("Enter second integer \n", "");
number [2] = prompt("Enter third integer \n", "");
number [3] = prompt("Enter fourth integer \n", "");

var zero = 0;
var positive = 0;
var negative = 0;

for(var i =0; i<4; i++){

	if(number[i]==0)
		zero++;
	else if(number[i]<0)
		negative++;
	else
		positive++;

}

var str = "Welcome to Counter System";
var largeStr=str.fontsize(10);
document.write(largeStr, "<br /><br />");
document.write("Zeroes numbers entered by the user = ", zero, "<br /><br />");
document.write("Positive numbers entered by the user = ",positive,"<br /><br />");
document.write("Negative numbers entered by the user = ",negative,"<br /><br />");

