///header			
app_global_context["registerFunc"]("SQL: kony.db. - 1", test_case_sql_parent_thread_1, "sql");
////function follows			
function test_case_sql_parent_thread_1() {
    // SQL write and read in worker - sequential - ontimer - 3000 records 
    try {
        frmSQL.lbl1.text += ("Parent Scope: Init test_case_parent_thread_1()");
        kony.print("Parent Scope: In try block");
        //create new kony.worker.WorkerThread
        var worker = new kony.worker.WorkerThread('TestCaseSQL001WorkerThread.js');
        //invoked when worker calls postmessage() from its inner scope
        worker.addEventListener("message", function(event) {
            frmSQL.lbl2.text += '\nPS:WS1:' + event.data;
        });
        worker.postMessage("Hello from Parent");
        frmSQL.lbl1.text += ("Parent Scope: Exit test_case_parent_thread()");
    } catch (err) {
        kony.print("Parent Scope: In Catch block");
    }
};