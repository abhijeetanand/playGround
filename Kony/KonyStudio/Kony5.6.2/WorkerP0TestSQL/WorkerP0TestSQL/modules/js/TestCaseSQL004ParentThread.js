///header			
app_global_context["registerFunc"]("SQL: kony.db. - 4", test_case_sql_parent_thread_4, "sql");
var insertionCountPTFour=0;
////function follows			
function test_case_sql_parent_thread_4() {
    // Parent : Producer - one time sql write - 4000 records approx
    // Worker1 : Consumer1 - ontimer sql read
    // Worker2 : Consumer2 - ontimer sql read
    try {
        kony.print("Parent Scope: Init test_case_parent_thread_4()");
        var workerSQL4 = new kony.worker.WorkerThread('TestCaseSQL004WorkerThread.js');
		workerSQL4.addEventListener("message", function(event) {
		frmSQL.lbl2.text +=eventData.data +'\n';
    kony.print('Worker Scope : onmessage : event.data : ' + event.data);
    //call func
    });
        sql_producer_func_PT4();
        kony.print("Parent Scope: Exit test_case_parent_thread()");
    } catch (err) {
        kony.print("Parent Scope: In Catch block");
    }
};


function sql_producer_func_PT4() {
    function commonErrorCallback_PT4(transactionId, error) {
        kony.print("Parent Scope : sql_producer_func_PT4: callbackScheduleRepeatW1");
        kony.print("Parent Scope : sql_producer_func_PT4: callbackScheduleRepeatW1: Error code:: " /*+ error*/ );
        kony.print("Parent Scope : sql_producer_func_PT4: callbackScheduleRepeatW1: Error message:: " /*+ error.message*/ );
    }

    function commonVoidcallback_PT4() {
        kony.print("Parent Scope : sql_producer_func_PT4: commonVoidcallback_PT4 : The transaction was executed successfully.");
    }

    function success_createTable_PT4(transactionId, resultset) {
        kony.print("Parent Scope : sql_producer_func_PT4: success_createTable_PT4: Table Created from Worker");
    }

    function success_dropTable_PT4(transactionId, resultset) {
        kony.print("Parent Scope : sql_producer_func_PT4: success_dropTable_PT4: Table was dropped");
    }

    function createTable_PT4(transactionID) {
        kony.print("Parent Scope : sql_producer_func_PT4: createTable_PT4");
        var sqlStatement = "DROP TABLE IF EXISTS emp_details";
        kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable_PT4, commonErrorCallback_PT4);
        var sqlStatement = "CREATE TABLE IF NOT EXISTS emp_details (empid REAL PRIMARY KEY,empname TEXT,depid REAL)";
        kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT4, commonErrorCallback_PT4);
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
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT4, commonErrorCallback_PT4);
        }
        //
        for (var i = 0; i < 4000; i++) {
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"EMP1\"," + 200 + ")";
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable_PT4, commonErrorCallback_PT4);
			count++;
			if (i == 3999)
            {
			           
                insertionCountPTFour++;
				//postMessage("10 Emp_Details Inserted @" + insertionCount +"times" );
				frmSQL.lbl1.text += "\n records inserted @" + insertionCountPTFour +"times";

            }
        }
    };

    function createDB_PT4() {
        kony.print("Parent Scope : sql_producer_func_PT4: createDB");
        webSQLFlag = 1;
        baseObjectIdPT4 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        kony.db.transaction(baseObjectIdPT4, createTable_PT4, commonErrorCallback_PT4, commonVoidcallback_PT4);
    }
    createDB_PT4();
};