	
			
function test_case_modules_parent_thread6()
{	
	count=1;
	
	try
	{			
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('m7','m8');
				
				worker.addEventListener("message", function(event) {
				msg= event.data;
				if(count ==1 && msg == "Module1 passed" )
	 	        frmModules.lbl62.text ="passed"
	 	        else
	 	        frmModules.lbl62.text = "failed";
	 	        });
	
	}
	catch(err)
	{
		frmModules.lbl61.text = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	    
	}
	 
	 

	 
};
						