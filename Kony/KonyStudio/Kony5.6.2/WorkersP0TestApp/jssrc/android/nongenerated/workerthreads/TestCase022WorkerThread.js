//worker
//workers inner scope
kony.print("Worker Scope: Init");
//create new kony.worker.WorkerThread
var worker = new kony.worker.WorkerThread('TestCase022WorkerThread2.js');
//global
_jsonOBJ = {
    "value": "In Worker Scope"
};
kony.print("Worker Scope: _jsonOBJ['value'] : " + _jsonOBJ['value']);
kony.print("Worker Scope: Loading done");