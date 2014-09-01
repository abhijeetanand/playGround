function test_case_kill_parent_thread4() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Kill004WorkerThread.js');
    worker.addEventListener("message", function(event) {
        frmKill.lbl4.text += event.data
    });
    worker.postMessage("parent hello");
    worker.postMessage("parent hello");
    worker.postMessage("parent hello");
};