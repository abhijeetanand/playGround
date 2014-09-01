//worker
//workers inner scope
kony.print("Worker Scope: Init");
//create new kony.worker.WorkerThread
var worker = new kony.worker.WorkerThread('TestCase012WorkerThread2.js');
//error event handler for grand child
var evtErrorHandler_1 = function(event) {
        kony.print("Worker scope: Grand Child : In error handler ");
        kony.print('Worker scope: Grand Child : ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
    };
worker.addEventListener("error", evtErrorHandler_1);
//error event handler for self
var evtErrorHandler_2 = function(event) {
        kony.print("Worker scope:  In error handler ");
        kony.print('Worker scope:  ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
    };
self.addEventListener("error", evtErrorHandler_2);
//invoked when child calls self.postmessage()
worker.addEventListener("message", function(event) {
    kony.print('Worker Scope : onmessage : event.data : ' + event.data["message"]);
});
//post message to parent
self.postMessage({
    'message': "Hello World From Worker "
});
//should flag error
slef.postMessage({
    'message': "Hello World From Worker "
});
kony.print("Worker Scope: Loading done");