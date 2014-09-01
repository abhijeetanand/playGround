	
			
function test_case_kill_parent_thread6()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Kill006WorkerThread.js');
	
	 
	
	 worker.addEventListener("message", function(event) 
	 {
	 	frmKill.lbl6.text = event.data;
	 	
	 	
	 });
	 
	 
	  try{
	  worker.postMessage("first hello world from parent");
	  worker.postMessage("first hello world from parent");
	  worker.postMessage("first hello world from parent");
	  worker.terminate();
	  worker.postMessage("first hello world from parent");	 
	 }
	 catch(err)
	 {
	  alert(err.message);
	 }

	 
};
						