//worker
//workers inner scope
kony.print("Worker Scope: Init");
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
test003();
//
function test003() {
    kony.print("Worker Scope :- konynetwork API - kony.net.setNetworkCallbacks()");
    var config = {};
    config.statusChange = function(isOnLine) {
        if (isOnLine) {
            kony.print("Worker Scope :- Device is online");
        } else {
            kony.print("Worker Scope :- Device is offline");
        }
    };
    kony.net.setNetworkCallbacks(config);
};
kony.print("Worker Scope: Loading done");