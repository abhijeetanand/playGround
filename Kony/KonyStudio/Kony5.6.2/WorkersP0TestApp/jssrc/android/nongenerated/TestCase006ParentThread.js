///header			
app_global_context["registerFunc"]("", test_case_parent_thread_6, "basic");
////function follows			
function test_case_parent_thread_6() {
    //worker file not found: "onerror" registered
    kony.print("Parent Scope: Init test_case_parent_thread()");
    //create new kony.worker.WorkerThread
    var worker = new kony.worker.WorkerThread('_worler_file_not_present_.js');
    //error event handler
    var evtErrorHandler_1 = function(event) {
            kony.print("Parent scope: In error handler ");
            kony.print('ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
        };
    worker.addEventListener("error", evtErrorHandler_1);
    //
    for (var i = 0; i < 10; i++) {
        kony.print("Parent Scope: loop count : " + i);
    }
    kony.print("Parent Scope: Exit test_case_parent_thread()");
};
//test_case_parent_thread();
/* Chrome
			 * Parent Scope: loop count : 0 TestCase006ParentThread.html:29
			 Parent Scope: loop count : 1 TestCase006ParentThread.html:29
			 Parent Scope: loop count : 2 TestCase006ParentThread.html:29
			 Parent Scope: loop count : 3 TestCase006ParentThread.html:29
			 Parent Scope: loop count : 4 TestCase006ParentThread.html:29
			 Parent Scope: loop count : 5 TestCase006ParentThread.html:29
			 Parent Scope: loop count : 6 TestCase006ParentThread.html:29
			 Parent Scope: loop count : 7 TestCase006ParentThread.html:29
			 Parent Scope: loop count : 8 TestCase006ParentThread.html:29
			 Parent Scope: loop count : 9 TestCase006ParentThread.html:29
			 Parent Scope: Exit test_case_parent_thread() TestCase006ParentThread.html:32
			 GET http://127.0.0.1:8020/WebWorker/_worler_file_not_present_.js 404 (Not Found) TestCase006ParentThread.html:17
			 Parent scope: In error handler TestCase006ParentThread.html:21
			 ERROR: Line undefined in undefined: undefined
			 */
/*
			 * Firefox
			 * "Parent Scope: Init test_case_parent_thread()" TestCase006ParentThread.html:15
			 "Parent Scope: loop count : 0" TestCase006ParentThread.html:29
			 "Parent Scope: loop count : 1" TestCase006ParentThread.html:29
			 "Parent Scope: loop count : 2" TestCase006ParentThread.html:29
			 "Parent Scope: loop count : 3" TestCase006ParentThread.html:29
			 "Parent Scope: loop count : 4" TestCase006ParentThread.html:29
			 "Parent Scope: loop count : 5" TestCase006ParentThread.html:29
			 "Parent Scope: loop count : 6" TestCase006ParentThread.html:29
			 "Parent Scope: loop count : 7" TestCase006ParentThread.html:29
			 "Parent Scope: loop count : 8" TestCase006ParentThread.html:29
			 "Parent Scope: loop count : 9" TestCase006ParentThread.html:29
			 "Parent Scope: Exit test_case_parent_thread()" TestCase006ParentThread.html:32
			 Error: Script file not found: _worler_file_not_present_.js
			 "Parent scope: In error handler " TestCase006ParentThread.html:21
			 "ERROR: Line 0 in : Error: Script file not found: _worler_file_not_present_.js"

			 */