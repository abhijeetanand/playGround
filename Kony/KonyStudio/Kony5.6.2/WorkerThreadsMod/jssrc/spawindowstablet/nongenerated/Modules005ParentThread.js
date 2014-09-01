	function test_case_modules_parent_thread5() {
	    //create new kony.worker.WorkerThread
	    var worker = new kony.worker.WorkerThread('module_not_present');
	    worker.addEventListener("error", function(event) {
	        frmModules.lbl52.text = "error lineno:" + event.lineno + "filename: " + event.filename + "message :" + event.message
	    });
	};