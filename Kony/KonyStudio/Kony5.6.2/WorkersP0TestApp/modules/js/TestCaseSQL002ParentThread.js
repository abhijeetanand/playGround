


///header			
app_global_context["registerFunc"]("SQL: kony.db. - 2", 
test_case_sql_parent_thread_2, "nonui");
		
////function follows			




function test_case_sql_parent_thread_2() {
                //1) 
startExec();

var wrkr;
    
kony.print("Parent scope : Init ");


function ommessageparent(eventData) {
    kony.print("Parent scope : got response from the worker with data :: " + eventData.data);
}

function onerrorparent(eventD) {
    kony.print("Parent scope : FROM got error in main.js ::" + "line ::" + eventD.line + "::" + "message ::" + eventD.message + "::" + "name::" + eventD.name + "::" + "sourceId::" + eventD.sourceId + "::" + "sourceURL::" + eventD.sourceURL);
}

function startExec() {
    wrkr = new kony.worker.WorkerThread("TestCaseSQL002WorkerThread.js");
    wrkr.addEventListener("message", ommessageparent);
    wrkr.addEventListener("onerror", onerrorparent);
    wrkr.postMessage("CREATE WORKER");
    
    startDB();
}

function startNetAsync() {
    wrkr.postMessage("NETASYNC");
}

function startNetSync() {
    wrkr.postMessage("NETSYNC");
}

function startTimer() {
    wrkr.postMessage("TIMER");
}

function closeWorkers() {
    wrkr.postMessage("CLOSE");
}

function startDB() {
    wrkr.postMessage("SQL");
}



};


            /*
             * Reference O/P : Chrome

             *  */
