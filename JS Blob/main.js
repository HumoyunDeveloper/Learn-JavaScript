/*
    Hello There!!
    Today I am going to create a JS Blob
    To do not Forget it (How to use)
    Inside JS file I'll write the following code
    and open it with live server...
*/
//Create Global variables
var globalVariables,
    object,
    blob,
    str,
    integer,
    content = "    Hello There!!Today I am going to create a JS BlobTo do not Forget it(How to use)Inside JS file I'll write the following code and open it with live server...";
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
