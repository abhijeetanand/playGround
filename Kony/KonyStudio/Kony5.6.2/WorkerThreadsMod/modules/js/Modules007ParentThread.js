	
			
function test_case_modules_parent_thread7()
{	
	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('m9');
	var worker1 = new kony.worker.WorkerThread('m11');
	
	
	 worker1.addEventListener("message", function(event) 
	 {
	 	frmModules.lbl71.text = event.data;
	 	
	 	
	 });
	 
	 

	 
};
						