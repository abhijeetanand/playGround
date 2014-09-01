function test_case_kill_parent_thread3()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Kill003WorkerThread.js');
	
	 worker.addEventListener("message", function(event) 
	 {
	 	
	 	frmKill.lbl3.text += event.data
	 	
	 });	 
	 
	 worker.postMessage("parent hello");
	 worker.postMessage("parent hello");
	 worker.postMessage("parent hello");

	 
};
		
			
			