
function test_case_parent_thread_6()
{
				//worker file not found: "onerror" not registered
				
	try
	{			
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('_worler_file_not_present_.js');
				
	
	}
	catch(e)
	{
		err = kony.getError(e);
		frmWorkers.lbl6.text = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	    
	}
				
				
};
			