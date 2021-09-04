console.log("External script executed");
var output = document.getElementById("output");
var battery = '';

if(window.navigator){
    if(window.navigator.getBattery){
        window.navigator.getBattery().then((result) => {
        battery = result;
        
        output.innerHTML = result.level * 100 + " " + result.dischargingTime + " " + result.charging + " " + result.chargingTime;
        }).catch(error => console.log(error));
    }
}