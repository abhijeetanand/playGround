function test_case_remlistener_parent_thread3()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('RemListener003WorkerThread.js');
			
	
	
	worker.addEventListener("message", function(event) {
	frmRemListener.lbl31.text += event.data;});
	 

	 
};
			
			
			