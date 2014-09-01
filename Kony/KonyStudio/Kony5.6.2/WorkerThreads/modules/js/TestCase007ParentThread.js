
function test_case_parent_thread_7()
{
				//not a string worker file
				
	try
	{			
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread(123);
				
	
	}
	catch(e)
	{
		err = kony.getError(e);
		frmWorkers.lbl7.text = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	    
	}
				
				
};
			