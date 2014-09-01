	
			
function test_case_modules_parent_thread2()
{	
	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('m3');
	
	count=0;
	
	 worker.addEventListener("message", function(event) 
	 {
	 	frmModules.lbl2.text += event.data;
	 	
	 	
	 });
	 
	 

	 
};
						