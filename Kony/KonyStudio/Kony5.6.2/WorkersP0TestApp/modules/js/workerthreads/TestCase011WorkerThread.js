//worker

//workers inner scope

kony.print("Worker Scope: Init");

//create new kony.worker.WorkerThread
var worker = new kony.worker.WorkerThread('TestCase011WorkerThread2.js');



//invoked when child calls self.postmessage()
worker.addEventListener("message", function(event) {
	kony.print('Worker Scope : onmessage : event.data : ' + event.data["message"]);
});


kony.print("Worker Scope: Loading done");

