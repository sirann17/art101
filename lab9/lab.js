//Requirements: jQuery must be loadded for this script to work
//Author: Siran Chen
//Created: May 12. 2025

//challenge button:
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

$("#button-challenge").click(function(){
    $("#button-challenge").toggleClass("special");
});

//problem button:
$("#problem").append("<button id='button-problem'>Make Special</button>");

$("#button-problem").click(function(){
    $("#button-problem").toggleClass("special");
});

//reflection button:
$("#reflection").append("<button id='button-reflection'>Make Special</button>");

$("#button-reflection").click(function(){
    $("#button-reflection").toggleClass("special");
});

//result button:
$("#result").append("<button id='button-result'>Make Special</button>");

$("#button-result").click(function(){
    $("#button-result").toggleClass("special");
});