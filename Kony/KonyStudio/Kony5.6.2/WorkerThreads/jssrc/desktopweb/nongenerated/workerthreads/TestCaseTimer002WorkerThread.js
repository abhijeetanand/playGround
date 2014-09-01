//worker
//workers inner scope
kony.print("Worker Scope: Init");
var worker = new kony.worker.WorkerThread('TestCaseTimer002WorkerThread2.js');
//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
    kony.print('Worker Scope : onmessage : event.data : ' + event.data);
    //call func
    do_something_in_worker();
});

function do_something_in_worker() {
    kony.print('Worker Scope : invoking postMessage()');
    //will invoke Parent worker.onmessage()
    postMessage({
        'message': "Hello World From Worker "
    });
};
//
test010();
//
function test010() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer121";
    var i = 0;

    function timerFunc() {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFunc() : " + i);
        if (i > 20) {
            kony.print("Worker Scope :- kony.timer.schedule - Stopping timer : ");
            kony.timer.cancel(timerId);
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc, 1, true);
    kony.print("Worker Scope :- kony.timer.schedule - Done");
};
kony.print("Worker Scope: Loading done");