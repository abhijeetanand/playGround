	function test_case_import_parent_thread7() {
	    //importScripts() - file not present ;
	    var count = 0;
	    kony.print("Parent Scope: Init test_case_parent_thread()");
	    //create new kony.worker.WorkerThread
	    var worker = new kony.worker.WorkerThread('Import007WorkerThread.js');
	    var evtMsgHandler_1 = function(event) {
	            if (count == 0) {
	                frmImport.lbl71.text += event.data;
	            } else {
	                frmImport.lbl72.text += event.data;
	            }
	            count++;
	        };
	    worker.addEventListener("message", evtMsgHandler_1);
	};