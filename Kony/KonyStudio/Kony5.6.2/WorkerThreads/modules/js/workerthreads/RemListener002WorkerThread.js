//worker

//workers inner scope

kony.print("Worker Scope: Init");

//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
	//kony.print('Worker Scope : onmessage : event.data : ' + event.data["message"]);
	//call func
	do_something_in_worker();
});

//error event handler

var evtErrorHandler_1 = function(event) {
	kony.print("Worker scope: In error handler 1");
	var a = 'child scope: ERROR1: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message;
	postMessage(a);
};

var evtErrorHandler_2 = function(event) {
	kony.print("Worker scope: In error handler 2");
	var b = 'child scope: ERROR2: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message;
	postMessage(b);
};

var evtErrorHandler_3 = function(event) {
	kony.print("Worker scope: In error handler 3");
	var b  = 'child scope: ERROR3: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message;
	postMessage(b);
};

var evtErrorHandler_4 = function(event) {
	kony.print("Worker scope: In error handler 4");
	var b = 'child scope: ERROR4: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message;
	postMessage(b);
};

var evtErrorHandler_5 = function(event) {
	kony.print("Worker scope: In error handler 4");
	var b = 'child scope: ERROR5: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message;
	postMessage(b);
};


self.addEventListener("error", evtErrorHandler_1);
this.addEventListener("error", evtErrorHandler_2);
self.addEventListener("error", evtErrorHandler_3);
self.addEventListener("error", evtErrorHandler_4);
self.addEventListener("error", evtErrorHandler_5);

self.removeEventListener("error", evtErrorHandler_3);
this.removeEventListener("error", evtErrorHandler_5);
removeEventListener("error", evtErrorHandler_4);

function do_something_in_worker() {
	

	//should flag error
	slef.postMessage('message' );

};

kony.print("Worker Scope: Loading done");
