var insertionCount = 0;
var getRecordsCount = 0;
postMessage("Worker Scope: Init");
//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
    kony.print('Worker Scope : onmessage : event.data : ' + event.data);
    //call func
    do_something_in_worker_WT1();
});

function do_something_in_worker_WT1() {
    kony.print('Worker Scope : invoking postMessage()');
    //will invoke Parent worker.onmessage()
    postMessage({
        'message': "Hello World From Worker "
    });
};
timer_init_WT1();

function timer_init_WT1() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer121";
    var i = 0;

    function timerFuncWT1() {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFuncWT1() : " + i);
        if (i > 300) {
            kony.print("Worker Scope :- kony.timer.cancel : ");
            postMessage({
                'message': "Worker Scope :- kony.timer.cancel : "
            });
            kony.timer.cancel(timerId);
            self.close();
        } else {
            sql_producer_func_WT1();
            sql_consumer_func_WT1();
        }
    };
    //
    kony.timer.schedule(timerId, timerFuncWT1, 1, true);
    kony.print("Worker Scope :- kony.timer.schedule - Done");
};

function sql_producer_func_WT1() {
    function commonErrorCallback_PWT1(transactionId, error) {
        kony.print("Worker Scope : sql_producer_func_WT1 :callbackScheduleRepeatW1");
        kony.print("Worker Scope : sql_producer_func_WT1 :callbackScheduleRepeatW1: Error code:: " /*+ error*/ );
        kony.print("Worker Scope : sql_producer_func_WT1 :callbackScheduleRepeatW1: Error message:: " /*+ error.message*/ );
    }

    function commonVoidcallback_PWT1() {
        kony.print("Worker Scope : sql_producer_func_WT1 :commonVoidcallback_PWT1 : The transaction was executed successfully.");
    }

    function success_createTable_PWT1(transactionId, resultset) {
        kony.print("Worker Scope : sql_producer_func_WT1 :success_createTable_PWT1: Table Created ");
    }

    function success_dropTable_PWT1(transactionId, resultset) {
        kony.print("Worker Scope : sql_producer_func_WT1 :success_dropTable_PWT1: Table was dropped");
    }

    function createTableWT1(transactionID) {
        kony.print("Worker Scope : sql_producer_func_WT1 :createTableWT1");
        var sqlStatement = "DROP TABLE IF EXISTS emp_details";
        kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable_PWT1, commonErrorCallback_PWT1);
        var sqlStatement = "CREATE TABLE IF NOT EXISTS emp_details (empid REAL PRIMARY KEY,empname TEXT,depid REAL)";
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PWT1, commonErrorCallback_PWT1);
        var insertTableWT1 = [
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
        ((insertTableWT1) != null) && i <= insertTableWT1.length; i++) {
            var v = insertTableWT1[kony.decrement(i)];
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"" + v[kony.decrement(1)] + "\"," + v[kony.decrement(2)] + ")";
            count = count + 1;
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PWT1, commonErrorCallback_PWT1);
        }
        //
        for (var i = 0; i < 3000; i++) {
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"EMP1\"," + 200 + ")";
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PWT1, commonErrorCallback_PWT1);
            count++;
            if (i == 2999) {
                insertionCount++;
                postMessage("3000 Emp_Details Inserted @" + insertionCount + "times");
            }
        }
    };

    function createDBWT1() {
        kony.print("Worker Scope : sql_producer_func_WT1 :createDBWT1");
        webSQLFlag = 1;
        baseObjectId = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        kony.db.transaction(baseObjectId, createTableWT1, commonErrorCallback_PWT1, commonVoidcallback_PWT1);
    }
    createDBWT1();
};

function sql_consumer_func_WT1() {
    createDBWT1W2();

    function createDBWT1W2() {
        kony.print("Worker Scope : sql_consumer_func_WT1: createDBWT1W2");
        webSQLFlag = 1;
        baseObjectIdw2 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelectWT1();
    }

    function success_sqlSelectWT1_WT1(transactionId, resultset) {
        kony.print("Worker Scope : sql_consumer_func_WT1: success_sqlSelectWT1_WT1");
        if (resultset != null) {
            var numResults = resultset.rows.length;
            for (var i = 0, j = 1000, counter = 0; i <= numResults - 1; i++, j++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                // kony.print("Worker Scope : sql_consumer_func_WT1: EMP ID ::" + rowItem.empid.toString());
                // kony.print("Worker Scope : sql_consumer_func_WT1: EMP NAME ::" + rowItem.empname);
                // kony.print("Worker Scope : sql_consumer_func_WT1: EMP DEPT ::" + rowItem.depid.toString());
                //postMessage("Number of Results" + numResults);
                if (j == rowItem.empid) {
                    counter++;
                    //postMessage("EMPID=" + rowItem.empid)
                }
                if (i == 2999 && counter == 3000) {
                    //postMessage("counter Value=" + counter);
                    getRecordsCount++;
                    postMessage("3000 Emp_records consumed @" + getRecordsCount + " times");
                    //postMessage("i Value EMPID=" + rowItem.empid)
                }
            };
        }
    }

    function commonErrorCallback_CWT1(transactionId, error) {
        kony.print("Worker Scope :  sql_consumer_func_WT1: commonErrorCallback_CWT1: Error code:: " + error);
        kony.print("Worker Scope :  sql_consumer_func_WT1: commonErrorCallback_CWT1: Error message:: " + error.message);
    }

    function commonVoidcallback_CWT1() {
        kony.print("Worker Scope : sql_consumer_func_WT1: commonVoidcallback_CWT1: The transaction was executed successfully.");
    }

    function sqlSelectWT1(transactionID) {
        kony.print("Worker Scope : sql_consumer_func_WT1: transactionID");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelectWT1_WT1, commonErrorCallback_CWT1);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func_WT1: transactionID: error while selecting " + err);
        }
    }

    function doTransactionsqlSelectWT1() {
        kony.print("Worker Scope : sql_consumer_func_WT1: doTransactionsqlSelectWT1");
        try {
            kony.db.transaction(baseObjectIdw2, sqlSelectWT1, commonErrorCallback_CWT1, commonVoidcallback_CWT1);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func_WT1: doTransactionsqlSelectWT1: error in  select transaction" + err);
        }
    }
};
kony.print("Worker Scope: Loading done");