
///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_12, "basic");
		
////function follows			



			function test_case_parent_thread_12() {
				//Error propagation : script error in child worker :
				//"error" event listener registered in : parent(YES) and child(YES) and grand child(YES)

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase012WorkerThread.js');

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
			 * Reference O/P : Firefox
			 GET http://127.0.0.1:8020/WebWorker/TestCase012ParentThread.html [HTTP/1.1 200 OK 1ms]
			 "Parent Scope: Init test_case_parent_thread()" TestCase012ParentThread.html:16
			 "Parent Scope : Invoking worker.postmessage()" TestCase012ParentThread.html:33
			 "Parent Scope: Exit test_case_parent_thread()" TestCase012ParentThread.html:39
			 GET http://127.0.0.1:8020/WebWorker/TestCase012WorkerThread.js [HTTP/1.1 200 OK 1ms]
			 ReferenceError: slef is not defined TestCase012WorkerThread.js:41
			 GET http://127.0.0.1:8020/WebWorker/TestCase012WorkerThread2.js [HTTP/1.1 200 OK 1ms]
			 "Worker Scope: Init" TestCase012WorkerThread.js:5
			 "Worker scope:  In error handler " TestCase012WorkerThread.js:22
			 "Worker scope:  ERROR: Line undefined in undefined: undefined" TestCase012WorkerThread.js:23
			 "Parent Scope : onmessage : event.data : Hello World From Worker " TestCase012ParentThread.html:22
			 "Parent scope: In error handler " TestCase012ParentThread.html:27
			 "Parent scope: ERROR: Line 41 in http://127.0.0.1:8020/WebWorker/TestCase012WorkerThread.js: ReferenceError: slef is not defined" TestCase012ParentThread.html:28
			 "Grand Child Worker Scope: Init" TestCase012WorkerThread2.js:5
			 "Grand Child Worker Scope : invoking postMessage()" TestCase012WorkerThread2.js:17
			 "Grand Child Worker Scope: Loading done"
			 */
