var wrkr1 = null;
var Test;
var baseObjectIdWT2;
var insertionCountWT2=0;
kony.print("Worker Scope: Init ");

//invoke 
sql_producer_func_PWT2();
startWorkerWT2() ;

//
function onmessagechildWT2(event) {
    kony.print("Worker Scope: got response from the server with data :: " + event.data);
};

addEventListener("message", onmessagechildWT2);

//
function ommessageparent1WT2(eventData) {
    postMessage(eventData.data);
}

function onerrorparent1WT2(eventD) {
    kony.print("Worker Scope: got error in worker.js ::" + "line ::" + eventD.line + "::" + "message ::" + eventD.message + "::" + "name::" + eventD.name + "::" + "sourceId::" + eventD.sourceId + "::" + "sourceURL::" + eventD.sourceURL);
}

function startWorkerWT2() {
	kony.print("Worker Scope: startWorkerWT2 ");
    wrkr1 = new kony.worker.WorkerThread("TestCaseSQL002WorkerThread2.js");
    wrkr1.addEventListener("message", ommessageparent1WT2);
    wrkr1.addEventListener("error", onerrorparent1WT2);
    wrkr1.postMessage("WORKER");
}



function sql_producer_func_PWT2() { 

createDBWT2();

function commonErrorCallback_PWT2(transactionId, error) {
    kony.print("Worker Scope: commonErrorCallback_PWT2 : Error code:: " + error);
    kony.print("Worker Scope: commonErrorCallback_PWT2 : Error message:: " + error.message);
}

function commonVoidcallback_PWT2() {
    kony.print("Worker Scope: commonVoidcallback_PWT2 : The transaction was executed successfully.");
}

function success_createTable_PWT2(transactionId, resultset) {
    kony.print("Worker Scope: success_createTable_PWT2 : Table Created from Worker");
}

function success_dropTable_PWT2(transactionId, resultset) {
    kony.print("Worker Scope: success_dropTable_PWT2 : Table was dropped");
}

function createTable_PWT2(transactionID) {
    kony.print("Worker Scope: createTable_PWT2 ");
    var sqlStatement = "DROP TABLE IF EXISTS emp_details";
    kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable_PWT2, commonErrorCallback_PWT2);
    var sqlStatement = "CREATE TABLE IF NOT EXISTS emp_details (empid REAL PRIMARY KEY,empname TEXT,depid REAL)";
    kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PWT2, commonErrorCallback_PWT2);
    var insertTable = [
        ["George", 10],
        ["John", 10],
        ["Thomas", 20],
        ["James", 20],
        ["James", 30],
        ["George", 10],
        ["John", 10],
        ["Thomas", 20],
        ["James", 20],
        ["James", 30]
    ];
    var count = 0;
    for (var i = 1;
    ((insertTable) != null) && i <= insertTable.length; i++) {
        var v = insertTable[kony.decrement(i)];
        var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"" + v[kony.decrement(1)] + "\"," + v[kony.decrement(2)] + ")";
        count = count + 1;
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PWT2, commonErrorCallback_PWT2);
    }
    for (var i = 0; i < 4000; i++) {
        count++;
        var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"EMP1\"," + 200 + ")";
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PWT2, commonErrorCallback_PWT2);
		if (i == 3999)
            {
			           
                insertionCountWT2++;
				postMessage("4000 Emp_Details Inserted @" + insertionCountWT2 +"times" );
            }
    }
}

function createDBWT2() {
    kony.print("Worker Scope: createDBWT2 ");
    baseObjectIdWT2 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
    kony.db.transaction(baseObjectIdWT2, createTable_PWT2, commonErrorCallback_PWT2, commonVoidcallback_PWT2);
}

};