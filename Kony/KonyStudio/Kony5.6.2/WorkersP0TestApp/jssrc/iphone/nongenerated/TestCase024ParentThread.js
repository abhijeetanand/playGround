///header			
app_global_context["registerFunc"]("", test_case_parent_thread_24, "basic");
////function follows			
function test_case_parent_thread_24() {
    //importScripts() - single file;
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase024WorkerThread.js');
    //global
    _jsonOBJ = {
        "value": "In parent Scope"
    };
    kony.print("Parent Scope: _jsonOBJ['value'] : " + _jsonOBJ['value']);
    kony.print("Parent Scope: Exit test_case_parent_thread()");
};
//test_case_parent_thread();
/*
			 * Reference O/P : Chrome
			 Parent Scope: Init test_case_parent_thread() TestCase024ParentThread.html:15
			 Parent Scope: _jsonOBJ['value'] : In parent Scope TestCase024ParentThread.html:23
			 Parent Scope: Exit test_case_parent_thread() TestCase024ParentThread.html:25
			 Worker Scope: Init TestCase024WorkerThread.js:7
			 Worker Scope: calling func_need_to_be_imported_do_something_in_worker() TestCase024WorkerThread.js:10
			 func_need_to_be_imported_do_something_in_worker() : Init TestCase024WorkerThread2.js:4
			 func_need_to_be_imported_do_something_in_worker() : Done TestCase024WorkerThread2.js:5
			 Worker Scope: Loading done TestCase024WorkerThread.js:15
			 *  */