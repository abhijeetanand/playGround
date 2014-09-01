kony.print("Worker Scope:WT6 Init ");
timer_init_WT6();

function timer_init_WT6() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer126";
    var i = 0;

    function timerFunc_WT6() {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFunc_WT6() : " + i);
        if (i > 300) {
            kony.print("Worker Scope :- kony.timer.cancel : ");
            postMessage("Worker Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
            self.close();
        } else {
            sql_consumer_func_WT6();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc_WT6, 1, true);
    kony.print("Worker Scope :- kony.timer.schedule - Done");
};

function sql_consumer_func_WT6() {
    createDBW2_WT6();

    function createDBW2_WT6() {
        kony.print("Worker Scope : sql_consumer_func_WT6 : createDBW2_WT6");
        webSQLFlag = 1;
        baseObjectIdw2_WT6 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelect_WT6();
    }

    function success_dropTable_WT6(transactionId, resultset) {
        kony.print("Worker Scope : sql_producer_func : success_dropTable_WT6: Table was dropped");
    }

    function success_sqlSelect_WT6(transactionId, resultset) {
        kony.print("Worker Scope : sql_consumer_func_WT6 : success_sqlSelect_WT6");
        if (resultset != null) {
            var numResults = resultset.rows.length;
            for (var i = 0; i <= numResults - 1; i++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                kony.print("Worker Scope : sql_consumer_func_WT6 : EMP ID ::" + rowItem.empid.toString());
                kony.print("Worker Scope : sql_consumer_func_WT6 : EMP NAME ::" + rowItem.empname);
                kony.print("Worker Scope : sql_consumer_func_WT6 : EMP DEPT ::" + rowItem.depid.toString());
                postMessage("EMPID=" + rowItem.empid);
            };
        }
        //finally drop the table
        var sqlStatement = "DROP TABLE IF EXISTS emp_details";
        kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable_WT6, commonErrorCallback);
    }

    function commonErrorCallback_WT6(transactionId, error) {
        kony.print("Worker Scope :  sql_consumer_func_WT6 : commonErrorCallback_WT6: Error code:: " + error);
        kony.print("Worker Scope :  sql_consumer_func_WT6 : commonErrorCallback_WT6: Error message:: " + error.message);
    }

    function commonVoidcallback_WT6() {
        kony.print("Worker Scope : sql_consumer_func_WT6 : commonVoidcallback_WT6: The transaction was executed successfully.");
    }

    function sqlSelect_WT6(transactionID) {
        kony.print("Worker Scope : sql_consumer_func_WT6 : transactionID");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect_WT6, commonErrorCallback_WT6);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func_WT6 : transactionID: error while selecting " + err);
        }
    }

    function doTransactionsqlSelect_WT6() {
        kony.print("Worker Scope : sql_consumer_func_WT6 : doTransactionsqlSelect_WT6");
        try {
            kony.db.transaction(baseObjectIdw2_WT6, sqlSelect_WT6, commonErrorCallback_WT6, commonVoidcallback_WT6);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func_WT6 : doTransactionsqlSelect_WT6: error in  select transaction" + err);
        }
    }
};