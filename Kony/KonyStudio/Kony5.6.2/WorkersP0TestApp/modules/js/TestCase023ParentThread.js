
///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_23, "basic");
		
////function follows			



			function test_case_parent_thread_23() {
				//globals access restriction in worker

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase023WorkerThread.js');

				//global
				_jsonOBJ = {
					"value" : "In parent Scope"
				};
				kony.print("Parent Scope: _jsonOBJ['value'] : " + _jsonOBJ['value']);

				kony.print("Parent Scope: Exit test_case_parent_thread()");
			};

			//test_case_parent_thread();

			/*
			 * Reference O/P : Firefox
			 GET http://127.0.0.1:8020/WebWorker/TestCase023ParentThread.html [HTTP/1.1 200 OK 1ms]
			 "Parent Scope: Init test_case_parent_thread()" TestCase023ParentThread.html:15
			 "Parent Scope: _jsonOBJ['value'] : In parent Scope" TestCase023ParentThread.html:23
			 "Parent Scope: Exit test_case_parent_thread()" TestCase023ParentThread.html:25
			 GET http://127.0.0.1:8020/WebWorker/TestCase023WorkerThread.js [HTTP/1.1 200 OK 1ms]
			 ReferenceError: _jsonOBJ is not defined TestCase023WorkerThread.js:16
			 GET http://127.0.0.1:8020/WebWorker/TestCase023WorkerThread2.js [HTTP/1.1 200 OK 1ms]
			 "Worker Scope: Init" TestCase023WorkerThread.js:5
			 ReferenceError: _jsonOBJ2 is not defined TestCase023WorkerThread2.js:8
			 "Grand Child Worker Scope: Init" TestCase023WorkerThread2.js:5
			 *  */

