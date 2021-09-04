/*
    Hello There!!
*/
//Create Global variables
var globalVariables,
    object,
    blob,
    str,
    integer,
    content = "    Hello There!!";
//Init function generates all code
function init(){
    object = new Blob([content], { type: "text/plain"});
    var url = URL.createObjectURL(object);
    var ael = document.createElement("a");
    ael.href = url;
    ael.textContent = "Hover over me!!!"
    ael.download = "Hello.txt";
    document.body.appendChild(ael);

}

window.onload = init;
