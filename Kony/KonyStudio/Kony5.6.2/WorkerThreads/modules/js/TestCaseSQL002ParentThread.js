			
function test_case_sql_parent_thread_2() {
	// Parent : 
    // Worker1 - inserts 4000 records into sql
	// Worker2 - reads - concurrent
    startExec();
    var wrkr;
    kony.print("Parent scope : Init test_case_sql_parent_thread_2");

    function ommessageparent(eventData) {
        frmSQL2.lbl1.text ="Parent scope : got response from the worker with data :: " + eventData.data;
    }

    function onerrorparent(eventD) {
        kony.print("Parent scope : FROM got error in main.js ::" + "line ::" + eventD.line + "::" + "message ::" + eventD.message + "::" + "name::" + eventD.name + "::" + "sourceId::" + eventD.sourceId + "::" + "sourceURL::" + eventD.sourceURL);
    }

    function startExec() {
        wrkr = new kony.worker.WorkerThread("TestCaseSQL002WorkerThread.js");
        wrkr.addEventListener("message", ommessageparent);
        wrkr.addEventListener("error", onerrorparent);
    }
};
/*
             * Reference O/P : Chrome

             *  */