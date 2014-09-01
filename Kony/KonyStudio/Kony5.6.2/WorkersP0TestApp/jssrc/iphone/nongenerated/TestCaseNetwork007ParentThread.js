///header			
app_global_context["registerFunc"]("konynetwork API - kony.net.HttpRequest() : sync call", test_case_network_parent_thread_7, "nonui");
////function follows			
function test_case_network_parent_thread_7() {
    //7) 
    try {
        kony.print("Parent Scope: Init test_case_parent_thread()");
        kony.print("Parent Scope: In try block");
        //create new kony.worker.WorkerThread
        var worker = new kony.worker.WorkerThread('TestCaseNetwork007WorkerThread.js');
        //invoked when worker calls postmessage() from its inner scope
        worker.addEventListener("message", function(event) {
            kony.print('Parent Scope : onmessage : event.data : ' + event.data["message"]);
        });
        worker.postMessage("Hello from Parent");
        kony.print("Parent Scope: Exit test_case_parent_thread()");
    } catch (err) {
        kony.print("Parent Scope: In Catch block");
    }
};
/*
             * Reference O/P : Chrome

             *  */