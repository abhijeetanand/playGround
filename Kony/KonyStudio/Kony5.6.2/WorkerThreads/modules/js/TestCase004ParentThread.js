
function test_case_parent_thread_4()
{
				//worker file not found: "onerror" not registered
				
	try
	{			
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('_worler_file_not_present_.js');
				
				worker.addEventListener("error", function(event) {
	 	       frmWorkers.lbl42.text ="error lineno:" + event.lineno +"filename: "+ event.filename + "message :"+ event.message });
			   frmWorkers.lbl42.text+= "Failed :Text executed after error listner"	
	
	}
	catch(e)
	{
		err = kony.getError(e);
		frmWorkers.lbl41.text = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	    throw "err"; 
	}
				
				
};
			