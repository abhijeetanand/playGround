	
			
function test_case_import_parent_thread8()
{	
	
	//importScripts() - file not present ;

				var count =0;
				kony.print("Parent Scope: Init test_case_parent_thread()");
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('Import008WorkerThread.js');

				var evtMsgHandler_1 = function(event) {
				     
				   if(count==0)
				   {
					frmImport.lbl81.text += event.data;
					}
					else
					{
						frmImport.lbl82.text += event.data;
					}
					count++;
				};

				worker.addEventListener("message", evtMsgHandler_1);

				
 
	 

	 
};
						