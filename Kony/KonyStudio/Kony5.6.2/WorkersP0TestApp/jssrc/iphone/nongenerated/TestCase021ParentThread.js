///header			
app_global_context["registerFunc"]("", test_case_parent_thread_21, "basic");
////function follows			
function test_case_parent_thread_21() {
    //life of worker : script error in worker after registration of "message" event handler
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase021WorkerThread.js');
    var count = 0;
    //add message
    var message1 = function(event) {
            kony.print("Parent Scope : message handler 1");
            if ((++count) < 5) {
                worker.postMessage({
                    'message': 'Hello World From Parent'
                });
            }
        };
    worker.addEventListener("message", message1);
    var evtErrorHandler_1 = function(event) {
            kony.print("Parent scope: In error handler 1");
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
			 * Reference O/P : Chrome
			 Parent Scope: Init test_case_parent_thread() TestCase021ParentThread.html:15
			 Parent Scope : Invoking worker.postmessage() TestCase021ParentThread.html:39
			 Parent Scope: Exit test_case_parent_thread() TestCase021ParentThread.html:45
			 Worker Scope: Init TestCase021WorkerThread.js:5
			 Worker Scope : invoking self.postMessage() TestCase021WorkerThread.js:19
			 Parent Scope : message handler 1 TestCase021ParentThread.html:22
			 Parent scope: In error handler 1 TestCase021ParentThread.html:33
			 Parent scope: ERROR: Line 26 in http://127.0.0.1:8020/WebWorker/TestCase021WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase021ParentThread.html:34
			 Uncaught ReferenceError: slef is not defined TestCase021WorkerThread.js:26
			 Worker Scope : message handler 1 TestCase021WorkerThread.js:10
			 Parent Scope : message handler 1 TestCase021ParentThread.html:22
			 Worker Scope : message handler 1 TestCase021WorkerThread.js:10
			 Parent Scope : message handler 1 TestCase021ParentThread.html:22
			 Worker Scope : message handler 1 TestCase021WorkerThread.js:10
			 Parent Scope : message handler 1 TestCase021ParentThread.html:22
			 Worker Scope : message handler 1 TestCase021WorkerThread.js:10
			 Parent Scope : message handler 1 TestCase021ParentThread.html:22
			 Worker Scope : message handler 1 TestCase021WorkerThread.js:10
			 Parent Scope : message handler 1 TestCase021ParentThread.html:22
			 */