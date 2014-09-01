
	



//error handler
var evtErrorHandler_1 = function(event) {
	postMessage('\n'+'Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
};

self.addEventListener("error", evtErrorHandler_1);

//import - empty call
importScripts();
postMessage("child hello");


kony.print("Worker Scope: Loading done");