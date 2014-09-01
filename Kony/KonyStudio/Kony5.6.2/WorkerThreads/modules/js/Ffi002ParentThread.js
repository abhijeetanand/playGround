

function test_case_ffi_parent_thread2()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Ffi002WorkerThread.js');
			
		 
	 
	 worker.addEventListener("message", function(event) {
	 frmffi.lbl2.text =event.data;
	 });
	 
	 
	  
	 
	 

	 
};
			
			
			