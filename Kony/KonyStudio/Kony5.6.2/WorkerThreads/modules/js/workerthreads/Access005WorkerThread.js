
function callText()
{

var a=10;
postMessage(b);

}

try
{	
callText();

}
catch(err)
{
 //err = kony.getError(e);
 postMessage("error code is "+err.errorCode+"name:"+err.name + "message:"+ err.message)
}
