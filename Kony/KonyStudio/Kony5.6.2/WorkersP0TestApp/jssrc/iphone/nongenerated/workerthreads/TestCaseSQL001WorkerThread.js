//worker
//workers inner scope
kony.print("Worker Scope: Init");
//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
    kony.print('Worker Scope : onmessage : event.data : ' + event.data);
    //call func
    do_something_in_worker();
});

function do_something_in_worker() {
    kony.print('Worker Scope : invoking postMessage()');
    //will invoke Parent worker.onmessage()
    postMessage({
        'message': "Hello World From Worker "
    });
};
//
test010();
//
function test010() {
    kony.print("Worker Scope :- kony.db. - ");
    //The below function specifies the callback function that must be executed when the execution of the SQL statement is a success
    function sql_success(transactionId, resultset) {
        //logic to process the resultset
        kony.print("Worker Scope :- sql_success() ");
    }
    //The below function specifies the callback function that must be executed when the execution of the SQL statement is a failure.
    function sql_errorCallBack(err) {
        kony.print("Worker Scope :- sql_errorCallBack() ");
    }
    //The below function specifies the callback function that contains the transactions.
    function myTransactionCallback(dbId) {
        //SQLTransaction contains implementation of executeSql method
        // invokekony.db.executeSql method for sql trasaction
        kony.print("Worker Scope :- myTransactionCallback() ");
        var sqlStatement = "SELECT * FROM employee";
        //kony.db.executeSql(transactionID, sqlStatement, null, sql_success, sql_errorCallBack);
    }
    //The below function specifies the callback that must be executed if there is an error in executing the transaction. This callback function is used to roll back the updates to the database.
    function myTransactionErrorCallback(SQLError) {
        // proceed with the logic
        kony.print("Worker Scope :- myTransactionErrorCallback() ");
    }
    //The below function specifies the callback that must be executed if the transaction is successful.
    function mySuccessCallback() {
        // proceed with the logic
        kony.print("Worker Scope :- mySuccessCallback() ");
    }
    //The below function will invoke readTransaction
    function readTransaction() {
        kony.print("Worker Scope :- readTransaction() ");
        var dbName = "konytestDB";
        var version = "1.0";
        var displayName = "demo web SQL Database";
        var estimatedSize = 5 * 1024 * 1024; //5*1024*1024 indicates 5 MB
        var databaseObjectId = kony.db.openDatabase(dbName, version, displayName, estimatedSize);
        //databaseObjectId contains the unique ID of the database
        kony.db.readTransaction(databaseObjectId, myTransactionCallback, myTransactionErrorCallback, mySuccessCallback);
    }
    //invoke
    readTransaction();
    kony.print("Worker Scope :- kony.db. - Done");
};
kony.print("Worker Scope: Loading done");