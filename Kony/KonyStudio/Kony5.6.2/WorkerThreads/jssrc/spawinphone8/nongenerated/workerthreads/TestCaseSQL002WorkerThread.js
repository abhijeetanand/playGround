var wrkr1 = null;
var Test;
var baseObjectId;
kony.print("Worker Scope: Init ");
//invoke 
sql_producer_func();
startWorker();
//
function onmessagechild(event) {
    kony.print("Worker Scope: got response from the server with data :: " + event.data);
};
addEventListener("message", onmessagechild);
//
function ommessageparent1(eventData) {
    kony.print("Worker Scope: got response from the worker1 with data :: " + eventData.data);
}

function onerrorparent1(eventD) {
    kony.print("Worker Scope: got error in worker.js ::" + "line ::" + eventD.line + "::" + "message ::" + eventD.message + "::" + "name::" + eventD.name + "::" + "sourceId::" + eventD.sourceId + "::" + "sourceURL::" + eventD.sourceURL);
}

function startWorker() {
    kony.print("Worker Scope: startWorker ");
    wrkr1 = new kony.worker.WorkerThread("TestCaseSQL002WorkerThread2.js");
    wrkr1.addEventListener("message", ommessageparent1);
    wrkr1.addEventListener("error", onerrorparent1);
    wrkr1.postMessage("WORKER");
}

function sql_producer_func() {
    createDB();

    function commonErrorCallback(transactionId, error) {
        kony.print("Worker Scope: commonErrorCallback : Error code:: " + error);
        kony.print("Worker Scope: commonErrorCallback : Error message:: " + error.message);
    }

    function commonVoidcallback() {
        kony.print("Worker Scope: commonVoidcallback : The transaction was executed successfully.");
    }

    function success_createTable(transactionId, resultset) {
        kony.print("Worker Scope: success_createTable : Table Created from Worker");
    }

    function success_dropTable(transactionId, resultset) {
        kony.print("Worker Scope: success_dropTable : Table was dropped");
    }

    function createTable(transactionID) {
        kony.print("Worker Scope: createTable ");
        var sqlStatement = "DROP TABLE IF EXISTS emp_details";
        kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable, commonErrorCallback);
        var sqlStatement = "CREATE TABLE IF NOT EXISTS emp_details (empid REAL PRIMARY KEY,empname TEXT,depid REAL)";
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable, commonErrorCallback);
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
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable, commonErrorCallback);
        }
        for (var i = 0; i < 4000; i++) {
            count++;
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"EMP1\"," + 200 + ")";
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable, commonErrorCallback);
        }
    }

    function createDB() {
        kony.print("Worker Scope: createDB ");
        baseObjectId = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        kony.db.transaction(baseObjectId, createTable, commonErrorCallback, commonVoidcallback);
    }
};