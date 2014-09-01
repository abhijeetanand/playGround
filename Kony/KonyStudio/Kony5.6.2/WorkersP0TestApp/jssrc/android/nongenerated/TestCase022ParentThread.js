///header			
app_global_context["registerFunc"]("", test_case_parent_thread_22, "basic");
////function follows			
function test_case_parent_thread_22() {
    //basic execution 3 levels of parent -> child -> grand child
    //globals access scope in worker
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase022WorkerThread.js');
    //global
    _jsonOBJ = {
        "value": "In parent Scope"
    };
    kony.print("Parent Scope: _jsonOBJ['value'] : " + _jsonOBJ['value']);
    kony.print("Parent Scope: Exit test_case_parent_thread()");
};
//test_case_parent_thread();
/*
			 * Reference O/P : Firefox
			 "Parent Scope: Init test_case_parent_thread()" TestCase022ParentThread.html:17
			 "Parent Scope: _jsonOBJ['value'] : In parent Scope" TestCase022ParentThread.html:25
			 "Parent Scope: Exit test_case_parent_thread()" TestCase022ParentThread.html:27
			 "Worker Scope: Init" TestCase022WorkerThread.js:5
			 "Worker Scope: _jsonOBJ['value'] : In Worker Scope" TestCase022WorkerThread.js:14
			 "Worker Scope: Loading done" TestCase022WorkerThread.js:16
			 "Grand Child Worker Scope: Init" TestCase022WorkerThread2.js:5
			 "Grand Child Worker Scope: _jsonOBJ['value'] : In Grand Child Worker Scope" TestCase022WorkerThread2.js:12
			 "Grand Child Worker Scope: Loading done" TestCase022WorkerThread2.js:14
			 *  */