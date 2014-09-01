kony.print("Worker Scope: Init ");
timer_init_WT7();

function timer_init_WT7() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer127";
    var i = 0;

    function timerFunc_WT7() {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFunc_WT7() : " + i);
        if (i > 300) {
            kony.print("Worker Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
            self.close();
        } else {
            sql_consumer_func_WT7();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc_WT7, 1, true);
    kony.print("Worker Scope :- kony.timer.schedule - Done");
};

function sql_consumer_func_WT7() {
    createDBW2_WT7();

    function createDBW2_WT7() {
        kony.print("Worker Scope : sql_consumer_func_WT7 : createDBW2");
        webSQLFlag = 1;
        baseObjectIdw2WT7 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelectWT7();
    }

    function success_sqlSelect_WT7(transactionId, resultset) {
        kony.print("Worker Scope : sql_consumer_func_WT7 : success_sqlSelect_WT7");
        if (resultset != null) {
            var numResults = resultset.rows.length;
            for (var i = 0; i <= numResults - 1; i++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                kony.print("Worker Scope : sql_consumer_func_WT7 : EMP ID ::" + rowItem.empid.toString());
                kony.print("Worker Scope : sql_consumer_func_WT7 : EMP NAME ::" + rowItem.empname);
                kony.print("Worker Scope : sql_consumer_func_WT7 : EMP DEPT ::" + rowItem.depid.toString());
                postMessage("empid=" + rowItem.empid);
            };
        }
    }

    function commonErrorCallback_WT7(transactionId, error) {
        kony.print("Worker Scope :  sql_consumer_func_WT7 : commonErrorCallback_WT7: Error code:: " + error);
        kony.print("Worker Scope :  sql_consumer_func_WT7 : commonErrorCallback_WT7: Error message:: " + error.message);
    }

    function commonVoidcallback_WT7() {
        kony.print("Worker Scope : sql_consumer_func_WT7 : commonVoidcallback_WT7: The transaction was executed successfully.");
    }

    function sqlSelect_WT7(transactionID) {
        kony.print("Worker Scope : sql_consumer_func_WT7 : transactionID");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect_WT7, commonErrorCallback_WT7);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func_WT7 : transactionID: error while selecting " + err);
        }
    }

    function doTransactionsqlSelectWT7() {
        kony.print("Worker Scope : sql_consumer_func_WT7 : doTransactionsqlSelectWT7");
        try {
            kony.db.transaction(baseObjectIdw2WT7, sqlSelect_WT7, commonErrorCallback_WT7, commonVoidcallback_WT7);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func_WT7 : doTransactionsqlSelectWT7: error in  select transaction" + err);
        }
    }
};