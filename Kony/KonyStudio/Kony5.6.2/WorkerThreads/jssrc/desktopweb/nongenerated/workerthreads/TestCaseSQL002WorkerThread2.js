var baseObjectIdw2;
var Test;
kony.print("Worker2 Scope : Init ");

function onmessagechild1(event) {
    kony.print("Worker2 Scope : got response from the worker with data :: " + event.data);
};

function onerrorworker(eventD) {
    kony.print("Worker2 Scope : got error in worker1.js ::" + "line ::" + eventD.line + "::" + "message ::" + eventD.message + "::" + "name::" + eventD.name + "::" + "sourceId::" + eventD.sourceId + "::" + "sourceURL::" + eventD.sourceURL);
}
addEventListener("message", onmessagechild1);
addEventListener("error", onerrorworker);
//
sql_consumer_func();
//
function sql_consumer_func() {
    createDBW2();

    function createDBW2() {
        kony.print("Worker2 Scope : createDBW2");
        baseObjectIdw2 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelect();
    }

    function success_sqlSelect(transactionId, resultset) {
        kony.print("Worker2 Scope : success_sqlSelect");
        if (resultset != null) {
            var numResults = resultset.rows.length;
            for (var i = 0; i <= numResults - 1; i++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                kony.print("Worker2 Scope : success_sqlSelect : EMP ID ::" + rowItem.empid.toString());
                kony.print("Worker2 Scope : success_sqlSelect : EMP NAME ::" + rowItem.empname);
                kony.print("Worker2 Scope : success_sqlSelect : EMP DEPT ::" + rowItem.depid.toString());
            };
        }
    }

    function commonErrorCallback(transactionId, error) {
        kony.print("Worker2 Scope : commonErrorCallback: ");
    }

    function commonVoidcallback() {
        kony.print("Worker2 Scope : commonVoidcallback : The transaction was executed successfully.");
    }

    function sqlSelect(transactionID) {
        kony.print("Worker2 Scope : sqlSelect");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect, commonErrorCallback);
        } catch (err) {
            kony.print("Worker2 Scope : sqlSelect :  error while selecting " + err);
        }
    }

    function doTransactionsqlSelect() {
        kony.print("Worker2 Scope : doTransactionsqlSelect");
        try {
            kony.db.transaction(baseObjectIdw2, sqlSelect, commonErrorCallback, commonVoidcallback);
        } catch (err) {
            kony.print("Worker2 Scope : doTransactionsqlSelect: error in  select transaction" + err);
        }
    }
};