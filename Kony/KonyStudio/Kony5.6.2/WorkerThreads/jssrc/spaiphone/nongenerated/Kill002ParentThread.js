function test_case_kill_parent_thread2() {
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('Kill002WorkerThread.js');
    worker.addEventListener("message", function(event) {
        if (event.data == "cmd1") frmKill.lbl2.text += "passed";
    });
};