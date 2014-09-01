	
			
function test_case_modules_parent_thread4()
{	
	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('m6');
	
	
	
	 worker.addEventListener("message", function(event) 
	 {
	 	frmModules.lbl4.text = event.data;
	 	
	 	
	 });
	 
	 

	 
};
						