var button;

button = document.querySelectorAll("button")[0];

if ("navigator" in window) {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js").then((res) => {
            console.log(res);
        }); 
    } else {
        console.log("error:");
    }
} else {
    console.log("Navigator error");
}

function installApp() {
    
}

button.addEventListener("click", installApp);