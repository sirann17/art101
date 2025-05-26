// Author: Siran Chen
// Created: 5/25/25
function fizzBuzzBoom(){
    let oneLongString = "";

for (i = 1; i <= 200; i++) {
  // check for multiple of 15 first
  if(i % 15 == 0){
    console.log("Fizz!Buzz!");
        oneLongString += i + " Fuzz!Buzz!<br>";
  }
  if(i % 21 == 0){
    console.log("Fizz!Boom!")
        oneLongString += i + " Fizz!Boom!<br>";
  }
  if(i % 35 == 0){
    console.log("Buzz!Boom!");
        oneLongString += i + " Buzz!Boom!<br>";
  }
  if (i % 3 == 0) {
    console.log("Fizz!");
    oneLongString += i + " Fizz!<br>";
  } else if (i % 5 == 0) {
    console.log("Buzz!");
    oneLongString += i + " Buzz!<br>";
    
  } else if (i % 7 == 0) {
    console.log("Boom!");
    oneLongString += i + " Boom!<br>";
  } else {
        console.log(i);
        oneLongString += i + "!<br>";

  }

}
$("#output").html(oneLongString);
    }
$(document).ready(function(){
    fizzBuzzBoom();
});

