///header			
app_global_context["registerFunc"]("", test_case_parent_thread_32, "basic");
////function follows			
function test_case_parent_thread_32() {
    //32) worker.addEventListener() : without event object
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase032WorkerThread.js');
    //invoked when worker calls postmessage() from its inner scope
    worker.addEventListener("message", function() {
        kony.print('Parent Scope : onmessage :  without event object');
    });
    kony.print("Parent Scope: Exit test_case_parent_thread()");
};
// test_case_parent_thread();
/*
             * Reference O/P : Chrome
             Parent Scope: Init test_case_parent_thread() TestCase032ParentThread.html:15
             Parent Scope: Exit test_case_parent_thread() TestCase032ParentThread.html:25
             Worker Scope: Init TestCase032WorkerThread.js:5
             Parent Scope : onmessage :  without event object TestCase032ParentThread.html:21
             Worker Scope: Loading done TestCase032WorkerThread.js:9

             *  */