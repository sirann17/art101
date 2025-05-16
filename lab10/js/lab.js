//Author: Siran Chen 
//Created: 5/15/2025

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

$("#make-convo").click(function(){
const newText = generateRandomText();
$("#output").append('<div class="text"><p>' + newText + '</p></div>');

});




// // create a webchat simulation
// //create a box
// //create a button
// //user types smth in the textbox
// //on click event listener
// $("#action").click( function(){
// // what wil happen when the buttn is clicked
// console.log("button is clicked");
// //make the button copy the text
// //find the box
// $("#userinput").val();
// console.log($("#userinput").val());
// //and its contents
// //copy the contents
// let usertext=$("#userinput").val();
// console.log(usertext);
// //copy where? div convo
// $("#convo").append(usertext+"<br>");
// });

