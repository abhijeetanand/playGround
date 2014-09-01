

///header			
app_global_context["registerFunc"]("Basic", 
test_case_parent_thread_4, "basic");
		
////function follows			


			function test_case_parent_thread_4() {
				//basic execution parent -> child : child loading itself
				
				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase004WorkerThread.js');
				
				//
				for(var i=0; i<10; i++) {
					kony.print("Parent Scope: loop count : " + i);
				}


				kony.print("Parent Scope: Exit test_case_parent_thread()");
			};
			
			//test_case_parent_thread();

