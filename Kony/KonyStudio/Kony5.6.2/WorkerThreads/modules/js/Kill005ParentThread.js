	
			
function test_case_kill_parent_thread5()
{	
	//create new kony.worker.WorkerThread
	var worker = new kony.worker.WorkerThread('Kill005WorkerThread.js');
	
	 worker.addEventListener("message", function(event) 
	 {
	 	
	 	frmKill.lbl5.text += event.data;
	 	
	 });
		
	 var counter =1;
	 var timerId = "mytimerkill1215";
	 kony.timer.schedule(timerId, timerFunc, 5, true);
	 
     function timerFunc()
{
    if(counter == 1)
    {
		worker.postMessage("cmd1");    
    } 
    
    if(counter == 2)
    {
    	worker.terminate();
    }   
    if(counter == 3)
    {
    	worker.postMessage("cmd1");
    }
    counter++;
}
    
    
   
	 
};




						