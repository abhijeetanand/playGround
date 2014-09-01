var baseObjectIdw2;
var Test;
kony.print("Worker2 Scope : Init ");

function onmessagechild1(event) {
    kony.print("got response from the worker with data :: " + event.data);
    kony.print("got response from the server with data :: " + event.data);
    var varName = event.data;
    switch (varName) {
    case "NETASYNC":
        callAsyncNetCallW2();
        postMessage("------NETASYNC started in Worker1");
        break;
    case "NETSYNC":
        postMessage("------NETSYNC started in Worker1");
        callSyncNetCallW2();
        break;
    case "TIMER":
        callbackScheduleRepeatW2();
        postMessage("------TIMER started in Worker1");
        break;
    case "SQL":
        postMessage("------SQL started in Worker1");
        createDBW2();
        break;
    case "CLOSE":
        postMessage("------CLOSE in Worker1");
        self.close();
        break;
    default:
        postMessage("------Hello, " + event.data + "!");
        break;
    }
};

function onerrorworker(eventD) {
    kony.print("got error in worker1.js ::" + "line ::" + eventD.line + "::" + "message ::" + eventD.message + "::" + "name::" + eventD.name + "::" + "sourceId::" + eventD.sourceId + "::" + "sourceURL::" + eventD.sourceURL);
}
addEventListener("message", onmessagechild1);
addEventListener("onerror", onerrorworker);

function callAsyncNetCallW2() {
    try {
        // in the below service we are trying to use a service published by a services stub (of middleware qa team) placed in the server, using this if url in the above service ID not working.
        // while using below service, we have to make sure that services stub is placed in proper location (server) we are pointing to
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
        connection2 = kony.net.invokeServiceAsync(url, paramTab, callAsyncFunctionW2, info);
        kony.print(" Without cancel call");
    } catch (err) {
        //alert("error in service call" + err);
        kony.print("ERROR OCCURED" + JSON.stringify(err));
    }
}

function callAsyncFunctionW2(status, resulttable, info1) {
    kony.print("Inside service callback");
    kony.print("OPSATTUS ::" + status);
    kony.print("HTTP REQUEST ::" + JSON.stringify(resulttable["httpresponse"]));
    kony.print("***********" + JSON.stringify(info1));
    kony.print("The result table is " + JSON.stringify(resulttable));
}

function callSyncNetCallW2() {
    kony.print("invoking Net call");
    try {
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
        var result = kony.net.invokeService(url, paramTab, true);
        kony.print("RESULT ::" + JSON.stringify(result));
    } catch (err) {
        //alert("error in service call" + err);
        kony.print("ERROR OCCURED" + JSON.stringify(err));
    }
}

function timerFuncW2() {
    kony.print("timer is called");
    Test = Test + 1;
    kony.print("timer is executing in Worker1::" + Test);
}

function callbackScheduleRepeatW2() {
    Test = 0;
    kony.print("enterd shedue")
    kony.timer.schedule("timer2", timerFuncW2, 2, true);
    createDBW2();
}

function createDBW2() {
    webSQLFlag = 1;
    baseObjectIdw2 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
    doTransactionsqlSelect();
}

function success_sqlSelect(transactionId, resultset) {
    if (resultset != null) {
        var numResults = resultset.rows.length;
        for (var i = 0; i <= numResults - 1; i++) {
            var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
            kony.print("EMP ID ::" + rowItem.empid.toString());
            kony.print("EMP NAME ::" + rowItem.empname);
            kony.print("EMP DEPT ::" + rowItem.depid.toString());
        };
    }
}

function commonErrorCallback(transactionId, error) {
    kony.print(" Error code:: " + error);
    kony.print(" Error message:: " + error.message);
}

function commonVoidcallback() {
    kony.print("The transaction was executed successfully.");
}

function sqlSelect(transactionID) {
    try {
        var sqlStatement = "SELECT * FROM emp_details";
        kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect, commonErrorCallback);
    } catch (err) {
        kony.print("error while selecting " + err);
    }
}

function doTransactionsqlSelect() {
    try {
        kony.db.transaction(baseObjectIdw2, sqlSelect, commonErrorCallback, commonVoidcallback);
    } catch (err) {
        kony.print("error in  select transaction" + err);
    }
}