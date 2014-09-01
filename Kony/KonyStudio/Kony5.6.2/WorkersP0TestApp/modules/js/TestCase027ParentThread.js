

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_27, "basic");
		
////function follows			



			function test_case_parent_thread_27() {
				//importScripts() - multiple files, error in one of the files;

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase027WorkerThread.js');

				var evtErrorHandler_1 = function(event) {
					kony.print("Parent scope: In error handler 1");
					kony.print('Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
				};

				worker.addEventListener("error", evtErrorHandler_1);

				kony.print("Parent Scope: Exit test_case_parent_thread()");
			};

//			test_case_parent_thread();

			/*
			 * Reference O/P : Chrome
			 Parent Scope: Init test_case_parent_thread() TestCase027ParentThread.html:15
			 Parent Scope: Exit test_case_parent_thread() TestCase027ParentThread.html:26
			 Worker Scope: Init TestCase027WorkerThread.js:5
			 Worker scope: In error handler 1 TestCase027WorkerThread.js:9
			 Worker scope: ERROR: Line 4 in http://127.0.0.1:8020/WebWorker/TestCase027WorkerThread2.js: Uncaught ReferenceError: func_which_is_not_present_in_this_scope is not defined TestCase027WorkerThread.js:10
			 Worker Scope: calling func_need_to_be_imported_do_something_in_worker_2() TestCase027WorkerThread.js:12
			 Parent scope: In error handler 1 TestCase027ParentThread.html:20
			 Parent scope: ERROR: Line 4 in http://127.0.0.1:8020/WebWorker/TestCase027WorkerThread2.js: Uncaught ReferenceError: func_which_is_not_present_in_this_scope is not defined TestCase027ParentThread.html:21
			 Uncaught ReferenceError: func_which_is_not_present_in_this_scope is not defined TestCase027WorkerThread2.js:4
			 Parent scope: In error handler 1 TestCase027ParentThread.html:20
			 Parent scope: ERROR: Line 14 in http://127.0.0.1:8020/WebWorker/TestCase027WorkerThread.js: Uncaught ReferenceError: func_need_to_be_imported_do_something_in_worker_2 is not defined TestCase027ParentThread.html:21
			 Uncaught ReferenceError: func_need_to_be_imported_do_something_in_worker_2 is not defined TestCase027WorkerThread.js:14
			 *  */

