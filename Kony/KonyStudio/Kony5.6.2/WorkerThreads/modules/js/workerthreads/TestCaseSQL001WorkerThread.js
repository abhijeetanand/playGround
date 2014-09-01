//worker
//workers inner scope
postMessage("Worker Scope: Init");
//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
    postMessage('Worker Scope : onmessage : event.data : ' + event.data);
    //call func
    //do_something_in_worker();
});

function do_something_in_worker() {
    postMessage('Worker Scope : invoking postMessage()');
    //will invoke Parent worker.onmessage()
    postMessage({
        'message': "Hello World From Worker "
    });
};

timer_init();

function timer_init() {
    postMessage("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer121";
    var i = 0;
    
    function timerFunc() {
        i++;
       // postMessage("Worker Scope :- kony.timer.schedule - In timerFunc() : " + i);
        if (i > 300) {
            postMessage("Worker Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
            postMessage("timer counter"+ i);  //<pavan>
            self.close();
        } else {
            sql_producer_func();
            sql_consumer_func();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc, 1, true);
    postMessage("Worker Scope :- kony.timer.schedule - Done");
};

function sql_producer_func() {
    function commonErrorCallback(transactionId, error) {
        postMessage("Worker Scope : sql_producer_func :callbackScheduleRepeatW1");
        postMessage("Worker Scope : sql_producer_func :callbackScheduleRepeatW1: Error code:: " /*+ error*/ );
        postMessage("Worker Scope : sql_producer_func :callbackScheduleRepeatW1: Error message:: " /*+ error.message*/ );
    }
    
    function commonVoidcallback() {
       // postMessage("Worker Scope : sql_producer_func :commonVoidcallback : The transaction was executed successfully.");
    }
    
    function success_createTable(transactionId, resultset) {
       // postMessage("Worker Scope : sql_producer_func :success_createTable: Table Created ");
    }
    
    function success_dropTable(transactionId, resultset) {
       // postMessage("Worker Scope : sql_producer_func :success_dropTable: Table was dropped");
    }
    
    function createTable(transactionID) {
        postMessage("Worker Scope : sql_producer_func :createTable");
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
        //
        for (var i = 1;
             ((insertTable) != null) && i <= insertTable.length; i++) {
            var v = insertTable[kony.decrement(i)];
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"" + v[kony.decrement(1)] + "\"," + v[kony.decrement(2)] + ")";
            count = count + 1;
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable, commonErrorCallback);
        }
        //
        for (var i = 0; i < 3000; i++) {
            count++;
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"EMP1\"," + 200 + ")";
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable, commonErrorCallback);
        }
    };
    
    function createDB() {
        postMessage("Worker Scope : sql_producer_func :createDB");
        webSQLFlag = 1;
        baseObjectId = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        kony.db.transaction(baseObjectId, createTable, commonErrorCallback, commonVoidcallback);
    }
    createDB();
};



function sql_consumer_func() {
    createDBW2();
    
    function createDBW2() {
        postMessage("Worker Scope : sql_consumer_func: createDBW2");
        webSQLFlag = 1;
        baseObjectIdw2 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelect();
    }
    
    function success_sqlSelect(transactionId, resultset) {
        postMessage("Worker Scope : sql_consumer_func: success_sqlSelect");
        if (resultset != null) {
            var numResults = resultset.rows.length;
            for (var i = 0; i <= numResults - 1; i++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                //postMessage("Worker Scope : sql_consumer_func: EMP ID ::" + rowItem.empid.toString());
                //postMessage("Worker Scope : sql_consumer_func: EMP NAME ::" + rowItem.empname);
                //postMessage("Worker Scope : sql_consumer_func: EMP DEPT ::" + rowItem.depid.toString());
            };
        }
    }
    
    function commonErrorCallback(transactionId, error) {
        postMessage("Worker Scope :  sql_consumer_func: commonErrorCallback: Error code:: " + error);
        postMessage("Worker Scope :  sql_consumer_func: commonErrorCallback: Error message:: " + error.message);
    }
    
    function commonVoidcallback() {
       // postMessage("Worker Scope : sql_consumer_func: commonVoidcallback: The transaction was executed successfully.");
    }
    
    function sqlSelect(transactionID) {
        postMessage("Worker Scope : sql_consumer_func: transactionID");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect, commonErrorCallback);
        } catch (err) {
            postMessage("Worker Scope : sql_consumer_func: transactionID: error while selecting " + err);
        }
    }
    
    function doTransactionsqlSelect() {
        postMessage("Worker Scope : sql_consumer_func: doTransactionsqlSelect");
        try {
            kony.db.transaction(baseObjectIdw2, sqlSelect, commonErrorCallback, commonVoidcallback);
        } catch (err) {
            postMessage("Worker Scope : sql_consumer_func: doTransactionsqlSelect: error in  select transaction" + err);
        }
    }
};


postMessage("Worker Scope: Loading done");