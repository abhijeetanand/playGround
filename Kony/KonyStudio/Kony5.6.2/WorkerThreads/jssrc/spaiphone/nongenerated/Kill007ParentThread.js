	function test_case_kill_parent_thread7() {
	    //create new kony.worker.WorkerThread
	    var worker = new kony.worker.WorkerThread('Kill007WorkerThread.js');
	    var prefix = "";
	    worker.addEventListener("message", function(event) {
	        if (event.data == "workerthread closing") {
	            prefix = "closed";
	        }
	        frmKill.lbl7.text = event.data + " : " + prefix;
	    });
	    worker.postMessage("hello from parent");
	    worker.postMessage("hello from parent");
	    worker.postMessage("hello from parent");
	    worker.postMessage("hello from parent");
	};