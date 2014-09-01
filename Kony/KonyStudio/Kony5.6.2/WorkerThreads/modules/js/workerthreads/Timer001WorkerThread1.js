//Grand child worker2
//workers inner scope

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
        postMessage("Worker2 Scope :- kony.timer.schedule - In timerFunc() : " + i + " : Grand child ");
        if (i > 2) {
            postMessage("Grand child: Worker2 Scope :- kony.timer.schedule - Stopping timer : ");
            kony.timer.cancel(timerId);
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc, 1, true);
    //kony.print("Grand child: Worker2 Scope :- kony.timer.schedule - Done");
};
//kony.print("Grand child: Worker2 Scope : Loading done");