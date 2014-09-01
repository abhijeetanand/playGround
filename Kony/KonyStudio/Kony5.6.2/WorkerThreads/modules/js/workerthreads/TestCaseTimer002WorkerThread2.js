//Grand child worker2
//workers inner scope
kony.print("Grand child: Worker2 Scope: Init");
//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
    kony.print('Grand child: Worker2 Scope : onmessage : event.data : ' + event.data);
    //call func
    do_something_in_worker();
});

function do_something_in_worker() {
    kony.print('Grand child: Worker2 Scope : invoking postMessage()');
    //will invoke Parent worker.onmessage()
    postMessage({
        'message': "Hello World From Worker "
    });
};
//
//
test011();
//
function test011() {
    kony.print("Grand child: Worker2 Scope :- kony.timer.schedule - ");
    var timerId = "mytimer1211";
    var i = 0;

    function timerFunc() {
        i++;
        kony.print("Worker2 Scope :- kony.timer.schedule - In timerFunc() : " + i + " : Grand child ");
        if (i > 20) {
            kony.print("Grand child: Worker2 Scope :- kony.timer.schedule - Stopping timer : ");
            kony.timer.cancel(timerId);
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc, 1, true);
    kony.print("Grand child: Worker2 Scope :- kony.timer.schedule - Done");
};
kony.print("Grand child: Worker2 Scope : Loading done");