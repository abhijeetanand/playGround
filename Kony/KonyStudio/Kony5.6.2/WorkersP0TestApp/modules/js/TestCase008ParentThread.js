

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_8, "basic");
		
////function follows			


			function test_case_parent_thread_8() {
				//script error in worker : "error" event listener not registered in parent

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase008WorkerThread.js');

				//invoked when worker calls postmessage() from its inner scope
				worker.addEventListener("message", function(event) {
					kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
				});

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
			 * Parent Scope: Init test_case_parent_thread() TestCase008ParentThread.html:15
			 Parent Scope : Invoking worker.postmessage() TestCase008ParentThread.html:25
			 Parent Scope: Exit test_case_parent_thread() TestCase008ParentThread.html:31
			 Worker Scope: Init TestCase007WorkerThread.js:5
			 Worker Scope: Loading done TestCase007WorkerThread.js:28
			 Worker Scope : onmessage : event.data : Hello World From Parent TestCase007WorkerThread.js:9
			 Worker Scope : invoking postMessage() TestCase007WorkerThread.js:15
			 Parent Scope : onmessage : event.data : Hello World From Worker  TestCase008ParentThread.html:21
			 Uncaught ReferenceError: slef is not defined TestCase007WorkerThread.js:22
			 */

