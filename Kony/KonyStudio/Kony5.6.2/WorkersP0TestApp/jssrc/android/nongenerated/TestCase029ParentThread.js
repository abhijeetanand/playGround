///header			
app_global_context["registerFunc"]("", test_case_parent_thread_29, "basic");
////function follows			
function test_case_parent_thread_29() {
    //importScripts() - empty call - without args ;
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase029WorkerThread.js');
    var evtErrorHandler_1 = function(event) {
            kony.print("Parent scope: In error handler 1");
            kony.print('Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
        };
    worker.addEventListener("error", evtErrorHandler_1);
    kony.print("Parent Scope: Exit test_case_parent_thread()");
};
//			test_case_parent_thread();
/*
			 * Reference O/P : Chrome
			 Parent Scope: Init test_case_parent_thread() TestCase028ParentThread.html:15
			 Parent Scope: Exit test_case_parent_thread() TestCase028ParentThread.html:26
			 Worker Scope: Init TestCase028WorkerThread.js:5
			 GET http://127.0.0.1:8020/WebWorker/file_not_present_in_scope.js 404 (Not Found) file_not_present_in_scope.js:1
			 Worker scope: In error handler 1 TestCase028WorkerThread.js:9
			 Worker scope: ERROR: Line 16 in http://127.0.0.1:8020/WebWorker/TestCase028WorkerThread.js: Uncaught NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope': The script at 'http://127.0.0.1:8020/WebWorker/file_not_present_in_scope.js' failed to load. TestCase028WorkerThread.js:10
			 Parent scope: In error handler 1 TestCase028ParentThread.html:20
			 Parent scope: ERROR: Line 16 in http://127.0.0.1:8020/WebWorker/TestCase028WorkerThread.js: Uncaught NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope': The script at 'http://127.0.0.1:8020/WebWorker/file_not_present_in_scope.js' failed to load. TestCase028ParentThread.html:21
			 Uncaught NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope': The script at 'http://127.0.0.1:8020/WebWorker/file_not_present_in_scope.js' failed to load. 			 *  */