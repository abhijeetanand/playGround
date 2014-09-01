var getRecordsCountWTfourTwo = 0;
kony.print("Worker2 Scope: Init ");
timer_init_WT42();

function timer_init_WT42() {
    kony.print("Worker2 Scope :- kony.timer.schedule - ");
    var timerId = "mytimer12245";
    var i = 0;

    function timerFunc_WT42() {
        i++;
        kony.print("Worker2 Scope :- kony.timer.schedule - In timerFunc_WT42() : " + i);
        if (i > 300) {
            kony.print("Worker2 Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
            self.close();
        } else {
            sql_consumer_func_WT42();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc_WT42, 1, true);
    kony.print("Worker2 Scope :- kony.timer.schedule - Done");
};

function sql_consumer_func_WT42() {
    createDBW2_WT42();

    function createDBW2_WT42() {
        kony.print("Worker2 Scope : sql_consumer_func_WT42: createDBW2");
        webSQLFlag = 1;
        baseObjectIdw2_WT42 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelect_WT42();
    }

    function success_sqlSelect_WT42(transactionId, resultset) {
        kony.print("Worker2 Scope : sql_consumer_func_WT42: success_sqlSelect_WT42");
        if (resultset != null) {
            var numResults = resultset.rows.length;
            for (var i = 0, j = 1000, counter = 0; i <= numResults - 1; i++, j++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                kony.print("Worker2 Scope : sql_consumer_func_WT42: EMP ID ::" + rowItem.empid.toString());
                kony.print("Worker2 Scope : sql_consumer_func_WT42: EMP NAME ::" + rowItem.empname);
                kony.print("Worker2 Scope : sql_consumer_func_WT42: EMP DEPT ::" + rowItem.depid.toString());
                postMessage("EMPID=" + rowItem.empid)
                if (j == rowItem.empid) {
                    counter++;
                    //postMessage("EMPID=" + rowItem.empid)
                }
                kony.print("counterValue=" + counter + "i value" + i);
                if (i == 4009 && counter == 4010) {
                    //postMessage("counter Value=" + counter);
                    getRecordsCountWTfourTwo++;
                    postMessage("4010 Emp_records consumed @" + getRecordsCountWTfourTwo + " times");
                    kony.print("4010 Emp_records consumed @" + getRecordsCountWTfourTwo + " times");
                    //postMessage("i Value EMPID=" + rowItem.empid)
                }
            };
        }
    }

    function commonErrorCallback_WT42(transactionId, error) {
        kony.print("Worker2 Scope :  sql_consumer_func_WT42: commonErrorCallback_WT42: Error code:: " + error);
        kony.print("Worker2 Scope :  sql_consumer_func_WT42: commonErrorCallback_WT42: Error message:: " + error.message);
    }

    function commonVoidcallback_WT42() {
        kony.print("Worker2 Scope : sql_consumer_func_WT42: commonVoidcallback_WT42: The transaction was executed successfully.");
    }

    function sqlSelect_WT42(transactionID) {
        kony.print("Worker2 Scope : sql_consumer_func_WT42: transactionID");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect_WT42, commonErrorCallback_WT42);
        } catch (err) {
            kony.print("Worker2 Scope : sql_consumer_func_WT42: transactionID: error while selecting " + err);
        }
    }

    function doTransactionsqlSelect_WT42() {
        kony.print("Worker2 Scope : sql_consumer_func_WT42: doTransactionsqlSelect_WT42");
        try {
            kony.db.transaction(baseObjectIdw2_WT42, sqlSelect_WT42, commonErrorCallback_WT42, commonVoidcallback_WT42);
        } catch (err) {
            kony.print("Worker2 Scope : sql_consumer_func_WT42: doTransactionsqlSelect_WT42: error in  select transaction" + err);
        }
    }
};