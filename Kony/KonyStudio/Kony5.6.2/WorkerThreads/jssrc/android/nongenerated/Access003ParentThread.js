var a = 10;

function test_case_accessing_parent_thread3() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Access003WorkerThread.js');
    worker.addEventListener("message", function(event) {
        frmAccessing.lbl3.text = event.data;
    });
};