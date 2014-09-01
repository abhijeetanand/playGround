//workers inner scope
//error handler
var evtErrorHandler_1 = function(event) {
        postMessage('Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
        try {
            func_need_to_be_imported_do_something_in_worker_2();
        } catch (e) {
            postMessage("+\n try catch error message is:" + e.message);
        }
    };
self.addEventListener("error", evtErrorHandler_1);
//import
importScripts('Import004WorkerThread1.js', 'Import004WorkerThread2.js');
func_need_to_be_imported_do_something_in_worker();
func_need_to_be_imported_do_something_in_worker_2();
postMessage('\n' + a);