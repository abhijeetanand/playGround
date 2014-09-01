	
			
function test_case_import_parent_thread2()
{	
	//importScripts() - multiple files ;
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Import002WorkerThread.js');
	
	count=0;
	
	 worker.addEventListener("message", function(event) 
	 {
	 	frmImport.lbl21.text = event.data;
	 	count++;
	 	if(count ==1)
	 	frmImport.lbl22.text = event.data;
	 	
	 	
	 });
	 
	 

	 
};
						