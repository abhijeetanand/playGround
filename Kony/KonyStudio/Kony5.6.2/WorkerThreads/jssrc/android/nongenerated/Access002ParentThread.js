function test_case_accessing_parent_thread2() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Access002WorkerThread.js');
    worker.addEventListener("message", function(event) {
        frmAccessing.lbl2.text = event.data;
    });
};