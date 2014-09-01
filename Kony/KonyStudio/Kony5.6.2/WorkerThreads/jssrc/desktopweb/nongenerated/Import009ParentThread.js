	function test_case_import_parent_thread9() {
	    //importScripts() - multiple files, error in one of the files Import004WorkerThread1.js
	    //create new kony.worker.WorkerThread
	    var worker = new kony.worker.WorkerThread('Import009WorkerThread.js');
	    var worker1 = new kony.worker.WorkerThread('Import009WorkerThread2.js');
	    var evtMsgHandler_1 = function(event) {
	            worker1.postMessage("after import calling another thread to see if importscripts variable is accessed")
	        };
	    worker.addEventListener("message", evtMsgHandler_1);
	    var evtMsgHandler_2 = function(event) {
	            frmImport.lbl91.text = event.data;
	        };
	    worker1.addEventListener("message", evtMsgHandler_2);
	};