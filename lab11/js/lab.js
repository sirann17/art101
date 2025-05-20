// Author: Siran Chen
//Created: 5/17/2025

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it

  return inputString.split('').sort().join('');
}

  $("#submit").click(function(){
    // get value of input field
const userName = $("#user-name").val();
// now let's sort it
userNameSorted = sortString(userName);
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

