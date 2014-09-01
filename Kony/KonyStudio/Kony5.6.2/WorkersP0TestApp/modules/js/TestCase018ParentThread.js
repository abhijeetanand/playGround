

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_18, "basic");
		
////function follows			



			function test_case_parent_thread_18() {
				//addEventListener("message") -> postMessage() :
				//in worker scope call self.close()
				//invoke self.postMessage() after self.close()

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase018WorkerThread.js');

				//invoked when worker calls postmessage() from its inner scope
				worker.addEventListener("message", function(event) {
					kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
					kony.print('Parent Scope : onmessage : invoking worker.postmessage()');

					worker.postMessage({
						'message' : 'Hello World From Parent'
					});
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
			 Parent Scope: Init test_case_parent_thread() TestCase018ParentThread.html:17
			 Parent Scope : Invoking worker.postmessage() TestCase018ParentThread.html:31
			 Parent Scope: Exit test_case_parent_thread() TestCase018ParentThread.html:37
			 Worker Scope: Init TestCase018WorkerThread.js:5
			 Worker Scope: invoking self.close() TestCase018WorkerThread.js:18
			 Worker Scope : invoking self.postMessage() TestCase018WorkerThread.js:21
			 Parent Scope : onmessage : event.data : Hello World From Worker  TestCase018ParentThread.html:23
			 Parent Scope : onmessage : invoking worker.postmessage() TestCase018ParentThread.html:24
			 Worker Scope: Loading done TestCase018WorkerThread.js:27
			 */

