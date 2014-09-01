	function test_case_import_parent_thread10() {
	    //create new kony.worker.WorkerThread
	    var worker = new kony.worker.WorkerThread('Import0010WorkerThread.js');
	    var worker1 = new kony.worker.WorkerThread('Import0010WorkerThread2.js');
	    var evtMsgHandler_2 = function(event) {
	            frmImport.lbl101.text = event.data;
	        };
	    worker1.addEventListener("message", evtMsgHandler_2);
	};