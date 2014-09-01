	
			
function test_case_modules_parent_thread1()
{	
	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('m1');
	
	count=0;
	
	 worker.addEventListener("message", function(event) 
	 {
	 	frmModules.lbl11.text += event.data;
	 	
	 	/*if(count ==1)
	 	frmModules.lbl12.text += event.data;
	 	else if(count == 2)
	 	frmModules.lbl13.text += event.data;
	 	count++;*/
	 	
	 });
	 
	 

	 
};
						