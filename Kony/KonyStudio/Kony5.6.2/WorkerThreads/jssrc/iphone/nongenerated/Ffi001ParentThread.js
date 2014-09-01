function test_case_ffi_parent_thread1() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Ffi001WorkerThread.js');
    worker.addEventListener("message", function(event) {
        frmffi.lbl1.text = event.data;
    });
};