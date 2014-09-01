///header			
app_global_context["registerFunc"]("", test_case_parent_thread_30, "basic");
////function follows			
function test_case_parent_thread_30() {
    //try{}catch(){} in worker
    //no throw() in catch(){} block  
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase030WorkerThread.js');
    var evtErrorHandler_1 = function(event) {
            kony.print("Parent scope: In error handler 1");
            kony.print('Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
        };
    worker.addEventListener("error", evtErrorHandler_1);
    kony.print("Parent Scope: Exit test_case_parent_thread()");
};
//            test_case_parent_thread();
/*
             * Reference O/P : Chrome
             Parent Scope: Init test_case_parent_thread() TestCase030ParentThread.html:15
             Parent Scope: Exit test_case_parent_thread() TestCase030ParentThread.html:26
             Worker Scope: Init TestCase030WorkerThread.js:5
             Worker Scope: try block TestCase030WorkerThread.js:20
             Worker Scope: Catch block TestCase030WorkerThread.js:23
             Worker Scope: Not throwing further TestCase030WorkerThread.js:24
             Worker Scope: Loading done TestCase030WorkerThread.js:27
             */