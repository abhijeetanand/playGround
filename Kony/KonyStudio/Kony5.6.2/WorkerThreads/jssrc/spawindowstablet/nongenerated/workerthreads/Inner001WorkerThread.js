for (i = 0; i < 10; i++) {
    var worker = new kony.worker.WorkerThread('Inner001WorkerThread.js');
    postMessage("passed");
}
kony.print("worker scope loading done");