

///header			
app_global_context["registerFunc"]("SQL: kony.db. - 3", 
test_case_sql_parent_thread_3, "nonui");
		
////function follows			




            function test_case_sql_parent_thread_3() {
                //1) 
                try {
                    kony.print("Parent Scope: Init test_case_parent_thread()");
                    
                    var worker = new kony.worker.WorkerThread('TestCaseSQL003WorkerThread.js');
                    
                    timer_init();
                    
                    kony.print("Parent Scope: Exit test_case_parent_thread()");
                } catch (err) {
                    kony.print("Parent Scope: In Catch block");
                }
            };


function timer_init() {
    kony.print("Parent Scope :- kony.timer.schedule - ");
    var timerId = "mytimer12";
    var i = 0;
    
    
    function timerFunc() {
        i++;
        kony.print("Parent Scope :- kony.timer.schedule - In timerFunc() : " + i);
        if (i > 300) {
            kony.print("Parent Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
        } else {
            sql_producer_func();
            
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc, 1, true);
    kony.print("Parent Scope :- kony.timer.schedule - Done");
};



function sql_producer_func() {
    
    
    function commonErrorCallback(transactionId, error) {
        kony.print("Parent Scope : callbackScheduleRepeatW1");
        kony.print("Parent Scope : callbackScheduleRepeatW1: Error code:: " /*+ error*/);
        kony.print("Parent Scope : callbackScheduleRepeatW1: Error message:: " /*+ error.message*/);
    }
    
    function commonVoidcallback() {
        kony.print("Parent Scope : commonVoidcallback : The transaction was executed successfully.");
    }
    
    function success_createTable(transactionId, resultset) {
        kony.print("Parent Scope : success_createTable: Table Created from Worker");
    }
    
    function success_dropTable(transactionId, resultset) {
        kony.print("Parent Scope : success_dropTable: Table was dropped");
    }
    
    function createTable(transactionID) {
        kony.print("Parent Scope : createTable");
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
        for (i = 1;
             ((insertTable) != null) && i <= insertTable.length; i++) {
            var v = insertTable[kony.decrement(i)];
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"" + v[kony.decrement(1)] + "\"," + v[kony.decrement(2)] + ")";
            count = count + 1;
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable, commonErrorCallback);
        }
        
        //
        for (i = 0; i < 10; i++) {
            count++;
            var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"EMP1\"," + 200 + ")";
            kony.db.executeSql(transactionID, sqlStatement, null, success_createTable, commonErrorCallback);
        }
    };
    
    function createDB() {
        kony.print("Parent Scope : createDB");
        webSQLFlag = 1;
        baseObjectId = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        kony.db.transaction(baseObjectId, createTable, commonErrorCallback, commonVoidcallback);
    }
    
    createDB();
};




