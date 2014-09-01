///header			
app_global_context["registerFunc"]("Basic", test_case_parent_thread_3, "basic");
////function follows			
function test_case_parent_thread_3() {
    //basic execution 3 levels of parent -> child -> grand child
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('TestCase003WorkerThread.js');
    //
    for (var i = 0; i < 10; i++) {
        kony.print("Parent Scope: loop count : " + i);
    }
    kony.print("Parent Scope: Exit test_case_parent_thread()");
};
//test_case_parent_thread();
/*
 * Reference O/P : Firefox
 "Parent Scope: Init test_case_parent_thread()" TestCase003ParentThread.html:14
"Parent Scope: loop count : 0" TestCase003ParentThread.html:20
"Parent Scope: loop count : 1" TestCase003ParentThread.html:20
"Parent Scope: loop count : 2" TestCase003ParentThread.html:20
"Parent Scope: loop count : 3" TestCase003ParentThread.html:20
"Parent Scope: loop count : 4" TestCase003ParentThread.html:20
"Parent Scope: loop count : 5" TestCase003ParentThread.html:20
"Parent Scope: loop count : 6" TestCase003ParentThread.html:20
"Parent Scope: loop count : 7" TestCase003ParentThread.html:20
"Parent Scope: loop count : 8" TestCase003ParentThread.html:20
"Parent Scope: loop count : 9" TestCase003ParentThread.html:20
"Parent Scope: Exit test_case_parent_thread()" TestCase003ParentThread.html:24
"Worker Scope: Init" TestCase003WorkerThread.js:5
"Worker Scope: loop count : 0" TestCase003WorkerThread.js:11
"Worker Scope: loop count : 1" TestCase003WorkerThread.js:11
"Worker Scope: loop count : 2" TestCase003WorkerThread.js:11
"Worker Scope: loop count : 3" TestCase003WorkerThread.js:11
"Worker Scope: loop count : 4" TestCase003WorkerThread.js:11
"Worker Scope: loop count : 5" TestCase003WorkerThread.js:11
"Worker Scope: loop count : 6" TestCase003WorkerThread.js:11
"Worker Scope: loop count : 7" TestCase003WorkerThread.js:11
"Worker Scope: loop count : 8" TestCase003WorkerThread.js:11
"Worker Scope: loop count : 9" TestCase003WorkerThread.js:11
"Worker Scope: Loading done" TestCase003WorkerThread.js:14
"Grand Child Worker Scope: Init" TestCase003WorkerThread2.js:5
"Grand Child Worker Scope: loop count : 0" TestCase003WorkerThread2.js:9
"Grand Child Worker Scope: loop count : 1" TestCase003WorkerThread2.js:9
"Grand Child Worker Scope: loop count : 2" TestCase003WorkerThread2.js:9
"Grand Child Worker Scope: loop count : 3" TestCase003WorkerThread2.js:9
"Grand Child Worker Scope: loop count : 4" TestCase003WorkerThread2.js:9
"Grand Child Worker Scope: loop count : 5" TestCase003WorkerThread2.js:9
"Grand Child Worker Scope: loop count : 6" TestCase003WorkerThread2.js:9
"Grand Child Worker Scope: loop count : 7" TestCase003WorkerThread2.js:9
"Grand Child Worker Scope: loop count : 8" TestCase003WorkerThread2.js:9
"Grand Child Worker Scope: loop count : 9" TestCase003WorkerThread2.js:9
"Grand Child Worker Scope: Loading done" TestCase003WorkerThread2.js:12
*  */