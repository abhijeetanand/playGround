///header			
app_global_context["registerFunc"]("SQL: kony.db. - 5", test_case_sql_parent_thread_5, "sql");
var insertionCountPTfive = 0;
////function follows			
function test_case_sql_parent_thread_5() {
    // Parent : Producer - ontimer sql inserts if table not present - 30 records approx
    // Worker : Consumer - ontimer sql read and drops table
    try {
        kony.print("Parent Scope: Init test_case_parent_thread_5()");
        var worker = new kony.worker.WorkerThread('TestCaseSQL005WorkerThread.js');
        worker.addEventListener("message", function(event) {
            frmSQL.lbl2.text += '\n' + event.data
        });
        timer_init_PT5();
        kony.print("Parent Scope: Exit test_case_parent_thread()");
    } catch (err) {
        kony.print("Parent Scope: In Catch block");
    }
};

function timer_init_PT5() {
    kony.print("Parent Scope :- kony.timer.schedule - ");
    var timerId = "mytimer12565";
    var i = 0;

    function timerFunc_PT5() {
        i++;
        kony.print("Parent Scope :- kony.timer.schedule - In timerFunc_PT5() : " + i);
        if (i > 300) {
            kony.print("Parent Scope :- kony.timer.cancel : ");
            postMessage("Parent Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
        } else {
            sql_producer_func_PT5();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc_PT5, 1, true);
    kony.print("Parent Scope :- kony.timer.schedule - Done");
};

function sql_producer_func_PT5() {
    function commonErrorCallback_PT5(transactionId, error) {
        kony.print("Parent Scope : sql_producer_func_PT5 : callbackScheduleRepeatW1");
        kony.print("Parent Scope : sql_producer_func_PT5 : callbackScheduleRepeatW1: Error code:: " /*+ error*/ );
        kony.print("Parent Scope : sql_producer_func_PT5 : callbackScheduleRepeatW1: Error message:: " /*+ error.message*/ );
    }

    function commonVoidcallback_PT5() {
        kony.print("Parent Scope : sql_producer_func_PT5 : commonVoidcallback_PT5 : The transaction was executed successfully.");
    }

    function success_createTable_PT5(transactionId, resultset) {
        kony.print("Parent Scope : sql_producer_func_PT5 : success_createTable_PT5: Table Created from Worker");
    }

    function success_dropTable_PT5(transactionId, resultset) {
        kony.print("Parent Scope : sql_producer_func_PT5 : success_dropTable_PT5: Table was dropped");
    }

    function createTable_PT5(transactionID) {
        kony.print("Parent Scope : sql_producer_func_PT5 : createTable_PT5");
        //        var sqlStatement = "DROP TABLE IF EXISTS emp_details";
        //        kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable_PT5, commonErrorCallback_PT5);
        var sqlStatement = "CREATE TABLE IF NOT EXISTS emp_details (empid REAL PRIMARY KEY,empname TEXT,depid REAL)";
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT5, commonErrorCallback_PT5);
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
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT5, commonErrorCallback_PT5);
        }
        //
        for (var i = 0; i < 10; i++) {
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"EMP1\"," + 200 + ")";
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT5, commonErrorCallback_PT5);
            count++;
            if (i == 9) {
                insertionCountPTfive++;
                //postMessage("10 Emp_Details Inserted @" + insertionCount +"times" );
                frmSQL.lbl1.text += "\n records inserted @" + insertionCountPTfive + "times";
            }
        }
    };

    function createDB_PT5() {
        kony.print("Parent Scope : sql_producer_func_PT5 : createDB");
        webSQLFlag = 1;
        baseObjectId = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        kony.db.transaction(baseObjectId, createTable_PT5, commonErrorCallback_PT5, commonVoidcallback_PT5);
    }
    createDB_PT5();
};