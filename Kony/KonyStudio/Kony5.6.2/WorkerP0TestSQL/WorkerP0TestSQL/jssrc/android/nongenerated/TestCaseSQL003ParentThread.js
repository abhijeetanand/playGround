///header			
app_global_context["registerFunc"]("SQL: kony.db. - 3", test_case_sql_parent_thread_3, "sql");
var insertionCountPTthr = 0;
////function follows		
function test_case_sql_parent_thread_3() {
    // Parent : Producer - ontimer sql inserts by dropping table - 30 records approx
    // Worker : Consumer - ontimer sql read
    function onmessageWT3(eventData) {
        frmSQL.lbl2.text += eventData.data + '\n';
    }
    try {
        kony.print("Parent Scope: Init test_case_parent_thread_3()");
        var worker = new kony.worker.WorkerThread('TestCaseSQL003WorkerThread.js');
        worker.addEventListener("message", onmessageWT3);
        //worker.addEventListener("message", function(event) {frmSQL.lbl2.text +='\nPS:WS1:' + event.data;});
        timer_init_PT3();
        kony.print("Parent Scope: Exit test_case_parent_thread()");
    } catch (err) {
        kony.print("Parent Scope: In Catch block");
    }
};

function timer_init_PT3() {
    kony.print("Parent Scope :- kony.timer.schedule - ");
    var timerId = "mytimer12563";
    var i = 0;

    function timerFunc_PT3() {
        i++;
        kony.print("Parent Scope :- kony.timer.schedule - In timerFunc_PT3() : " + i);
        if (i > 25) {
            kony.print("Parent Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
            postMessage("Parent Scope :- kony.timer.cancel :");
        } else {
            sql_producer_func_PT3();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc_PT3, 1, true);
    kony.print("Parent Scope :- kony.timer.schedule - Done");
};

function sql_producer_func_PT3() {
    function commonErrorCallback_PT3(transactionId, error) {
        kony.print("Parent Scope : sql_producer_func_PT3 : callbackScheduleRepeatW1");
        kony.print("Parent Scope : sql_producer_func_PT3 : callbackScheduleRepeatW1: Error code:: " /*+ error*/ );
        kony.print("Parent Scope : sql_producer_func_PT3 : callbackScheduleRepeatW1: Error message:: " /*+ error.message*/ );
    }

    function commonVoidcallback_PT3() {
        kony.print("Parent Scope : sql_producer_func_PT3 : commonVoidcallback_PT3 : The transaction was executed successfully.");
    }

    function success_createTable_PT3(transactionId, resultset) {
        kony.print("Parent Scope : sql_producer_func_PT3 : success_createTable_PT3: Table Created ");
    }

    function success_dropTable_PT3(transactionId, resultset) {
        kony.print("Parent Scope : sql_producer_func_PT3 : success_dropTable_PT3: Table was dropped");
    }

    function createTable_PT3(transactionID) {
        kony.print("Parent Scope : sql_producer_func_PT3 : createTable_PT3");
        var sqlStatement = "DROP TABLE IF EXISTS emp_details";
        kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable_PT3, commonErrorCallback_PT3);
        var sqlStatement = "CREATE TABLE IF NOT EXISTS emp_details (empid REAL PRIMARY KEY,empname TEXT,depid REAL)";
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT3, commonErrorCallback_PT3);
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
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT3, commonErrorCallback_PT3);
        }
        //
        for (var i = 0; i < 10; i++) {
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"EMP1\"," + 200 + ")";
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT3, commonErrorCallback_PT3);
            count++;
            if (i == 9) {
                insertionCountPTthr++;
                //postMessage("10 Emp_Details Inserted @" + insertionCount +"times" );
                frmSQL.lbl1.text += "\nrecords inserted @" + insertionCountPTthr + "times";
            }
        }
    };

    function createDB_PT3() {
        kony.print("Parent Scope : sql_producer_func_PT3 : createDB_PT3");
        webSQLFlag = 1;
        baseObjectIdPtThree = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        kony.db.transaction(baseObjectIdPtThree, createTable_PT3, commonErrorCallback_PT3, commonVoidcallback_PT3);
    }
    createDB_PT3();
};