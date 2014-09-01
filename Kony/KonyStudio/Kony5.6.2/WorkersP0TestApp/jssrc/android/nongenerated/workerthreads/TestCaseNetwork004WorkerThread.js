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
test004();
//
function test004() {
    kony.print("Worker Scope :- konynetwork API - kony.net.getActiveNetworkType()");
    var networktype = kony.net.getActiveNetworkType();
    if (constants.NETWORK_TYPE_3G == networktype) {
        kony.print("Worker Scope :- kony.net.getActiveNetworkType() : NETWORK_TYPE_3G");
    } else if (constants.NETWORK_TYPE_WIFI == networktype) {
        kony.print("Worker Scope :- kony.net.getActiveNetworkType() : NETWORK_TYPE_WIFI ");
    } else if (constants.NETWORK_TYPE_ANY == networktype) {
        kony.print("Worker Scope :- kony.net.getActiveNetworkType() : NETWORK_TYPE_ANY");
    }
};
kony.print("Worker Scope: Loading done");