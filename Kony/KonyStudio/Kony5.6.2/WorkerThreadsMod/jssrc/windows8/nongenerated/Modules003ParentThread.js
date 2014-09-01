	function test_case_modules_parent_thread3() {
	    //create new kony.worker.WorkerThread
	    var worker = new kony.worker.WorkerThread('m4');
	    count = 0;
	    worker.addEventListener("message", function(event) {
	        if (count == 0) frmModules.lbl31.text = event.data;
	        if (count == 1) frmModules.lbl32.text = event.data;
	        else if (count >= 2) frmModules.lbl33.text += event.data;
	        count++;
	    });
	};