function test_case_post_parent_thread6()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Post006WorkerThread.js');
			
	
	 
	worker.addEventListener("message", function(event) {
	frmPost.lbl10.text += event.data;
	
});



	 
};
			
			
			