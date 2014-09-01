	
			
function test_case_import_parent_thread4()
{	
		//importScripts() - multiple files, error in one of the files Import004WorkerThread1.js

		//create new kony.worker.WorkerThread
		var worker = new kony.worker.WorkerThread('Import004WorkerThread.js');

		var evtMsgHandler_1 = function(event) {
	
	     frmImport.lbl4.text += event.data;	
	
		};

		worker.addEventListener("message", evtMsgHandler_1);
				
 
	 

	 
};
						