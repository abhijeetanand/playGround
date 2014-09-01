	function test_case_import_parent_thread1() {
	    //importScripts() - empty call - without args ;
	    //create new kony.worker.WorkerThread
	    var worker = new kony.worker.WorkerThread('Import001WorkerThread.js');
	    worker.addEventListener("message", function(event) {
	        frmImport.lbl1.text += event.data;
	    });
	};