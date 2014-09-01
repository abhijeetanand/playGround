function test_case_listener_parent_thread2()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Listener002WorkerThread.js');
			
	try
	{	 
	 
	/* worker.addEventListener("error", function(event) {
	 frmListener.lbl4.text ="error lineno:" + event.lineno +"filename: "+ event.filename + "message :"+ event.message });*/
	 
	  worker.addEventListener("message" );
	 }
	 catch(e)
	 {
	  err = kony.getError(e);
	  frmListener.lbl3.text = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	 // throw err; 
	 }
	 

	 
};
			
			
			