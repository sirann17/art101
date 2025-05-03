// Author: Siran Chen
//Created: April 29, 2025

function sortUserName(){
    let userName = window.prompt("Please tell me your name");
    console.log("userName", userName);

    let nameArray =userName.split('');
    console.log("nameArray", nameArray);

    let nameArraySort = nameArray.sort();
    console.log("nameArraySort", nameArraySort);

    let nameSorted = nameArraySort.join('');
    console.log("nameSorted", nameSorted);

    return { original: userName, sorted: nameSorted};
}

const nameInfo = sortUserName();
document.writeln("Hey, here is your name: " + nameInfo.original + "</br>");
