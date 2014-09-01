var counter = 1;
var timerId = "kill1212";
kony.timer.schedule(timerId, timerFunc, 2, true);

function timerFunc() {
    if (counter == 1) {
        postMessage("cmd1");
    }
    if (counter == 2) {
        close();
    }
    if (counter == 3) {
        postMessage("cmd1");
    }
    counter++;
}