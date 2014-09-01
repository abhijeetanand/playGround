///header			
app_global_context["registerFunc"]("", test_case_parent_thread_13, "basic");
////function follows			
function test_case_parent_thread_13() {
    //Error propagation : script error in worker :
    //"error" event listeners multiple registered in parent and child
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase013WorkerThread.js');
    //invoked when worker calls postmessage() from its inner scope
    worker.addEventListener("message", function(event) {
        kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
    });
    //error event handler
    var evtErrorHandler_1 = function(event) {
            kony.print("Parent scope: In error handler 1");
            kony.print('Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
        };
    var evtErrorHandler_2 = function(event) {
            kony.print("Parent scope: In error handler 2");
            kony.print('Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
        };
    var evtErrorHandler_3 = function(event) {
            kony.print("Parent scope: In error handler 3");
            kony.print('Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
        };
    var evtErrorHandler_4 = function(event) {
            kony.print("Parent scope: In error handler 4");
            kony.print('Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
        };
    worker.addEventListener("error", evtErrorHandler_1);
    worker.addEventListener("error", evtErrorHandler_2);
    worker.addEventListener("error", evtErrorHandler_3);
    worker.addEventListener("error", evtErrorHandler_4);
    kony.print('Parent Scope : Invoking worker.postmessage()');
    //will invoke worker's inner scope onmessage()
    worker.postMessage({
        'message': 'Hello World From Parent'
    });
    kony.print("Parent Scope: Exit test_case_parent_thread()");
};
//test_case_parent_thread();
/*
			 * Reference O/P : Chrome
			 Parent Scope: Init test_case_parent_thread() TestCase013ParentThread.html:16
			 Parent Scope : Invoking worker.postmessage() TestCase013ParentThread.html:52
			 Parent Scope: Exit test_case_parent_thread() TestCase013ParentThread.html:58
			 Worker Scope: Init TestCase013WorkerThread.js:5
			 Worker Scope: Loading done TestCase013WorkerThread.js:56
			 Worker Scope : onmessage : event.data : Hello World From Parent TestCase013WorkerThread.js:9
			 Worker Scope : invoking postMessage() TestCase013WorkerThread.js:43
			 Parent Scope : onmessage : event.data : Hello World From Worker  TestCase013ParentThread.html:22
			 Worker scope: In error handler 1 TestCase013WorkerThread.js:17
			 Worker scope: ERROR: Line 50 in http://127.0.0.1:8020/WebWorker/TestCase013WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase013WorkerThread.js:18
			 Worker scope: In error handler 2 TestCase013WorkerThread.js:22
			 Worker scope: ERROR: Line 50 in http://127.0.0.1:8020/WebWorker/TestCase013WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase013WorkerThread.js:23
			 Worker scope: In error handler 3 TestCase013WorkerThread.js:27
			 Worker scope: ERROR: Line 50 in http://127.0.0.1:8020/WebWorker/TestCase013WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase013WorkerThread.js:28
			 Worker scope: In error handler 4 TestCase013WorkerThread.js:32
			 Worker scope: ERROR: Line 50 in http://127.0.0.1:8020/WebWorker/TestCase013WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase013WorkerThread.js:33
			 Parent scope: In error handler 1 TestCase013ParentThread.html:28
			 Parent scope: ERROR: Line 50 in http://127.0.0.1:8020/WebWorker/TestCase013WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase013ParentThread.html:29
			 Parent scope: In error handler 2 TestCase013ParentThread.html:33
			 Parent scope: ERROR: Line 50 in http://127.0.0.1:8020/WebWorker/TestCase013WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase013ParentThread.html:34
			 Parent scope: In error handler 3 TestCase013ParentThread.html:38
			 Parent scope: ERROR: Line 50 in http://127.0.0.1:8020/WebWorker/TestCase013WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase013ParentThread.html:39
			 Parent scope: In error handler 4 TestCase013ParentThread.html:43
			 Parent scope: ERROR: Line 50 in http://127.0.0.1:8020/WebWorker/TestCase013WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase013ParentThread.html:44
			 Uncaught ReferenceError: slef is not defined TestCase013WorkerThread.js:50
			 */