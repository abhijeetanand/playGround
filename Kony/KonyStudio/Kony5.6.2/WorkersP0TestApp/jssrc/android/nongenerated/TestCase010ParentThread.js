///header			
app_global_context["registerFunc"]("", test_case_parent_thread_10, "basic");
////function follows			
function test_case_parent_thread_10() {
    //Error propagation : script error in grand child worker : 
    //"error" event listener registered in parent and child and grand child
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase010WorkerThread.js');
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
			 GET http://127.0.0.1:8020/WebWorker/TestCase010ParentThread.html [HTTP/1.1 200 OK 1ms]
			 "Parent Scope: Init test_case_parent_thread()" TestCase010ParentThread.html:15
			 "Parent Scope : Invoking worker.postmessage()" TestCase010ParentThread.html:32
			 "Parent Scope: Exit test_case_parent_thread()" TestCase010ParentThread.html:38
			 GET http://127.0.0.1:8020/WebWorker/TestCase010WorkerThread.js [HTTP/1.1 200 OK 1ms]
			 "Worker Scope: Init" TestCase010WorkerThread.js:5
			 "Worker Scope: Loading done" TestCase010WorkerThread.js:25
			 GET http://127.0.0.1:8020/WebWorker/TestCase010WorkerThread2.js [HTTP/1.1 200 OK 1ms]
			 ReferenceError: slef is not defined TestCase010WorkerThread2.js:24
			 "Grand Child Worker Scope: Init" TestCase010WorkerThread2.js:5
			 "Grand Child Worker Scope : invoking postMessage()" TestCase010WorkerThread2.js:17
			 "Grand Child Worker scope: In error handler " TestCase010WorkerThread2.js:10
			 "Grand Child Worker scope: ERROR: Line undefined in undefined: undefined" TestCase010WorkerThread2.js:11
			 "Worker Scope : onmessage : event.data : Hello World From Grand Child Worker " TestCase010WorkerThread.js:21
			 "Worker scope: In error handler " TestCase010WorkerThread.js:12
			 "Worker scope: ERROR: Line 24 in http://127.0.0.1:8020/WebWorker/TestCase010WorkerThread2.js: ReferenceError: slef is not defined" TestCase010WorkerThread.js:13
			 "Parent scope: In error handler " TestCase010ParentThread.html:26
			 "Parent scope: ERROR: Line 24 in http://127.0.0.1:8020/WebWorker/TestCase010WorkerThread2.js: ReferenceError: slef is not defined"			 */