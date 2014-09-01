///header			
app_global_context["registerFunc"]("SQL: kony.db. - 6", test_case_sql_parent_thread_6, "sql");
////function follows
var insertionCountPTsix=0;			
function test_case_sql_parent_thread_6() {
    // Producer - ontimer sql inserts if table not present - 3000 records approx
    // Consumer - ontimer sql read and drops table
    try {
        kony.print("Parent Scope:PT6 Init test_case_parent_thread_6()");
        var workerPT6 = new kony.workerPT6.WorkerThread('TestCaseSQL006WorkerThread.js');
        workerPT6.addEventListener("message", function(event){frmSQL.lbl2.text +='\n'+event.data});
        timer_init_PT6();
        kony.print("Parent Scope: Exit test_case_parent_thread()");
    } catch (err) {
        kony.print("Parent Scope: In Catch block");
    }
};

function timer_init_PT6() {
    kony.print("Parent Scope :- kony.timer.schedule - ");
    var timerId = "mytimer12566";
    var i = 0;

    function timerFunc_PT6() {
        i++;
        kony.print("Parent Scope :- kony.timer.schedule - In timerFunc_PT6() : " + i);
        if (i > 300) {
            kony.print("Parent Scope :- kony.timer.cancel : ");
            frmSQL.lbl1.text +="\n Parent Scope :- kony.timer.cancel :";
            kony.timer.cancel(timerId);
        } else {
            sql_producer_func_WT6();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc_PT6, 1, true);
    kony.print("Parent Scope :- kony.timer.schedule - Done");
};

function sql_producer_func_WT6() {
    function commonErrorCallback_PT6(transactionId, error) {
        kony.print("Parent Scope : sql_producer_func_WT6 : callbackScheduleRepeatW1");
        kony.print("Parent Scope : sql_producer_func_WT6 : callbackScheduleRepeatW1: Error code:: " /*+ error*/ );
        kony.print("Parent Scope : sql_producer_func_WT6 : callbackScheduleRepeatW1: Error message:: " /*+ error.message*/ );
    }

    function commonVoidcallback_PT6() {
        kony.print("Parent Scope : sql_producer_func_WT6 : commonVoidcallback_PT6 : The transaction was executed successfully.");
    }

    function success_createTable_PT6_PT6(transactionId, resultset) {
        kony.print("Parent Scope : sql_producer_func_WT6 : success_createTable_PT6_PT6: Table Created from Worker");
    }

    function success_dropTable_PT6(transactionId, resultset) {
        kony.print("Parent Scope : sql_producer_func_WT6 : success_dropTable_PT6: Table was dropped");
    }

    function createTable_PT6(transactionID) {
        kony.print("Parent Scope : sql_producer_func_WT6 : createTable_PT6");
//        var sqlStatement = "DROP TABLE IF EXISTS emp_details";
//        kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable_PT6, commonErrorCallback_PT6);
        var sqlStatement = "CREATE TABLE IF NOT EXISTS emp_details (empid REAL PRIMARY KEY,empname TEXT,depid REAL)";
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT6_PT6, commonErrorCallback_PT6);
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
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT6_PT6, commonErrorCallback_PT6);
        }
        //
        for (var i = 0; i < 3000; i++) {
            
           	var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"EMP1\"," + 200 + ")";
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT6_PT6, commonErrorCallback_PT6);
            count++;
            if (i == 2999)
            {
			           
                insertionCountPTsix++;
				//postMessage("10 Emp_Details Inserted @" + insertionCount +"times" );
				frmSQL.lbl1.text += "\n records inserted @" + insertionCountPTsix +"times";

            }
        }
    };

    function createDB_PT6() {
        kony.print("Parent Scope : sql_producer_func_WT6 : createDB");
        webSQLFlag = 1;
        baseObjectIdPT6 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        kony.db.transaction(baseObjectIdPT6, createTable_PT6, commonErrorCallback_PT6, commonVoidcallback_PT6);
    }
    createDB_PT6();
};