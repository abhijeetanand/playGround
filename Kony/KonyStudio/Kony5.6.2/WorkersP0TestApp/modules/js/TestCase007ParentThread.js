

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_7, "basic");
		
////function follows			


			function test_case_parent_thread_7() {
				//script error in worker : "error" event listener registered in parent

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase007WorkerThread.js');

				//invoked when worker calls postmessage() from its inner scope
				worker.addEventListener("message", function(event) {
					kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
				});

				//error event handler
				var evtErrorHandler_1 = function(event) {
					kony.print("Parent scope: In error handler ");
					kony.print('Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
				};

				worker.addEventListener("error", evtErrorHandler_1);

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
			 Parent Scope: Init test_case_parent_thread() TestCase007ParentThread.html:15
			 Parent Scope : Invoking worker.postmessage() TestCase007ParentThread.html:33
			 Parent Scope: Exit test_case_parent_thread() TestCase007ParentThread.html:39
			 Worker Scope: Init TestCase007WorkerThread.js:5
			 Worker Scope: Loading done TestCase007WorkerThread.js:28
			 Worker Scope : onmessage : event.data : Hello World From Parent TestCase007WorkerThread.js:9
			 Worker Scope : invoking postMessage() TestCase007WorkerThread.js:15
			 Parent Scope : onmessage : event.data : Hello World From Worker  TestCase007ParentThread.html:21
			 Parent scope: In error handler  TestCase007ParentThread.html:26
			 Parent scope: ERROR: Line 22 in http://127.0.0.1:8020/WebWorker/TestCase007WorkerThread.js: Uncaught ReferenceError: slef is not defined TestCase007ParentThread.html:27
			 Uncaught ReferenceError: slef is not defined TestCase007WorkerThread.js:22
			 */

