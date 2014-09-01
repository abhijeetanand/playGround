//worker thread without passing any parameter
function test_case_parent_thread_3() {
    try {
        //worker thread without any parameters
        var worker = new kony.worker.WorkerThread();
        /*	worker.addEventListener("error", function(event) {
	 	frmWorkers.lbl32.text ="error lineno:" + event.lineno +"filename: "+ event.filename + "message :"+ event.message });*/
    } catch (e) {
        err = kony.getError(e);
        frmWorkers.lbl31.text = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
        //throw "err"; 
    }
}