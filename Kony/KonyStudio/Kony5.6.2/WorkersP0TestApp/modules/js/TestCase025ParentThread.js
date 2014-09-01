

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_25, "basic");
		
////function follows			


			function test_case_parent_thread_25() {
				//importScripts() - multiple files;

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase025WorkerThread.js');

				//global
				_jsonOBJ = {
					"value" : "In parent Scope"
				};
				kony.print("Parent Scope: _jsonOBJ['value'] : " + _jsonOBJ['value']);

				kony.print("Parent Scope: Exit test_case_parent_thread()");
			};

			//test_case_parent_thread();

			/*
			 * Reference O/P : Chrome
			 Parent Scope: Init test_case_parent_thread() TestCase024ParentThread.html:15
			 Parent Scope: Init test_case_parent_thread() TestCase025ParentThread.html:15
			 Parent Scope: _jsonOBJ['value'] : In parent Scope TestCase025ParentThread.html:23
			 Parent Scope: Exit test_case_parent_thread() TestCase025ParentThread.html:25
			 Worker Scope: Init TestCase025WorkerThread.js:7
			 Worker Scope: calling func_need_to_be_imported_do_something_in_worker() TestCase025WorkerThread.js:10
			 func_need_to_be_imported_do_something_in_worker() : Init TestCase025WorkerThread2.js:4
			 func_need_to_be_imported_do_something_in_worker() : Done TestCase025WorkerThread2.js:5
			 Worker Scope: calling func_need_to_be_imported_do_something_in_worker_2() TestCase025WorkerThread.js:15
			 func_need_to_be_imported_do_something_in_worker_2() : Init TestCase025WorkerThread3.js:4
			 func_need_to_be_imported_do_something_in_worker_2() : Done TestCase025WorkerThread3.js:5
			 Worker Scope: Loading done TestCase025WorkerThread.js:19
			 *  */

