var wrkr1 = null;
var Test;
var baseObjectId;
kony.print("Worker Scope: Init ");

function onmessagechild(event) {
    kony.print("Worker Scope: got response from the server with data :: " + event.data);
    var varName = event.data;
    switch (varName) {
    case "NETASYNC":
        callAsyncNetCallW1();
        wrkr1.postMessage("NETASYNC");
        postMessage("*****STARTED NETASYNC in Worker");
        break;
    case "NETSYNC":
        wrkr1.postMessage("NETSYNC");
        postMessage("*****STARTED NETSYNC in Worker");
        callSyncNetCallW1();
        break;
    case "TIMER":
        wrkr1.postMessage("TIMER");
        postMessage("*****STARTED TIMER in Worker");
        callbackScheduleRepeatW1();
        break;
    case "CREATE WORKER":
        startWorker();
        postMessage("*****STARTED Worker1 from Worker");
        break;
    case "SQL":
        wrkr1.postMessage("SQL");
        createDB();
        //wrkr1.postMessage("SQL");
        postMessage("*****SQL started from Worker");
        break;
    case "CLOSE":
        wrkr1.postMessage("CLOSE");
        postMessage("*****CLOSE in Worker");
        self.close();
        break;
    default:
        postMessage("*****Hello, " + event.data + "!");
        break;
    }
};
addEventListener("message", onmessagechild);

function ommessageparent1(eventData) {
    kony.print("Worker Scope: got response from the worker1 with data :: " + eventData.data);
}

function onerrorparent1(eventD) {
    kony.print("Worker Scope: got error in worker.js ::" + "line ::" + eventD.line + "::" + "message ::" + eventD.message + "::" + "name::" + eventD.name + "::" + "sourceId::" + eventD.sourceId + "::" + "sourceURL::" + eventD.sourceURL);
}

function startWorker() {
    wrkr1 = new kony.worker.WorkerThread("TestCaseSQL002WorkerThread2.js");
    wrkr1.addEventListener("message", ommessageparent1);
    wrkr1.addEventListener("onerror", onerrorparent1);
    wrkr1.postMessage("WORKER");
    //wrkr1.terminate();
}

function callAsyncNetCallW1() {
    kony.print("Worker Scope: invoking Net call");
    try {
        // in the below service we are trying to use a service published by a services stub (of middleware qa team) placed in the server, using this if url in the above service ID not working.
        // while using below service, we have to make sure that services stub is placed in proper location (server) we are pointing to
        var paramTab = {
            /*channel: "rc",
              serviceID: "newJSONService",
              appID: "idejsdemo"*/
        };
        //var url = "https://itunes.apple.com/search?term=apple&media=software";
        var url = "http://google.com";
        var info = {
            "firstname": "Kony",
            "lastname": "Inc"
        };
        connection2 = kony.net.invokeServiceAsync(url, paramTab, callAsyncFunctionW1, info);
        kony.print(" Without cancel call");
    } catch (err) {
        //alert("error in service call" + err);
        kony.print("ERROR OCCURED" + JSON.stringify(err));
    }
}

function callAsyncFunctionW1(status, resulttable, info1) {
    kony.print("Worker Scope: Inside service callback");
    kony.print("OPSATTUS ::" + status);
    kony.print("HTTP REQUEST ::" + JSON.stringify(resulttable["httpresponse"]));
    kony.print("***********" + JSON.stringify(info1));
    kony.print("The result table is " + JSON.stringify(resulttable));
}

function callSyncNetCallW1() {
    kony.print("invoking Net call");
    try {
        var paramTab = {
            channel: "rc",
            serviceID: "newJSONService",
            appID: "idejsdemo"
        };
        //var url = "https://itunes.apple.com/search?term=apple&media=software";
        var url = "http://google.com";
        var info = {
            "firstname": "Kony",
            "lastname": "Inc"
        };
        var result = kony.net.invokeService(url, paramTab, true);
        kony.print("RESULT ::" + JSON.stringify(result));
    } catch (err) {
        //alert("error in service call" + err);
        kony.print("ERROR OCCURED" + JSON.stringify(err));
    }
}

function timerFuncW1() {
    kony.print("timer is called");
    Test = Test + 1;
    kony.print("timer is executing i Worker::" + Test);
}

function callbackScheduleRepeatW1() {
    Test = 0;
    kony.print("enterd shedue")
    kony.timer.schedule("timer1", timerFuncW1, 2, true);
}

function commonErrorCallback(transactionId, error) {
    kony.print(" Error code:: " + error);
    kony.print(" Error message:: " + error.message);
}

function commonVoidcallback() {
    kony.print("The transaction was executed successfully.");
}

function success_createTable(transactionId, resultset) {
    kony.print("Table Created from Worker");
}

function success_dropTable(transactionId, resultset) {
    kony.print("Table was dropped");
}

function createTable(transactionID) {
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
    for (i = 1;
    ((insertTable) != null) && i <= insertTable.length; i++) {
        var v = insertTable[kony.decrement(i)];
        var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"" + v[kony.decrement(1)] + "\"," + v[kony.decrement(2)] + ")";
        count = count + 1;
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable, commonErrorCallback);
    }
    for (i = 0; i < 1000; i++) {
        count++;
        var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"UDAY\"," + 200 + ")";
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable, commonErrorCallback);
    }
}

function createDB() {
    webSQLFlag = 1;
    baseObjectId = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
    kony.db.transaction(baseObjectId, createTable, commonErrorCallback, commonVoidcallback);
}