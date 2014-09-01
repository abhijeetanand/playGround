
///header			
app_global_context["registerFunc"]("Basic", 
test_case_parent_thread_1, "basic");
		
////function follows			
			
			function test_case_parent_thread_1() {
				//basic execution
				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase001WorkerThread.js');
				
				//
				for(var i=0; i<10; i++) {
					kony.print("Parent Scope: loop count : " + i);
				};


				kony.print("Parent Scope: Exit test_case_parent_thread()");
			};
			
			//test_case_parent_thread();


/*
 * Reference O/P : Chrome
 * Parent Scope: Init test_case_parent_thread() TestCase001ParentThread.html:13
Parent Scope: loop count : 0 TestCase001ParentThread.html:19
Parent Scope: loop count : 1 TestCase001ParentThread.html:19
Parent Scope: loop count : 2 TestCase001ParentThread.html:19
Parent Scope: loop count : 3 TestCase001ParentThread.html:19
Parent Scope: loop count : 4 TestCase001ParentThread.html:19
Parent Scope: loop count : 5 TestCase001ParentThread.html:19
Parent Scope: loop count : 6 TestCase001ParentThread.html:19
Parent Scope: loop count : 7 TestCase001ParentThread.html:19
Parent Scope: loop count : 8 TestCase001ParentThread.html:19
Parent Scope: loop count : 9 TestCase001ParentThread.html:19
Parent Scope: Exit test_case_parent_thread() TestCase001ParentThread.html:23
Worker Scope: Init TestCase001WorkerThread.js:5
Worker Scope: loop count : 0 TestCase001WorkerThread.js:8
Worker Scope: loop count : 1 TestCase001WorkerThread.js:8
Worker Scope: loop count : 2 TestCase001WorkerThread.js:8
Worker Scope: loop count : 3 TestCase001WorkerThread.js:8
Worker Scope: loop count : 4 TestCase001WorkerThread.js:8
Worker Scope: loop count : 5 TestCase001WorkerThread.js:8
Worker Scope: loop count : 6 TestCase001WorkerThread.js:8
Worker Scope: loop count : 7 TestCase001WorkerThread.js:8
Worker Scope: loop count : 8 TestCase001WorkerThread.js:8
Worker Scope: loop count : 9 TestCase001WorkerThread.js:8
Worker Scope: Loading done TestCase001WorkerThread.js:11
 *  */

 