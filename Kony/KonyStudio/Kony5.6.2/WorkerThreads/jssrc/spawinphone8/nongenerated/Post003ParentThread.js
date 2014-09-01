function test_case_post_parent_thread3() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Post003WorkerThread.js');
    try {
        //will invoke worker's inner scope message event handler
        worker.postMessage();
        /* worker.addEventListener("error", function(event) {
	 frmPost.lbl4.text ="error lineno:" + event.lineno +"filename: "+ event.filename + "message :"+ event.message }); */
        worker.addEventListener("message", function(event) {
            frmPost.lbl4.text = event.data
        });
    } catch (e) {
        err = kony.getError(e);
        frmPost.lbl3.text = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
        //throw err; 
    }
};