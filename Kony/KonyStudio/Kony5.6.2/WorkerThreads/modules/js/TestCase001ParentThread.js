//Worker API along with Mandatory Parameter
function test_case_parent_thread_1() {
				//addEventListener
				
				
				//create new kony.worker.WorkerThread
				var worker = new kony.worker.WorkerThread('TestCase001WorkerThread.js');

				//invoked when worker calls postmessage() from its inner scope
				worker.addEventListener("message", function(event) {
				frmWorkers.lbl1.text = event.data;
				});

				
			}
			