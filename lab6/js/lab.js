// Author: Siran Chen
// Created: April 28, 2025


// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen

  let myTransport = [" car", " bus", " walk"];

  let myMainRide = {
    make: "Ford",
    model: "Taurus",
    color: "rusty",
    year: 1995,
    age: function() {
        return 2025 - 1995;
    }
};

//output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide.make, null, '\t'),
   "</pre>");

}

// let's get this party started
main();


