kony.print("Worker1 Scope: Init ");
var getRecordsCountWTfour=0;
var worker2 = new kony.worker.WorkerThread("TestCaseSQL004WorkerThread2.js");

timer_init_WT4();

function timer_init_WT4() {
    kony.print("Worker1 Scope :- kony.timer.schedule - ");
    var timerId = "mytimer1224";
    var i = 0;

    function timerFunc_WT4() {
        i++;
        kony.print("Worker1 Scope :- kony.timer.schedule - In timerFunc_WT4() : " + i);
        if (i > 300) {
            kony.print("Worker1 Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
            self.close();
        } else {
            sql_consumer_func_WT4();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc_WT4, 1, true);
    kony.print("Worker1 Scope :- kony.timer.schedule - Done");
};

function sql_consumer_func_WT4() {
    createDBW2_WT4();

    function createDBW2_WT4() {
        kony.print("Worker1 Scope : sql_consumer_func_WT4: createDBW2_WT4");
        webSQLFlag = 1;
        baseObjectIdw2_WT4 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelect_WT4();
    }

    function success_sqlSelect_WT4(transactionId, resultset) {
        kony.print("Worker1 Scope : sql_consumer_func_WT4: success_sqlSelect_WT4");
        if (resultset != null) {
            var numResults = resultset.rows.length;
           for (var i = 0,j = 1000 ,counter = 0; i <= numResults - 1; i++,j++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                kony.print("Worker1 Scope : sql_consumer_func_WT4: EMP ID ::" + rowItem.empid.toString());
                kony.print("Worker1 Scope : sql_consumer_func_WT4: EMP NAME ::" + rowItem.empname);
                kony.print("Worker1 Scope : sql_consumer_func_WT4: EMP DEPT ::" + rowItem.depid.toString());
				postMessage("EMPID=" + rowItem.empid)
				if (j == rowItem.empid )
                {
                	counter++;
                	//postMessage("EMPID=" + rowItem.empid)
                	
                }
                kony.print("counterValue="+counter +"i value"+ i);
				if(i == 4009 && counter == 4010 )
		            {
		               	//postMessage("counter Value=" + counter);
		            	getRecordsCountWTfour++;
		            	postMessage("4010 Emp_records consumed @"+getRecordsCountWTfour +" times" );
						kony.print("4010 Emp_records consumed @"+getRecordsCountWTfour +" times" );
		            	//postMessage("i Value EMPID=" + rowItem.empid)
		            }
            };
        }
    }

    function commonErrorCallback_WT4(transactionId, error) {
        kony.print("Worker1 Scope :  sql_consumer_func_WT4: commonErrorCallback_WT4: Error code:: " + error);
        kony.print("Worker1 Scope :  sql_consumer_func_WT4: commonErrorCallback_WT4: Error message:: " + error.message);
    }

    function commonVoidcallback_WT4() {
        kony.print("Worker1 Scope : sql_consumer_func_WT4: commonVoidcallback_WT4: The transaction was executed successfully.");
    }

    function sqlSelect_WT4(transactionID) {
        kony.print("Worker1 Scope : sql_consumer_func_WT4: transactionID");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect_WT4, commonErrorCallback_WT4);
        } catch (err) {
            kony.print("Worker1 Scope : sql_consumer_func_WT4: transactionID: error while selecting " + err);
        }
    }

    function doTransactionsqlSelect_WT4() {
        kony.print("Worker1 Scope : sql_consumer_func_WT4: doTransactionsqlSelect_WT4");
        try {
            kony.db.transaction(baseObjectIdw2_WT4, sqlSelect_WT4, commonErrorCallback_WT4, commonVoidcallback_WT4);
        } catch (err) {
            kony.print("Worker1 Scope : sql_consumer_func_WT4: doTransactionsqlSelect_WT4: error in  select transaction" + err);
        }
    }
};