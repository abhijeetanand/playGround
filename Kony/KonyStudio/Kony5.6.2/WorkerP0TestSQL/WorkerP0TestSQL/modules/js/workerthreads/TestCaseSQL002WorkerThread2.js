var baseObjectIdwt21;
var Test;
kony.print("Worker2 Scope : Init ");

function onmessagechild1WT21(event) {
    kony.print("Worker2 Scope : got response from the worker with data :: " + event.data);
	};

function onerrorworkerWT21(eventD) {
    kony.print("Worker2 Scope : got error in worker1.js ::" + "line ::" + eventD.line + "::" + "message ::" + eventD.message + "::" + "name::" + eventD.name + "::" + "sourceId::" + eventD.sourceId + "::" + "sourceURL::" + eventD.sourceURL);
   
}
addEventListener("message", onmessagechild1WT21);
addEventListener("error", onerrorworkerWT21);

//
sql_consumer_func_CWT2();

//
function sql_consumer_func_CWT2() {

createDBWT21();

function createDBWT21() {
        kony.print("Worker2 Scope : createDBWT21");
    baseObjectIdwt21 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
    doTransactionsqlSelectWT21();
}

function success_sqlSelect_CWT2(transactionId, resultset) {
        kony.print("Worker2 Scope : success_sqlSelect_CWT2");
    if (resultset != null) {
        var numResults = resultset.rows.length;
        for (var i = 0; i <= numResults - 1; i++) {
            var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
            kony.print("Worker2 Scope : success_sqlSelect_CWT2 : EMP ID ::" + rowItem.empid.toString());
            kony.print("Worker2 Scope : success_sqlSelect_CWT2 : EMP NAME ::" + rowItem.empname);
            kony.print("Worker2 Scope : success_sqlSelect_CWT2 : EMP DEPT ::" + rowItem.depid.toString());
			if(i%100 == 0)
			{
			postMessage("EMPID=" + rowItem.empid)
			}
			
        };
    }
}

function commonErrorCallback_CWT2(transactionId, error) {
    kony.print("Worker2 Scope : commonErrorCallback_CWT2: ");
}

function commonVoidcallback_CWT2() {
    kony.print("Worker2 Scope : commonVoidcallback_CWT2 : The transaction was executed successfully.");
}

function sqlSelectWT2(transactionID) {
        kony.print("Worker2 Scope : sqlSelectWT2");
    try {
        var sqlStatement = "SELECT * FROM emp_details";
        kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect_CWT2, commonErrorCallback_CWT2);
    } catch (err) {
        kony.print("Worker2 Scope : sqlSelectWT2 :  error while selecting " + err);
    }
}

function doTransactionsqlSelectWT21() {
        kony.print("Worker2 Scope : doTransactionsqlSelectWT21");
    try {
        kony.db.transaction(baseObjectIdwt21, sqlSelectWT2, commonErrorCallback_CWT2, commonVoidcallback_CWT2);
    } catch (err) {
        kony.print("Worker2 Scope : doTransactionsqlSelectWT21: error in  select transaction" + err);
    }
}

};
