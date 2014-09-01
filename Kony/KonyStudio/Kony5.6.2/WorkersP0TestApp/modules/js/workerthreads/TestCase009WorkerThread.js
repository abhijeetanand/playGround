//worker

//workers inner scope

kony.print("Worker Scope: Init");

//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
	kony.print('Worker Scope : onmessage : event.data : ' + event.data["message"]);
	//call func
	do_something_in_worker();
});

//error event handler
var evtErrorHandler_1 = function(event) {
	kony.print("Worker scope: In error handler ");
	kony.print('Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
};

self.addEventListener("error", evtErrorHandler_1);

function do_something_in_worker() {
	kony.print('Worker Scope : invoking postMessage()');
	//will invoke Parent worker.onmessage()
	postMessage({
		'message' : "Hello World From Worker "
	});

	//should flag error
	slef.postMessage({
		'message' : "Hello World From Worker "
	});

};

kony.print("Worker Scope: Loading done");

