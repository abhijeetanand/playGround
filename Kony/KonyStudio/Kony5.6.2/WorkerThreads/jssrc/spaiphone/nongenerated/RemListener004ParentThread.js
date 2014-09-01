function test_case_remlistener_parent_thread4() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('RemListener004WorkerThread.js');
    try {
        worker.addEventListener("error", function(event) {
            frmRemListener.lbl41.text += "error lineno:" + event.lineno + "filename: " + event.filename + "message :" + event.message
        });
        worker.removeEventListener("error");
    } catch (e) {
        err = kony.getError(e);
        frmRemListener.lbl41.text = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
        //throw err; 
    }
};