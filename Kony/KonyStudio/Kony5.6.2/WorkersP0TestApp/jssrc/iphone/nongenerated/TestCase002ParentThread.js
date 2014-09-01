///header			
app_global_context["registerFunc"]("Basic", test_case_parent_thread_2, "basic");
////function follows			
function test_case_parent_thread_2() {
    //addEventListener
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase002WorkerThread.js');
    //invoked when worker calls postmessage() from its inner scope
    worker.addEventListener("message", function(event) {
        kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
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
 * Parent Scope: Init test_case_parent_thread() TestCase002ParentThread.html:13
 Parent Scope : Invoking worker.postmessage() TestCase002ParentThread.html:22
 Parent Scope: Exit test_case_parent_thread() TestCase002ParentThread.html:28
 Worker Scope: Init TestCase002WorkerThread.js:8
 Worker Scope: Loading done TestCase002WorkerThread.js:24
 Worker Scope : onmessage : event.data : Hello World From Parent TestCase002WorkerThread.js:12
 Worker Scope : invoking postMessage() TestCase002WorkerThread.js:18
 Parent Scope : onmessage : event.data : Hello World From Worker   *  */