

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_15, "basic");
		
////function follows			



			function test_case_parent_thread_15() {
				//postMessage() without registered "message" event listeners

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase015WorkerThread.js');

				kony.print('Parent Scope : Invoking worker.postmessage()');
				//will invoke worker's inner scope onmessage()
				worker.postMessage({
					'message' : 'Hello World From Parent'
				});

				kony.print("Parent Scope: Exit test_case_parent_thread()");
			};

			//test_case_parent_thread();

			/*
			 * Reference O/P : Chrome
			 Parent Scope: Init test_case_parent_thread() TestCase015ParentThread.html:15
			 Parent Scope : Invoking worker.postmessage() TestCase015ParentThread.html:20
			 Parent Scope: Exit test_case_parent_thread() TestCase015ParentThread.html:26
			 Worker Scope: Init TestCase015WorkerThread.js:5
			 Worker Scope : invoking postMessage() TestCase015WorkerThread.js:7
			 Worker Scope: Loading done TestCase015WorkerThread.js:13
			 */

