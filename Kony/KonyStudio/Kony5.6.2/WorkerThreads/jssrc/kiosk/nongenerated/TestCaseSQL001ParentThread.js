			var Test = 0;

			function test_case_sql_parent_thread_1() {
			    // SQL write and read in worker - sequential - ontimer - 3000 records 
			    try {
			        frmSQL1.lbl2.text = "Parent Scope: Init test_case_parent_thread_1()";
			        frmSQL1.lbl2.text += "Parent Scope: In try block";
			        //create new kony.worker.WorkerThread
			        var worker = new kony.worker.WorkerThread('TestCaseSQL001WorkerThread.js');
			        //invoked when worker calls postmessage() from its inner scope
			        worker.addEventListener("message", function(event) {
			            frmSQL1.lbl1.text = 'Parent Scope : onmessage : event.data : ' + event.data;
			        });
			        // worker.postMessage("Hello from Parent");
			        frmSQL1.lbl2.text += "Parent Scope: Exit test_case_parent_thread()";
			    } catch (err) {
			        kony.print("Parent Scope: In Catch block");
			    }
			};
			/*
             * Reference O/P : Chrome

             *  */
			