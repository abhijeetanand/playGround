///header			
app_global_context["registerFunc"]("SQL: kony.db. - 2", test_case_sql_parent_thread_2, "sql");
////function follows			
function test_case_sql_parent_thread_2() {
	// Parent : 
    // Worker1 - inserts 4000 records into sql
	// Worker2 - reads - concurrent
    startExec();
    var wrkr;
    kony.print("Parent scope : Init test_case_sql_parent_thread_2");
	frmSQL.lbl1.text="";
	frmSQL.lbl2.text="";
    function ommessageparent(eventData) {
        kony.print("Parent scope : got response from the worker with data :: " + eventData.data);
		
		frmSQL.lbl1.text +='\nPS:WT2:'+("Parent Scope: got response from the worker with data ::" + eventData.data);
		//frmSQL.lbl2.text +='\nPS:WT2:' + eventData.data;
    }

    function onerrorparent(eventD) {
        kony.print("Parent scope : FROM got error in main.js ::" + "line ::" + eventD.line + "::" + "message ::" + eventD.message + "::" + "name::" + eventD.name + "::" + "sourceId::" + eventD.sourceId + "::" + "sourceURL::" + eventD.sourceURL);
		//frmSQL.lbl1.text="";
		frmSQL.lbl1.text +=("Parent scope : FROM got error in main.js ::" + "line ::" + eventD.line + "::" + "message ::" + eventD.message + "::" + "name::" + eventD.name + "::" + "sourceId::" + eventD.sourceId + "::" + "sourceURL::" + eventD.sourceURL);
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