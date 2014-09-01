function test_case_remlistener_parent_thread1()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('RemListener001WorkerThread.js');
	
	worker.addEventListener("message", function(event) {
	frmRemListener.lbl1.text = "first listener"+event.data;				
				});

	worker.addEventListener("message", function(event) {
	frmRemListener.lbl2.text = "second listener"+event.data;	
				});

	var msgEventObj = function(event) {
	frmRemListener.lbl3.text = "Third listener"+event.data;	
				};
	worker.addEventListener("message",msgEventObj );
				
	worker.removeEventListener("message",msgEventObj);		
			
	

	 
};
			
			
			