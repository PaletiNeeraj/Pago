let valueDisplys = document.querySelectorAll(".num");
let interval = 5000;

valueDisplys.forEach((valueDisply) => {
    let startValue = 0;
    let endValuel = parseInt(valueDisply.getAttribute("data-val"));
    console.log(endValuel);
    let duration = Math.floor(interval / endValuel);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisply.textContent = startValue;
        if (startValue == endValuel) {
            clearInterval(counter);
        }
    }, duration);
});