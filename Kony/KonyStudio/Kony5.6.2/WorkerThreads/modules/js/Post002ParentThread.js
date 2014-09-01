function test_case_post_parent_thread2()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Post002WorkerThread.js');
			
	
	//will invoke worker's inner scope message event handler
	 worker.postMessage({"msg":"hello world from parent"});
	 
	 worker.addEventListener("message", function(event) {
	 frmPost.lbl2.text += event.data.msg;
	
});

	 
};
			
			
			