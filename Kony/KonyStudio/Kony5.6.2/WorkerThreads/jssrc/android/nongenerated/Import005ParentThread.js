	function test_case_import_parent_thread5() {
	    //importScripts() - in Parent thread ;
	    try {
	        importScripts('Import005WorkerThread.js');
	        //create new kony.worker.WorkerThread
	        var worker = new kony.worker.WorkerThread('Import005WorkerThread.js');
	    } catch (err) {
	        //err = kony.getError(e);
	        frmImport.lbl5.text = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
	    }
	};