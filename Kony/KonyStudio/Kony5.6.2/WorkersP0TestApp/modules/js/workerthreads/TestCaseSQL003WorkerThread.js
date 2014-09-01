
kony.print("Worker Scope: Init ");

timer_init();

function timer_init() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer122";
    var i = 0;
    
    
    function timerFunc() {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFunc() : " + i);
        if (i > 300) {
            kony.print("Worker Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
        } else {
            sql_consumer_func();
            
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc, 1, true);
    kony.print("Worker Scope :- kony.timer.schedule - Done");
};


function sql_consumer_func() {
    
    createDBW2();
    
    function createDBW2() {
        kony.print("Worker Scope : createDBW2");
        webSQLFlag = 1;
        baseObjectIdw2 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelect();
    }
    
    function success_sqlSelect(transactionId, resultset) {
        kony.print("Worker Scope : success_sqlSelect");
        if (resultset != null) {
            var numResults = resultset.rows.length;
            for (var i = 0; i <= numResults - 1; i++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                kony.print("Worker Scope : EMP ID ::" + rowItem.empid.toString());
                kony.print("Worker Scope : EMP NAME ::" + rowItem.empname);
                kony.print("Worker Scope : EMP DEPT ::" + rowItem.depid.toString());
            };
        }
    }
    
    function commonErrorCallback(transactionId, error) {
        kony.print("Worker Scope :  commonErrorCallback: Error code:: " + error);
        kony.print("Worker Scope :  commonErrorCallback: Error message:: " + error.message);
    }
    
    function commonVoidcallback() {
        kony.print("Worker Scope : commonVoidcallback: The transaction was executed successfully.");
    }
    
    function sqlSelect(transactionID) {
        kony.print("Worker Scope : transactionID");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect, commonErrorCallback);
        } catch (err) {
            kony.print("Worker Scope : transactionID: error while selecting " + err);
        }
    }
    
    function doTransactionsqlSelect() {
        kony.print("Worker Scope : doTransactionsqlSelect");
        try {
            kony.db.transaction(baseObjectIdw2, sqlSelect, commonErrorCallback, commonVoidcallback);
        } catch (err) {
            kony.print("Worker Scope : doTransactionsqlSelect: error in  select transaction" + err);
        }
    }
};



