// Verify hasWorkerThreadSupport()
function test_case_parent_thread_5()
{
	var retValue = kony.worker.hasWorkerThreadSupport();
	
	if(retValue == true)
	frmWorkers.lbl5.text = "Passed";	
	else
	frmWorkers.lbl5.text = "Failed";		
				
				
				
				
				
};
			