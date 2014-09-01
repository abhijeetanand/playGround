//worker

//workers inner scope

kony.print("Worker Scope: Init");

//error handler
var evtErrorHandler_1 = function(event) {
	kony.print("Worker scope: In error handler 1");
	kony.print('Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
};

self.addEventListener("error", evtErrorHandler_1);

//import
importScripts('file_not_present_in_scope.js');



kony.print("Worker Scope: Loading done");

