	function test_case_kill_parent_thread1() {
	    //create new kony.worker.WorkerThread
	    var worker = new kony.worker.WorkerThread('Kill001WorkerThread.js');
	    var count = 1;
	    worker.postMessage("first hello world from parent");
	    worker.addEventListener("message", function(event) {
	        frmKill.lbl1.text += event.data;
	        count++;
	        worker.postMessage("hello from parent");
	        if (count > 2) worker.terminate();
	    });
	    if (count > 2) worker.postMessage("after terminate calling hello from parent");
	};