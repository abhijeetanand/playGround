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
test008();
//
function test008() {
    kony.print("Worker Scope :- kony.ui.Alert - ");
    var basicConfig = {};
    basicConfig["message"] = "Hello from Worker";
    basicConfig["alertType"] = constants.ALERT_TYPE_INFO;
    var pspConfig = {};
    //Alert definition
    var infoAlert = kony.ui.Alert(basicConfig, pspConfig);
    kony.print("Worker Scope :- kony.ui.Alert - Done");
};
kony.print("Worker Scope: Loading done");