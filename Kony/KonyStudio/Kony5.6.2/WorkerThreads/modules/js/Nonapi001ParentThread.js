

function test_case_nonapi_parent_thread1()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Nonapi001WorkerThread.js');
			
		 
	 
	 worker.addEventListener("message", function(event) {
	 frmNonapis.lbl1.text +=event.data;
	 });
	 
	 
	  
	 
	 

	 
};
			
			
			