function test_case_accessing_parent_thread1() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Access001WorkerThread.js');
    try {
        worker.addEventListener("message", function(event) {
            frmAccessing.lbl1.text = event.data;
        });
        callText();
    } catch (err) {
        //err = kony.getError(e);
        frmAccessing.lbl1.text = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
    }
};