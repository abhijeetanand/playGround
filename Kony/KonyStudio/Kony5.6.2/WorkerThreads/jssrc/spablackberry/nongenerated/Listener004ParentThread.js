function test_case_listener_parent_thread4() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Listener004WorkerThread.js');
    try {
        /* worker.addEventListener("error", function(event) {
	 frmListener.lbl8.text ="error lineno:" + event.lineno +"filename: "+ event.filename + "message :"+ event.message }); */
        var a = 10;
        worker.addEventListener("message", a);
    } catch (e) {
        err = kony.getError(e);
        frmListener.lbl7.text = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
        //throw err; 
    }
};