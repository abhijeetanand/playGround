//worker

//workers inner scope

try {
	kony.print("Worker Scope: Init");

	kony.print("Worker Scope: in try block");
	
	//error event handler
	var evtErrorHandler_1 = function(event) {
		kony.print("Worker scope: In error handler ");
		kony.print('Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
	};

	self.addEventListener("error", evtErrorHandler_1);

	self.postMessage();

	kony.print("Worker Scope: Loading done");

} catch(err) {
	kony.print("Worker Scope: in catch block");

}

