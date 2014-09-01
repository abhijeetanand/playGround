///header			
app_global_context["registerFunc"]("", test_case_parent_thread_17, "basic");
////function follows			
function test_case_parent_thread_17() {
    //addEventListener("message") -> postMessage() :
    //in worker scope call self.close()
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase017WorkerThread.js');
    //invoked when worker calls postmessage() from its inner scope
    worker.addEventListener("message", function(event) {
        kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
        kony.print('Parent Scope : onmessage : invoking worker.postmessage()');
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
			 Parent Scope: Init test_case_parent_thread() TestCase017ParentThread.html:16
			 Parent Scope : Invoking worker.postmessage() TestCase017ParentThread.html:30
			 Parent Scope: Exit test_case_parent_thread() TestCase017ParentThread.html:36
			 Worker Scope: Init TestCase017WorkerThread.js:5
			 Worker Scope : invoking self.postMessage() TestCase017WorkerThread.js:16
			 Parent Scope : onmessage : event.data : Hello World From Worker  TestCase017ParentThread.html:22
			 Parent Scope : onmessage : invoking worker.postmessage() TestCase017ParentThread.html:23
			 Worker Scope: invoking self.close() TestCase017WorkerThread.js:25
			 Worker Scope: Loading done TestCase017WorkerThread.js:28
			 */