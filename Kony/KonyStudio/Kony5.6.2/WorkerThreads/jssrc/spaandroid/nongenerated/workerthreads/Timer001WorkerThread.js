//worker
//workers inner scope
//kony.print("Worker Scope: Init");
var worker = new kony.worker.WorkerThread('Timer001WorkerThread1.js');
//invoked when Parent calls worker.postmessage()
worker.addEventListener("message", function(event) {
    postMessage(event.data);
});
test010();
//
function test010() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer121";
    var i = 0;

    function timerFunc() {
        i++;
        postMessage("Worker Scope :- kony.timer.schedule - In timerFunc() : " + i);
        if (i > 2) {
            postMessage("Worker Scope :- kony.timer.schedule - Stopping timer : ");
            kony.timer.cancel(timerId);
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc, 1, true);
    //kony.print("Worker Scope :- kony.timer.schedule - Done");
};
//kony.print("Worker Scope: Loading done");