function test_case_listener_parent_thread5()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Listener005WorkerThread.js');
			
	
	  worker.addEventListener("message",function(){
	  frmListener.lbl51.text = "passed";
	  });
	 

	 
};
			
			
			