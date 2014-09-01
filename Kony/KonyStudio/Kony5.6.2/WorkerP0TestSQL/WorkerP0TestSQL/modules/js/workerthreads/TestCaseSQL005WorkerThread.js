kony.print("Worker Scope: Init ");
timer_init_WT5();
var getRecordsCountWTfive=0;
function timer_init_WT5() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    var timerId = "mytimer125";
    var i = 0;

    function timerFunc_WT5() {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFunc_WT5() : " + i);
        if (i > 300) {
            kony.print("Worker Scope :- kony.timer.cancel : ");
            postMessage("Worker Scope :- kony.timer.cancel : ");
            kony.timer.cancel(timerId);
            self.close();
        } else {
            sql_consumer_func_WT5();
        }
    };
    //
    kony.timer.schedule(timerId, timerFunc_WT5, 1, true);
    kony.print("Worker Scope :- kony.timer.schedule - Done");
};

function sql_consumer_func_WT5() {
    createDBW2_WT5();

    function createDBW2_WT5() {
        kony.print("Worker Scope : sql_consumer_func_WT5 : createDBW2_WT5");
        webSQLFlag = 1;
        baseObjectIdw2 = kony.db.openDatabase("webSqlDB", "1.0", "Sample SQL Database", 5 * 1024 * 1024); // 5MB database
        doTransactionsqlSelect_WT5();
    }

    function success_dropTable_WT5(transactionId, resultset) {
        kony.print("Worker Scope : sql_producer_func : success_dropTable_WT5: Table was dropped");
    }

    function success_sqlSelect_WT5(transactionId, resultset) {
        kony.print("Worker Scope : sql_consumer_func_WT5 : success_sqlSelect_WT5");
        if (resultset != null) {
            var numResults = resultset.rows.length;
            for (var i = 0,j = 1000 ,counter = 0; i <= numResults - 1; i++,j++) {
                var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
                kony.print("Worker Scope : sql_consumer_func_WT5 : EMP ID ::" + rowItem.empid.toString());
                kony.print("Worker Scope : sql_consumer_func_WT5 : EMP NAME ::" + rowItem.empname);
                kony.print("Worker Scope : sql_consumer_func_WT5 : EMP DEPT ::" + rowItem.depid.toString());
				//postMessage("number of Results"+numResults);
				
				if(j == rowItem.empid )
				{
					counter++;
				}
				if(i == 19 && counter == 20 )
		            {
		            
		            	//postMessage("counter Value=" + counter);
						
		            	getRecordsCountWTfive++;
		            	postMessage("20 Emp_records consumed @"+getRecordsCountWTfive +" times" );
		            	//postMessage("i Value EMPID=" + rowItem.empid)
		            }
				
            };
        }
        
        //finally drop the table
        var sqlStatement = "DROP TABLE IF EXISTS emp_details";
        kony.db.executeSql(transactionID, sqlStatement, null, success_dropTable_WT5, commonErrorCallback);

    }

    function commonErrorCallback_WT5(transactionId, error) {
        kony.print("Worker Scope :  sql_consumer_func_WT5 : commonErrorCallback_WT5: Error code:: " + error);
        kony.print("Worker Scope :  sql_consumer_func_WT5 : commonErrorCallback_WT5: Error message:: " + error.message);
    }

    function commonVoidcallback_WT5() {
        kony.print("Worker Scope : sql_consumer_func_WT5 : commonVoidcallback_WT5: The transaction was executed successfully.");
    }

    function sqlSelect_WT5(transactionID) {
        kony.print("Worker Scope : sql_consumer_func_WT5 : transactionID");
        try {
            var sqlStatement = "SELECT * FROM emp_details";
            kony.db.executeSql(transactionID, sqlStatement, null, success_sqlSelect_WT5, commonErrorCallback_WT5);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func_WT5 : transactionID: error while selecting " + err);
        }
    }

    function doTransactionsqlSelect_WT5() {
        kony.print("Worker Scope : sql_consumer_func_WT5 : doTransactionsqlSelect_WT5");
        try {
            kony.db.transaction(baseObjectIdw2, sqlSelect_WT5, commonErrorCallback_WT5, commonVoidcallback_WT5);
        } catch (err) {
            kony.print("Worker Scope : sql_consumer_func_WT5 : doTransactionsqlSelect_WT5: error in  select transaction" + err);
        }
    }
};