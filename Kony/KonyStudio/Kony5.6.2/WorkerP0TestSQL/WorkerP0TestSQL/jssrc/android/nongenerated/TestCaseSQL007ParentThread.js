///header			
app_global_context["registerFunc"]("SQL: kony.db. - 7", test_case_sql_parent_thread_7, "sql");
var insertionCountPTSvn = 0;
////function follows			
function test_case_sql_parent_thread_7() {
    // Parent : Producer - ontimer sql inserts by dropping table - 3000 records approx
    // Worker : Consumer - ontimer sql read
    try {
        kony.print("Parent Scope: Init test_case_parent_thread_7()");
        var workerSQL7 = new kony.workerSQL7.WorkerThread('TestCaseSQL007WorkerThread.js');
        workerSQL7.addEventListener("message", function(event) {
            frmSQL.lbl2.text += eventData.data + '\n';
            kony.print('Worker Scope : onmessage : event.data : ' + event.data);
            //call func
        });
        timer_init_PT7();
        kony.print("Parent Scope: Exit test_case_parent_thread()");
    } catch (err) {
        kony.print("Parent Scope: In Catch block");
    }
};

function timer_init_PT7() {
    kony.print("Parent Scope :- kony.timer.schedule - ");
    var timerId = "mytimer12567";
    var i = 0;

    function timerFunc_PT7() {
        i++;
        kony.print("Parent Scope :- kony.timer.schedule - In timerFunc_PT7() : " + i);
        if (i > 300) {
            kony.print("Parent Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
        } else {
            sql_producer_func_PT7();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc_PT7, 1, true);
    kony.print("Parent Scope :- kony.timer.schedule - Done");
};

function sql_producer_func_PT7() {
    function commonErrorCallback_PT7(transactionId, error) {
        kony.print("Parent Scope : sql_producer_func_PT7 : callbackScheduleRepeatW1");
        kony.print("Parent Scope : sql_producer_func_PT7 : callbackScheduleRepeatW1: Error code:: " /*+ error*/ );
        kony.print("Parent Scope : sql_producer_func_PT7 : callbackScheduleRepeatW1: Error message:: " /*+ error.message*/ );
    }

    function commonVoidcallback_PT7() {
        kony.print("Parent Scope : sql_producer_func_PT7 : commonVoidcallback_PT7 : The transaction was executed successfully.");
    }

    function success_createTable_PT7(transactionId, resultset) {
        kony.print("Parent Scope : sql_producer_func_PT7 : success_createTable_PT7: Table Created ");
    }

    function success_dropTable_PT7(transactionId, resultset) {
        kony.print("Parent Scope : sql_producer_func_PT7 : success_dropTable_PT7: Table was dropped");
    }

    function createTable_PT7(transactionID) {
        kony.print("Parent Scope : sql_producer_func_PT7 : createTable_PT7");
        var sqlStatement = "DROP TABLE IF EXISTS emp_details";
        kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable_PT7, commonErrorCallback_PT7);
        var sqlStatement = "CREATE TABLE IF NOT EXISTS emp_details (empid REAL PRIMARY KEY,empname TEXT,depid REAL)";
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT7, commonErrorCallback_PT7);
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
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT7, commonErrorCallback_PT7);
        }
        //
        for (var i = 0; i < 3000; i++) {
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"EMP1\"," + 200 + ")";
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT7, commonErrorCallback_PT7);
            count++;
            if (i == 2999) {
                insertionCountPTSvn++;
                //postMessage("10 Emp_Details Inserted @" + insertionCount +"times" );
                frmSQL.lbl1.text += "\n records inserted @" + insertionCountPTSvn + "times";
            }
        }
    };

    function createDB_PT7() {
        kony.print("Parent Scope : sql_producer_func_PT7 : createDB");
        webSQLFlag = 1;
        baseObjectId = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        kony.db.transaction(baseObjectId, createTable_PT7, commonErrorCallback_PT7, commonVoidcallback_PT7);
    }
    createDB_PT7();
};