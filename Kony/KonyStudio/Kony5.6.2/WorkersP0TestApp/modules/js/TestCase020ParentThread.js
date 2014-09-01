

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_20, "basic");
		
////function follows			



			function test_case_parent_thread_20() {
				//multiple addEventListener("message") : removeEventListener()

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase020WorkerThread.js');

				var message1 = function(event) {
					kony.print("Parent Scope : message handler 1");
				};

				var message2 = function(event) {
					kony.print("Parent Scope : message handler 2");
				};

				var message3 = function(event) {
					kony.print("Parent Scope : message handler 3");
				};

				var message4 = function(event) {
					kony.print("Parent Scope : message handler 4");
				};

				var message5 = function(event) {
					kony.print("Parent Scope : message handler 5");
				};

				//add
				worker.addEventListener("message", message1);
				worker.addEventListener("message", message2);
				worker.addEventListener("message", message3);
				worker.addEventListener("message", message4);
				worker.addEventListener("message", message5);

				//remove
				kony.print("Parent: removing message eventListener 5");
				worker.removeEventListener("message", message5);

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
			 Parent Scope: Init test_case_parent_thread() TestCase020ParentThread.html:15
			 Parent: removing message eventListener 5 TestCase020ParentThread.html:47
			 Parent Scope : Invoking worker.postmessage() TestCase020ParentThread.html:50
			 Parent Scope: Exit test_case_parent_thread() TestCase020ParentThread.html:56
			 Worker Scope: Init TestCase020WorkerThread.js:5
			 Worker: removing message eventListener 5 TestCase020WorkerThread.js:37
			 Worker Scope : invoking self.postMessage() TestCase020WorkerThread.js:40
			 Parent Scope : message handler 1 TestCase020ParentThread.html:20
			 Parent Scope : message handler 2 TestCase020ParentThread.html:24
			 Parent Scope : message handler 3 TestCase020ParentThread.html:28
			 Parent Scope : message handler 4 TestCase020ParentThread.html:32
			 Worker Scope: Loading done TestCase020WorkerThread.js:46
			 Worker Scope : message handler 1 TestCase020WorkerThread.js:10
			 Worker Scope : message handler 2 TestCase020WorkerThread.js:14
			 Worker Scope : message handler 3 TestCase020WorkerThread.js:18
			 Worker Scope : message handler 4 TestCase020WorkerThread.js:22
			 */

