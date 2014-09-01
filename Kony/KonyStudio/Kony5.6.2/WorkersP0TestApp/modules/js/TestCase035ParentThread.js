


///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_35, "basic");
		
////function follows			



            function test_case_parent_thread_35() {
                //35) worker file not found : with error handler : in try{}catch(){} blockTestCase034ParentThread.html

                try {
                    kony.print("Parent Scope: Init test_case_parent_thread()");
                    kony.print("Parent Scope: In try block");

                    //create new kony.worker.WorkerThread
                    var worker = new kony.worker.WorkerThread('file_not_found_error.js');

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

                    kony.print("Parent Scope: Exit test_case_parent_thread()");

                } catch(err) {
                    kony.print("Parent Scope: In Catch block");

                }

            };

           // test_case_parent_thread();

            /*
             * Reference O/P : Chrome
             Parent Scope: Init test_case_parent_thread() TestCase034ParentThread.html:16
             Parent Scope: In try block TestCase034ParentThread.html:17
             Parent Scope: Exit test_case_parent_thread() TestCase034ParentThread.html:35
             Worker Scope: Init TestCase034WorkerThread.js:6
             Worker Scope: in try block TestCase034WorkerThread.js:8
             Parent Scope : onmessage : event.data : undefined TestCase034ParentThread.html:24
             Worker Scope: Loading done TestCase034WorkerThread.js:20

             *  */
