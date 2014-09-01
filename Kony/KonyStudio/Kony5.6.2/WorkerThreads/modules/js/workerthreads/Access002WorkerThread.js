
function callText()
{

	try
	{
		
		test_case_accessing_parent_thread2();
	}
	catch(err)
	{
	   //err = kony.getError(e);
	   var a = "error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message;
	   postMessage(a);
	}
}
	

callText();

