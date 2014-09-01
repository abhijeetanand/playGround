//worker

//workers inner scope

importScripts('TestCase024WorkerThread2.js');

kony.print("Worker Scope: Init");


kony.print("Worker Scope: calling func_need_to_be_imported_do_something_in_worker()");

func_need_to_be_imported_do_something_in_worker();


kony.print("Worker Scope: Loading done");

