function test_case_listener_parent_thread3()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Listener003WorkerThread.js');
			
	try
	{	 
	 
	 /*worker.addEventListener("error", function(event) {
	 frmListener.lbl6.text ="error lineno:" + event.lineno +"filename: "+ event.filename + "message :"+ event.message }); */
	 
	  worker.addEventListener("mess",function(event){
	  frmListener.lbl6.text ="failed" });
	 }
	 catch(e)
	 {
	  err = kony.getError(e);
	  frmListener.lbl5.text = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	  //throw err; 
	 }
	 

	 
};
			
			
			