

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_26, "basic");
		
////function follows			



			function test_case_parent_thread_26() {
				//importScripts() - in Parent thread ;

				importScripts('TestCase026WorkerThread.js');

				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase024WorkerThread.js');

				kony.print("Parent Scope: func_need_to_be_imported_do_something_in_workers()");
				func_need_to_be_imported_do_something_in_worker();

				kony.print("Parent Scope: Exit test_case_parent_thread()");
			};

//			test_case_parent_thread();

			/*
			 * Reference O/P : Chrome
			 Uncaught ReferenceError: importScripts is not defined TestCase026ParentThread.html:15
			 test_case_parent_thread TestCase026ParentThread.html:15
			 (anonymous function) TestCase026ParentThread.html:28
			 *  */

