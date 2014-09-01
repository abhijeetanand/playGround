///header			
app_global_context["registerFunc"]("", test_case_parent_thread_36, "basic");
////function follows			
function test_case_parent_thread_36() {
    //36) worker file not found : with out error handler : in try{}catch(){} block
    try {
        kony.print("Parent Scope: Init test_case_parent_thread()");
        kony.print("Parent Scope: In try block");
        //create new kony.worker.WorkerThread
        var worker = new kony.worker.WorkerThread('file_not_found_error.js');
        //invoked when worker calls postmessage() from its inner scope
        worker.addEventListener("message", function(event) {
            kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
        });
        worker.addEventListener("error", evtErrorHandler_1);
        kony.print("Parent Scope: Exit test_case_parent_thread()");
    } catch (err) {
        kony.print("Parent Scope: In Catch block");
    }
};
// test_case_parent_thread();
/*
             * Reference O/P : Chrome
             Parent Scope: Init test_case_parent_thread() TestCase036ParentThread.html:16
             Parent Scope: In try block TestCase036ParentThread.html:17
             Parent Scope: In Catch block TestCase036ParentThread.html:33
             GET http://127.0.0.1:8020/WebWorker/file_not_found_error.js 404 (Not Found) TestCase036ParentThread.html:20

             *  */