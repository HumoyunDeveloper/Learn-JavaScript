var elem = document.getElementById("result");

window.ondblclick = () => {
    var val = prompt("Type Sin");
    elem.innerHTML = (Math.PI / 180) * val;

};