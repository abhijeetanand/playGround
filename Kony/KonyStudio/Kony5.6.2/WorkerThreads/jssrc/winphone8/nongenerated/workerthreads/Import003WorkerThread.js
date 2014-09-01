//worker
//workers inner scope
importScripts('Import003WorkerThread1.js', 'Import003WorkerThread2.js');
postMessage(worker1a);
func_need_to_be_imported_do_something_in_worker();
func_need_to_be_imported_do_something_in_worker_2();