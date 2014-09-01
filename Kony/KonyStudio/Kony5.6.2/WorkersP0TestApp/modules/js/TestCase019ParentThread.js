

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_19, "basic");
		
////function follows			


			function test_case_parent_thread_19() {
				//multiple addEventListener("message") :

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase019WorkerThread.js');

				worker.addEventListener("message", function(event) {
					kony.print("Parent Scope: message handler 1");
				});

				worker.addEventListener("message", function(event) {
					kony.print("Parent Scope: message handler 2");
				});

				worker.addEventListener("message", function(event) {
					kony.print("Parent Scope: message handler 3");
				});

				worker.addEventListener("message", function(event) {
					kony.print("Parent Scope: message handler 4");
				});

				worker.addEventListener("message", function(event) {
					kony.print("Parent Scope: message handler 5");
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
			 Parent Scope: Init test_case_parent_thread() TestCase019ParentThread.html:15
			 Parent Scope : Invoking worker.postmessage() TestCase019ParentThread.html:39
			 Parent Scope: Exit test_case_parent_thread() TestCase019ParentThread.html:45
			 Worker Scope: Init TestCase019WorkerThread.js:5
			 Worker Scope : invoking self.postMessage() TestCase019WorkerThread.js:30
			 Parent Scope: message handler 1 TestCase019ParentThread.html:20
			 Parent Scope: message handler 2 TestCase019ParentThread.html:24
			 Parent Scope: message handler 3 TestCase019ParentThread.html:28
			 Parent Scope: message handler 4 TestCase019ParentThread.html:32
			 Parent Scope: message handler 5 TestCase019ParentThread.html:36
			 Worker Scope: Loading done TestCase019WorkerThread.js:36
			 Worker Scope: message handler 1 TestCase019WorkerThread.js:10
			 Worker Scope: message handler 2 TestCase019WorkerThread.js:14
			 Worker Scope: message handler 3 TestCase019WorkerThread.js:18
			 Worker Scope: message handler 4 TestCase019WorkerThread.js:22
			 Worker Scope: message handler 5 TestCase019WorkerThread.js:26
			 */

