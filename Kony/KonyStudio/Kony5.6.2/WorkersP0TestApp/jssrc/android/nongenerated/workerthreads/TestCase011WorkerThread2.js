//worker
//workers inner scope
kony.print("Grand Child Worker Scope: Init");
//error event handler
var evtErrorHandler_1 = function(event) {
        kony.print("Grand Child Worker scope: In error handler ");
        kony.print('Grand Child Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
    };
self.addEventListener("error", evtErrorHandler_1);

function do_something_in_worker() {
    kony.print('Grand Child Worker Scope : invoking postMessage()');
    //will invoke Parent worker.onmessage()
    postMessage({
        'message': "Hello World From Grand Child Worker "
    });
    //should flag error
    slef.postMessage({
        'message': "Hello World From Grand Child Worker "
    });
};
do_something_in_worker();
kony.print("Grand Child Worker Scope: Loading done");