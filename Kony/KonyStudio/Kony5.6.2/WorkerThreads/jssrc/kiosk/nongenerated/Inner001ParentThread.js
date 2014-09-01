function test_case_inner_parent_thread1() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Inner001WorkerThread.js');
    kony.store.setItem("i", 0);
    worker.addEventListener("message", function(event) {
        frmInner.lbl1.text += event.data;
    });
}