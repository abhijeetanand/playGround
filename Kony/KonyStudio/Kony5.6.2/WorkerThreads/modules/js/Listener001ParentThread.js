function test_case_listener_parent_thread1()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Listener001WorkerThread.js');
			
	try
	{	 
	 
	/* worker.addEventListener("error", function(event) {
	 frmListener.lbl2.text ="error lineno:" + event.lineno +"filename: "+ event.filename + "message :"+ event.message });*/
	 
	  worker.addEventListener( );
	 }
	 catch(e)
	 {
	  err = kony.getError(e);
	  frmListener.lbl1.text = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	 // throw err; 
	 }
	 

	 
};
			
			
			