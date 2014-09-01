function test_case_accessing_parent_thread5() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Access005WorkerThread.js');
    worker.addEventListener("message", function(event) {
        frmAccessing.lbl5.text = event.data;
    });
};