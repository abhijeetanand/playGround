function test_case_post_parent_thread5()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Post005WorkerThread.js');
	
	worker.addEventListener("message", function(event) {
	frmPost.lbl8.text += event.data;
	
	});

	 
};
			
			
			