function test_case_accessing_parent_thread4()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Access004WorkerThread.js');
			
	
	 try
	{	 
	 
		var a = b;
	}
	catch(err)
	{
	   //err = kony.getError(e);
	   frmAccessing.lbl4.text = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	  
	}	
	   
	 
	 
};
			
			
			