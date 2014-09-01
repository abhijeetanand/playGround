

function test_case_multithread_parent_thread1()
{	
	//create new kony.worker.WorkerThread
	var worker1 = new kony.worker.WorkerThread('Multithread001WorkerThread.js');
	var worker2 = new kony.worker.WorkerThread('Multithread002WorkerThread.js');
	var worker3 = new kony.worker.WorkerThread('Multithread003WorkerThread.js');
	var worker4 = new kony.worker.WorkerThread('Multithread004WorkerThread.js');
	var worker5 = new kony.worker.WorkerThread('Multithread005WorkerThread.js');
	var worker6 = new kony.worker.WorkerThread('Multithread006WorkerThread.js');
	var worker7 = new kony.worker.WorkerThread('Multithread007WorkerThread.js');
	var worker8 = new kony.worker.WorkerThread('Multithread008WorkerThread.js');
	var worker9 = new kony.worker.WorkerThread('Multithread009WorkerThread.js');
	var worker10 = new kony.worker.WorkerThread('Multithread0010WorkerThread.js');
			
	
	 worker1.addEventListener("message", function(event) {
	 
	 segUIData = [];
	 segUIData[0] = {"segLabel":event.data };
 
	frmMultiThread.segment2456101778309652.addAll(segUIData); 
	 });
	 
	 worker1.postMessage("worker1 passed");
	 
	 worker2.addEventListener("message", function(event) {
	 
	 segUIData = [];
	 segUIData[0] = {"segLabel":event.data };
 
	frmMultiThread.segment2456101778309652.addAll(segUIData); 
	 });
	 
	 worker2.postMessage("worker2 passed");
	 
	 worker3.addEventListener("message", function(event) {
	 
	 segUIData = [];
	 segUIData[0] = {"segLabel":event.data };
 
	frmMultiThread.segment2456101778309652.addAll(segUIData); 
	 });
	 
	 worker3.postMessage("worker3 passed");
	 
	 worker4.addEventListener("message", function(event) {
	 
	 segUIData = [];
	 segUIData[0] = {"segLabel":event.data };
 
	frmMultiThread.segment2456101778309652.addAll(segUIData); 
	 });
	 
	 worker4.postMessage("worker4 passed");
	 
	 worker5.addEventListener("message", function(event) {
	 
	 segUIData = [];
	 segUIData[0] = {"segLabel":event.data };
 
	frmMultiThread.segment2456101778309652.addAll(segUIData); 
	 });
	 
	 worker5.postMessage("worker5 passed");
	 
	 worker6.addEventListener("message", function(event) {
	 
	 segUIData = [];
	 segUIData[0] = {"segLabel":event.data };
 
	frmMultiThread.segment2456101778309652.addAll(segUIData); 
	 });
	 
	 worker6.postMessage("worker6 passed");
	 
	 worker7.addEventListener("message", function(event) {
	 
	 segUIData = [];
	 segUIData[0] = {"segLabel":event.data };
 
	frmMultiThread.segment2456101778309652.addAll(segUIData); 
	 });
	 
	 worker7.postMessage("worker7 passed");
	 
	 worker8.addEventListener("message", function(event) {
	 
	 segUIData = [];
	 segUIData[0] = {"segLabel":event.data };
 
	frmMultiThread.segment2456101778309652.addAll(segUIData); 
	 });
	 
	 worker8.postMessage("worker8 passed");
	 
	 worker9.addEventListener("message", function(event) {
	 
	 segUIData = [];
	 segUIData[0] = {"segLabel":event.data };
 
	frmMultiThread.segment2456101778309652.addAll(segUIData); 
	 });
	 
	 worker9.postMessage("worker9 passed");
	 
	 worker10.addEventListener("message", function(event) {
	 
	 segUIData = [];
	 segUIData[0] = {"segLabel":event.data };
 
	frmMultiThread.segment2456101778309652.addAll(segUIData); 
	 });
	 
	 worker10.postMessage("worker10 passed");
	 
	 
	 
}
			
			
			