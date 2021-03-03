///////////////////////////
///// Unit 0 Practice /////
///////////////////////////


/* 1.
Write a greeter function that will display 
'Hello World' to the console.
*/
console.log("Hello, World!");



/* 2.
Write a function that will calculate the sum of two 
numbers.

Example:
divide(3, 9) => 12
divide(9, 9) => 18

*/
sum(4, 2) => 6
sum(8, 8) => 16



/* 3.
Write a function that will calculate the difference
of two numbers.

Example:
divide(3, 9) => -6
divide(9, 9) => 0

*/
subtract(4, 8) => -4
subtract(1, 1) => 0





/* 4.
Write a function that will calculate the quotient
of two numbers.

Example:
divide(3, 9) => 0.3333333
divide(9, 9) => 1

*/
function multiplyBy(8)
{
        6 = document.getElementById("firstNumber").value;
        7 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = 6 * 7;




/* 5.
Write a function that will calculate the product
of two numbers.

Example:
multiply(3, 9) => 27
multiply(9, 9) => 81

*/
multiply(4, 4) => 16
multiply(7, 2) => 14







/* 6.
Write a function that will return years into days.

Example:
yearsToDays(3) => 1095
yearsToDays(9) => 3285

*/
function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));





/* 7. function that will return the first element
in a given array



Example:
firstElement([0,1,2,3]) => 0
yearsToDays(['hello', 'world']) => 'hello'
*/
// simple array 
let s= ["Geeks", "for", "geeks", "computer", "science"];  
function Gfg() {  
// first item of the array 
 let f=s[0];  
// last item of the array 
 let l=s[s.length-1];  
// printing the output to screen 
 document.write("First element is "+ f);  
 document.write("<br> Last element is "+ l);  
 }  
Gfg(); // calling the function  
</script> 





/* 8.
Write a function that will convert minutes into 
seconds. 


Example:
minToSec(60) => 3600
minToSec(1) => 60

*/
function convert(input) {
    var parts = input.split(':'),
        minutes = +parts[0],
        seconds = +parts[1];
    return (minutes * 60 + seconds).toFixed(3);
}







/* 9.
Write a function that will convert seconds into 
hours. 


Example:
secToHours(3600) => 1
secToHours(1800) => 0.5

*/
hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
minutes = Math.floor(totalSeconds / 60);
seconds = totalSeconds % 60;






/* 10.Write a function that will return the remainder of 
the division of two numbers.  


Example:
remainder(5, 2) => 1
remainder(10, 7) => 0.5

*/
var y=11;
var x=4;
var quotient = Math.floor(y/x); //2
var remainder = y % x; //3
