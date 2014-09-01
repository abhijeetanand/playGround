//worker

//workers inner scope

kony.print("Worker Scope: Init");

//error handler
var evtErrorHandler_1 = function(event) {
	kony.print("Worker scope: In error handler 1");
	kony.print('Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);

	kony.print("Worker Scope: calling func_need_to_be_imported_do_something_in_worker_2()");

	func_need_to_be_imported_do_something_in_worker_2();
};

self.addEventListener("error", evtErrorHandler_1);

//import
importScripts('TestCase027WorkerThread2.js', 'TestCase027WorkerThread3.js');

kony.print("Worker Scope: calling func_need_to_be_imported_do_something_in_worker()");

func_need_to_be_imported_do_something_in_worker();

kony.print("Worker Scope: calling func_need_to_be_imported_do_something_in_worker_2()");

func_need_to_be_imported_do_something_in_worker_2();

kony.print("Worker Scope: Loading done");

