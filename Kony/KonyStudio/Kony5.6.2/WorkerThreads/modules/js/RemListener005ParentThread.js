function test_case_remlistener_parent_thread5()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('RemListener005WorkerThread.js');
			
	try
	{	 
	 
	 var errorfunc = function(event) {
	 frmListener.lbl51.text ="error lineno:" + event.lineno +"filename: "+ event.filename + "message :"+ event.message };
	 
	 worker.addEventListener("error",errorfunc );
	 
	 
	  worker.removeEventListener("kdsflk",errorfunc );
	 }
	 catch(e)
	 {
	  err = kony.getError(e);
	  frmRemListener.lbl51.text = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	 // throw err; 
	 }
	 

	 
};
			
			
			