

///header			
app_global_context["registerFunc"]("", 
test_case_parent_thread_33, "basic");
		
////function follows			



            function test_case_parent_thread_33() {
                //33) worker scope postmessage() : without event message

                try {
                    kony.print("Parent Scope: Init test_case_parent_thread()");
                    kony.print("Parent Scope: In try block");

                    //create new kony.worker.WorkerThread
                    var worker = new kony.worker.WorkerThread('TestCase033WorkerThread.js');

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
             Parent Scope: Init test_case_parent_thread() TestCase033ParentThread.html:16
             Parent Scope: In try block TestCase033ParentThread.html:17
             Parent Scope: Exit test_case_parent_thread() TestCase033ParentThread.html:35
             Worker Scope: Init TestCase033WorkerThread.js:6
             Worker Scope: in try block TestCase033WorkerThread.js:8
             Uncaught TypeError: Cannot read property 'message' of undefined TestCase033ParentThread.html:24
             Worker Scope: Loading done TestCase033WorkerThread.js:20

             *  */
