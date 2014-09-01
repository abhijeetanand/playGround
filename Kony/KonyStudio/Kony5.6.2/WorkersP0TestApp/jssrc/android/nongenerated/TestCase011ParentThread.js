///header			
app_global_context["registerFunc"]("", test_case_parent_thread_11, "basic");
////function follows			
function test_case_parent_thread_11() {
    //Error propagation : script error in grand child worker :
    //"error" event listener registered in : parent(YES) and child(NO) and grand child(YES)
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase011WorkerThread.js');
    //invoked when worker calls postmessage() from its inner scope
    worker.addEventListener("message", function(event) {
        kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
    });
    //error event handler
    var evtErrorHandler_1 = function(event) {
            kony.print("Parent scope: In error handler ");
            kony.print('Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
        };
    worker.addEventListener("error", evtErrorHandler_1);
    kony.print('Parent Scope : Invoking worker.postmessage()');
    //will invoke worker's inner scope onmessage()
    worker.postMessage({
        'message': 'Hello World From Parent'
    });
    kony.print("Parent Scope: Exit test_case_parent_thread()");
};
//test_case_parent_thread();
/*
			 * Reference O/P : Firefox
			 GET http://127.0.0.1:8020/WebWorker/TestCase011ParentThread.html [HTTP/1.1 200 OK 1ms]
			 GET http://127.0.0.1:8020/WebWorker/TestCase011WorkerThread.js [HTTP/1.1 200 OK 1ms]
			 "Parent Scope: Init test_case_parent_thread()" TestCase011ParentThread.html:16
			 "Parent Scope : Invoking worker.postmessage()" TestCase011ParentThread.html:33
			 "Parent Scope: Exit test_case_parent_thread()" TestCase011ParentThread.html:39
			 GET http://127.0.0.1:8020/WebWorker/TestCase011WorkerThread2.js [HTTP/1.1 200 OK 1ms]
			 "Worker Scope: Init" TestCase011WorkerThread.js:5
			 "Worker Scope: Loading done" TestCase011WorkerThread.js:18
			 ReferenceError: slef is not defined TestCase011WorkerThread2.js:24
			 "Grand Child Worker Scope: Init" TestCase011WorkerThread2.js:5
			 "Grand Child Worker Scope : invoking postMessage()" TestCase011WorkerThread2.js:17
			 "Grand Child Worker scope: In error handler " TestCase011WorkerThread2.js:10
			 "Grand Child Worker scope: ERROR: Line undefined in undefined: undefined" TestCase011WorkerThread2.js:11
			 "Worker Scope : onmessage : event.data : Hello World From Grand Child Worker " TestCase011WorkerThread.js:14
			 "Parent scope: In error handler " TestCase011ParentThread.html:27
			 "Parent scope: ERROR: Line 24 in http://127.0.0.1:8020/WebWorker/TestCase011WorkerThread2.js: ReferenceError: slef is not defined"
			 */