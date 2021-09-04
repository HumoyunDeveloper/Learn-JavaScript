var output = document.getElementById("output");
const device_state = {
    beta : 0,
    alpha : 0,
    gamma : 0
};

if(window.ondeviceorientation){
    window.addEventListener("deviceorientation", (e) => {
        var beta = e.beta, gamma = e.gamma, alpha = e.alpha;
        device_state.beta = beta, device_state.alpha = alpha, device_state.gamma = gamma;

    });
} else {
    console.warn("Error: Device orientation is NOT support", device_state);
}