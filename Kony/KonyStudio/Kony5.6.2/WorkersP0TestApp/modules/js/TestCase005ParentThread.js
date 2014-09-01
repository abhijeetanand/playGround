

///header			
app_global_context["registerFunc"]("Basic", 
test_case_parent_thread_5, "basic");
		
////function follows			


			function test_case_parent_thread_5() {
				//worker file not found: "onerror" not registered
				
				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('_worler_file_not_present_.js');
				
				//
				for(var i=0; i<10; i++) {
					kony.print("Parent Scope: loop count : " + i);
				}


				kony.print("Parent Scope: Exit test_case_parent_thread()");
			};
			
			//test_case_parent_thread();

/*
 * Chrome
 * Parent Scope: Init test_case_parent_thread() TestCase005ParentThread.html:15
Parent Scope: loop count : 0 TestCase005ParentThread.html:21
Parent Scope: loop count : 1 TestCase005ParentThread.html:21
Parent Scope: loop count : 2 TestCase005ParentThread.html:21
Parent Scope: loop count : 3 TestCase005ParentThread.html:21
Parent Scope: loop count : 4 TestCase005ParentThread.html:21
Parent Scope: loop count : 5 TestCase005ParentThread.html:21
Parent Scope: loop count : 6 TestCase005ParentThread.html:21
Parent Scope: loop count : 7 TestCase005ParentThread.html:21
Parent Scope: loop count : 8 TestCase005ParentThread.html:21
Parent Scope: loop count : 9 TestCase005ParentThread.html:21
Parent Scope: Exit test_case_parent_thread() TestCase005ParentThread.html:25
GET http://127.0.0.1:8020/WebWorker/_worler_file_not_present_.js 404 (Not Found) TestCase005ParentThread.html:17
 */





