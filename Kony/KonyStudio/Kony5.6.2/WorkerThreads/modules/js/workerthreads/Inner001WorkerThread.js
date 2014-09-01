var ret = kony.store.getItem("i")
ret1 = parseInt(ret);

if(ret1<10)
{
ret1++;
kony.store.setItem("i",ret1);
var worker = new kony.worker.WorkerThread('Inner001WorkerThread.js');

worker.addEventListener("message", function(event) 
	 {
	 	
	 	postMessage("passed");
	 });

postMessage("passed");






}