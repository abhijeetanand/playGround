///header			
app_global_context["registerFunc"]("", test_case_parent_thread_16, "basic");
////function follows			
function test_case_parent_thread_16() {
    //addEventListener("message") -> postMessage() Loop and terminate worker
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase016WorkerThread.js');
    var count = 0;
    //invoked when worker calls postmessage() from its inner scope
    worker.addEventListener("message", function(event) {
        kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"] + "msg count : " + ++count);
        if (count > 10) {
            kony.print('Parent Scope : terminating worker');
            worker.terminate();
        }
        worker.postMessage({
            'message': 'Hello World From Parent'
        });
    });
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
			 Parent Scope: Init test_case_parent_thread() TestCase016ParentThread.html:15
			 Parent Scope : Invoking worker.postmessage() TestCase016ParentThread.html:34
			 Parent Scope: Exit test_case_parent_thread() TestCase016ParentThread.html:40
			 Worker Scope: Init TestCase016WorkerThread.js:5
			 Worker Scope: Loading done TestCase016WorkerThread.js:24
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 1 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 1 TestCase016ParentThread.html:22
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 2 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 2 TestCase016ParentThread.html:22
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 3 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 3 TestCase016ParentThread.html:22
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 4 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 4 TestCase016ParentThread.html:22
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 5 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 5 TestCase016ParentThread.html:22
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 6 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 6 TestCase016ParentThread.html:22
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 7 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 7 TestCase016ParentThread.html:22
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 8 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 8 TestCase016ParentThread.html:22
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 9 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 9 TestCase016ParentThread.html:22
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 10 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 10 TestCase016ParentThread.html:22
			 Worker Scope : onmessage : event.data : Hello World From Parentmsg count : 11 TestCase016WorkerThread.js:11
			 Worker Scope : invoking postMessage() TestCase016WorkerThread.js:17
			 Parent Scope : onmessage : event.data : Hello World From Worker msg count : 11 TestCase016ParentThread.html:22
			 Parent Scope : terminating worker TestCase016ParentThread.html:25
			 */