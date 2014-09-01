//Worker API by passing excess number of parameters
function test_case_parent_thread_2() {
    //addEventListener
    count = 1;
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase002WorkerThread.js', 'TestCase002WorkerThread1.js');
    //invoked when worker calls postmessage() from its inner scope
    worker.addEventListener("message", function(event) {
        msg = event.data;
        if (count == 1 && msg == "WorkerThreadPassed") frmWorkers.lbl2.text = "passed"
        else frmWorkers.lbl2.text = "failed";
    });
}