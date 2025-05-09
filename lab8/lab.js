// Author: Siran Chen
//Created: 5/8/2025

var array = [7,9,16,17,27];

array.map(calculator);

function calculator(x){
    var results = Math.sqrt(x);
    return results;
}

console.log(calculator(9));
console.log(calculator(7));
console.log(calculator(16));
console.log(calculator(27));
console.log(calculator(17));

var mapResults = array.map(calculator);

console.log("Square roots:", mapResults);

array.map(function(x){
          var results = x*x;
          return results
          });
console.log("Results ", mapResults);