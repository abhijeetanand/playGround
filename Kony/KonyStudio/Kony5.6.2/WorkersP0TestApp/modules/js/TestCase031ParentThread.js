

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_31, "basic");
		
////function follows			


            function test_case_parent_thread_31() {
                //try{}catch(){} in worker
                //throw() in catch(){} block  

                kony.print("Parent Scope: Init test_case_parent_thread()");
                //create new kony.worker.WorkerThread
                var worker = new kony.worker.WorkerThread('TestCase031WorkerThread.js');

                var evtErrorHandler_1 = function(event) {
                    kony.print("Parent scope: In error handler 1");
                    kony.print('Parent scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
                };

                worker.addEventListener("error", evtErrorHandler_1);

                kony.print("Parent Scope: Exit test_case_parent_thread()");
            };

//            test_case_parent_thread();

            /*
             * Reference O/P : Chrome
             Parent Scope: Init test_case_parent_thread() TestCase031ParentThread.html:15
             Parent Scope: Exit test_case_parent_thread() TestCase031ParentThread.html:26
             Worker Scope: Init TestCase031WorkerThread.js:5
             Worker Scope: try block TestCase031WorkerThread.js:20
             Worker Scope: Catch block TestCase031WorkerThread.js:23
             Worker Scope: throwing further TestCase031WorkerThread.js:24
             Worker scope: In error handler 1 TestCase031WorkerThread.js:9
             Worker scope: ERROR: Line 25 in http://127.0.0.1:8020/WebWorker/TestCase031WorkerThread.js: Uncaught Worker Scope: Error in self.postMessage() TestCase031WorkerThread.js:10
             Parent scope: In error handler 1 TestCase031ParentThread.html:20
             Parent scope: ERROR: Line 25 in http://127.0.0.1:8020/WebWorker/TestCase031WorkerThread.js: Uncaught Worker Scope: Error in self.postMessage() TestCase031ParentThread.html:21
             Uncaught Worker Scope: Error in self.postMessage() TestCase031WorkerThread.js:25
             */
