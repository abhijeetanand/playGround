function test_case_post_parent_thread8() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Post008WorkerThread.js');
    var evtMessageHandler_1 = function(event) {
            frmPost.lbl12.text = event.data;
        };
};