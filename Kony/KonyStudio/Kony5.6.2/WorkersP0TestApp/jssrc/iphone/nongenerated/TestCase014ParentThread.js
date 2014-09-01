///header			
app_global_context["registerFunc"]("", test_case_parent_thread_14, "basic");
////function follows			
function test_case_parent_thread_14() {
    //removeEventListener() : removing "error" event listeners multiple registered in parent and child
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase014WorkerThread.js');
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
    worker.removeEventListener("error", evtErrorHandler_4);
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
			 Parent Scope: Init test_case_parent_thread() TestCase014ParentThread.html:15
			 Parent Scope : Invoking worker.postmessage() TestCase014ParentThread.html:54
			 Parent Scope: Exit test_case_parent_thread() TestCase014ParentThread.html:60
			 Worker Scope: Init TestCase014WorkerThread.js:5
			 Worker Scope: Loading done TestCase014WorkerThread.js:58
			 Worker Scope : onmessage : event.data : Hello World From Parent TestCase014WorkerThread.js:9
			 Worker Scope : invoking postMessage() TestCase014WorkerThread.js:45
			 Parent Scope : onmessage : event.data : Hello World From Worker  TestCase014ParentThread.html:21
			 Worker scope: In error handler 1 TestCase014WorkerThread.js:17
			 Worker scope: ERROR: Line 52 in http://127.0.0.1:8020/WebWorker/TestCase014WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase014WorkerThread.js:18
			 Worker scope: In error handler 2 TestCase014WorkerThread.js:22
			 Worker scope: ERROR: Line 52 in http://127.0.0.1:8020/WebWorker/TestCase014WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase014WorkerThread.js:23
			 Worker scope: In error handler 3 TestCase014WorkerThread.js:27
			 Worker scope: ERROR: Line 52 in http://127.0.0.1:8020/WebWorker/TestCase014WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase014WorkerThread.js:28
			 Parent scope: In error handler 1 TestCase014ParentThread.html:27
			 Parent scope: ERROR: Line 52 in http://127.0.0.1:8020/WebWorker/TestCase014WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase014ParentThread.html:28
			 Parent scope: In error handler 2 TestCase014ParentThread.html:32
			 Parent scope: ERROR: Line 52 in http://127.0.0.1:8020/WebWorker/TestCase014WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase014ParentThread.html:33
			 Parent scope: In error handler 3 TestCase014ParentThread.html:37
			 Parent scope: ERROR: Line 52 in http://127.0.0.1:8020/WebWorker/TestCase014WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase014ParentThread.html:38
			 Uncaught ReferenceError: slef is not defined TestCase014WorkerThread.js:52
			 */