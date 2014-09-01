
try
	{
	
	addEventListener("error", function(event) {
	 var a ="error lineno:" + event.lineno +"filename: "+ event.filename + "message :"+ event.message
	 kony.print("hi");
	 postMessage(a);
	  });
	//will invoke parent's inner scope message event handler
	 postMessage();
	 
	 
	 
	 /* addEventListener("message", function(event) {
	  
	  postMessage("wrong post message invoked"); });*/
	 }
	 catch(e)
	 {
	  err = kony.getError(e);
	  var b = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	  postMessage(b);
	  throw err;
	  
	   
	 }




