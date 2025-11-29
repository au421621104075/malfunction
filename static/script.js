console.log("Traffic Signal Dashboard Loaded");

// Auto-refresh every 30 seconds
let timeLeft = 10;

setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    if (timeLeft <= 0) {
        window.location.reload();
    }
}, 1000);
