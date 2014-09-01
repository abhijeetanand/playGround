kony.print("Worker Scope: Init ");
timer_init_WT3();
var getRecordsCountWtThree = 0;

function timer_init_WT3() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer1223";
    var i = 0;

    function timerFunc_WT3() {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFunc_WT3() : " + i);
        if (i > 25) {
            kony.print("Worker Scope :- kony.timer.cancel : ");
            postMessage("Worker Scope :- kony.timer.cancel :");
            kony.timer.cancel(timerId);
            self.close();
        } else {
            sql_consumer_func_WT3();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc_WT3, 1, true);
    kony.print("Worker Scope :- kony.timer.schedule - Done");
};

function sql_consumer_func_WT3() {
    createDBW2_WT3();

    function createDBW2_WT3() {
        kony.print("Worker Scope : sql_consumer_func_WT3 : createDBW2_WT3");
        webSQLFlag = 1;
        baseObjectIdwT3 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelect_WT3();
    }

    function success_sqlSelect_WT3(transactionId, resultset) {
        kony.print("Worker Scope : sql_consumer_func_WT3 : success_sqlSelect_WT3");
        if (resultset != null) {
            var numResults = resultset.rows.length;
            for (var i = 0, j = 1000, counter = 0; i <= numResults - 1; i++, j++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                kony.print("Worker Scope : sql_consumer_func_WT3 : EMP ID ::" + rowItem.empid.toString());
                kony.print("Worker Scope : sql_consumer_func_WT3 : EMP NAME ::" + rowItem.empname);
                kony.print("Worker Scope : sql_consumer_func_WT3 : EMP DEPT ::" + rowItem.depid.toString());
                if (j == rowItem.empid) {
                    counter++;
                }
                if (i == 19 && counter == 20) {
                    //postMessage("counter Value=" + counter);
                    getRecordsCountWtThree++;
                    postMessage("20 Emp_records consumed @" + getRecordsCountWtThree + " times");
                    //postMessage("i Value EMPID=" + rowItem.empid)
                }
            };
        }
    }

    function commonErrorCallback_WT3(transactionId, error) {
        kony.print("Worker Scope :  sql_consumer_func_WT3 : commonErrorCallback_WT3: Error code:: " + error);
        kony.print("Worker Scope :  sql_consumer_func_WT3 : commonErrorCallback_WT3: Error message:: " + error.message);
    }

    function commonVoidcallback_WT3() {
        kony.print("Worker Scope : sql_consumer_func_WT3 : commonVoidcallback_WT3: The transaction was executed successfully.");
    }

    function sqlSelect_WT3(transactionID) {
        kony.print("Worker Scope : sql_consumer_func_WT3 : transactionID");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect_WT3, commonErrorCallback_WT3);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func_WT3 : transactionID: error while selecting " + err);
        }
    }

    function doTransactionsqlSelect_WT3() {
        kony.print("Worker Scope : sql_consumer_func_WT3 : doTransactionsqlSelect_WT3");
        try {
            kony.db.transaction(baseObjectIdwT3, sqlSelect_WT3, commonErrorCallback_WT3, commonVoidcallback_WT3);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func_WT3 : doTransactionsqlSelect_WT3: error in  select transaction" + err);
        }
    }
};