	
			
function test_case_import_parent_thread6()
{	
	
	//importScripts() - file not present ;

				var count =0;
				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('Import006WorkerThread.js');

				var evtMsgHandler_1 = function(event) {
				     
				   if(count==0)
				   {
					frmImport.lbl61.text += event.data;
					}
					else
					{
						frmImport.lbl62.text += event.data;
					}
					count++;
				};

				worker.addEventListener("message", evtMsgHandler_1);

				
 
	 

	 
};
						