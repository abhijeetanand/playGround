//worker
//workers inner scope
kony.print("Worker Scope: Init");
//create new kony.worker.WorkerThread
var worker = new kony.worker.WorkerThread('TestCase010WorkerThread2.js');
//error event handler for grand child
var evtErrorHandler_1 = function(event) {
        kony.print("Worker scope: In error handler ");
        kony.print('Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
    };
worker.addEventListener("error", evtErrorHandler_1);
//invoked when child calls self.postmessage()
worker.addEventListener("message", function(event) {
    kony.print('Worker Scope : onmessage : event.data : ' + event.data["message"]);
});
kony.print("Worker Scope: Loading done");