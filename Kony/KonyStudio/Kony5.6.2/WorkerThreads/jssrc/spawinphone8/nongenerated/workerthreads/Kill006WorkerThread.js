var count = 0;
addEventListener("message", function(event) {
    count++;
    kony.print("Worker Scope : addEventListener");
    for (var i = 0; i <= 5000; i++) {
        kony.print("PostCommand_" + count + " : " + i);
        postMessage("PostCommand_" + count + " : " + i)
    }
});