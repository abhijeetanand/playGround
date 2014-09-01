function test_case_kill_parent_thread2() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Kill002WorkerThread.js');
    worker.addEventListener("message", function(event) {
        frmKill.lbl2.text += event.data
    });
    worker.postMessage("parent hello");
    worker.postMessage("parent hello");
    worker.postMessage("parent hello");
};