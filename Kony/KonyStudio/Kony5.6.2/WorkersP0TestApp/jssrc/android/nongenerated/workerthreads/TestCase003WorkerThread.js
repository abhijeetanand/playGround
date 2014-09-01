//worker
//workers inner scope
kony.print("Worker Scope: Init");
//create new kony.worker.WorkerThread
var worker = new kony.worker.WorkerThread('TestCase003WorkerThread2.js');
for (var i = 0; i < 10; i++) {
    kony.print("Worker Scope: loop count : " + i);
}
kony.print("Worker Scope: Loading done");