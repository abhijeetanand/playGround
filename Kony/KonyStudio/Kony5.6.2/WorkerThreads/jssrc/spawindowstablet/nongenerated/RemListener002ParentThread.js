function test_case_remlistener_parent_thread2() {
    //removeEventListener() : removing "error" event listeners multiple registered in parent and child
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('RemListener002WorkerThread.js');
    //invoked when worker calls postmessage() from its inner scope
    worker.addEventListener("message", function(event) {
        frmRemListener.lbl7.text += "child post message invoked" + event.data;
    });
    //error event handler
    var evtErrorHandler_1 = function(event) {
            kony.print("Parent scope: In error handler 1");
            frmRemListener.lbl4.text = 'Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message;
        };
    var evtErrorHandler_2 = function(event) {
            kony.print("Parent scope: In error handler 2");
            frmRemListener.lbl5.text = 'Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message;
        };
    var evtErrorHandler_3 = function(event) {
            kony.print("Parent scope: In error handler 3");
            frmRemListener.lbl6.text = 'Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message;
        };
    worker.addEventListener("error", evtErrorHandler_1);
    worker.addEventListener("error", evtErrorHandler_2);
    worker.addEventListener("error", evtErrorHandler_3);
    worker.removeEventListener("error", evtErrorHandler_3);
    kony.print('Parent Scope : Invoking worker.postmessage()');
    //will invoke worker's inner scope onmessage()
    worker.postMessage({
        'message': 'Hello World From Parent'
    });
    kony.print("Parent Scope: Exit test_case_parent_thread()");
};