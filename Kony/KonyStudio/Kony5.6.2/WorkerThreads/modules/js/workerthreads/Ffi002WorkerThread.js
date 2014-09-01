



 function invokeFFI()
{
 var retVal = FFIWindows.add(10,11);
 if(retVal == 21) 
 postMessage("passed");
 else
 postMessage("failed");
}

invokeFFI();