//worker

//workers inner scope

kony.print("Worker Scope: Init");

//global
_jsonOBJ2 = {
	"value" : "In Worker Scope"
};

//create new kony.worker.WorkerThread
var worker = new kony.worker.WorkerThread('TestCase023WorkerThread2.js');

//try to access _jsonOBJ which is in main Parent Scope
kony.print("Worker Scope: _jsonOBJ['value'] : " + _jsonOBJ['value']);

kony.print("Worker Scope: Loading done");

