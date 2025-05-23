function getHouse(num){
let remainder = num % 4;
let str ="";
if(remainder==0){
    str ="House of Elrond: Known for wisdom, leadership, and the sanctuary of Rivendell.";
    
}else if(remainder ==1){
    str = "House of Durin: A linage of strength, enduracne, and the heart of dwarven lore.";
}else if( remainder==2){
    str = "House of Beren: Celebrated for courage, perserverance, and an unyielding love for Luthien.";
}else if(remainder ==3){
    str="House of Feanor: A house of ambitoin, brilliance, and the creator of the Simarils.";
}
    return str;
}

$("#button").click(function(){
    let name = $("#button").val();
    console.log(name);
    let nameLength = name.length;
    let house =getHouse(nameLength);
    console.log(house);
    $("#output").html("<h1>"+house+"</h1>");
})

