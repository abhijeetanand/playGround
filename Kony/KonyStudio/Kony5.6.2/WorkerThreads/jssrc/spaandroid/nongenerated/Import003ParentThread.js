	function test_case_import_parent_thread3() {
	    //importScripts() - multiple files ;
	    //create new kony.worker.WorkerThread
	    var worker = new kony.worker.WorkerThread('Import003WorkerThread.js');
	    count = 0;
	    worker.addEventListener("message", function(event) {
	        frmImport.lbl31.text = event.data;
	        count++;
	        if (count == 1) frmImport.lbl32.text = event.data;
	        else if (count == 2) frmImport.lbl33.text = event.data;
	    });
	};