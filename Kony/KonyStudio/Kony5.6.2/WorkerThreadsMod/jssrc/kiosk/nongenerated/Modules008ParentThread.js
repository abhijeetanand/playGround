	function test_case_modules_parent_thread8() {
	    //create new kony.worker.WorkerThread
	    var worker = new kony.worker.WorkerThread('m12');
	    var worker1 = new kony.worker.WorkerThread('m14');
	    worker1.addEventListener("message", function(event) {
	        frmModules.lbl81.text = event.data;
	    });
	};