function test_case_remlistener_parent_thread6() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('RemListener006WorkerThread.js');
    try {
        var errorfunc = function(event) {
                frmListener.lbl61.text = "error lineno:" + event.lineno + "filename: " + event.filename + "message :" + event.message
            };
        worker.addEventListener("error", errorfunc);
        var e1 = "hi";
        worker.removeEventListener("error", e1);
    } catch (e) {
        err = kony.getError(e);
        frmRemListener.lbl61.text = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
        // throw err; 
    }
};