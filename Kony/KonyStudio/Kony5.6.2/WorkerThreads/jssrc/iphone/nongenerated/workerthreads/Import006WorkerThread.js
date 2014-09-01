//worker
//workers inner scope
//error handler
var evtErrorHandler_1 = function(event) {
        postMessage('\n' + 'Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
    };
self.addEventListener("error", evtErrorHandler_1);
try {
    //import
    importScripts(123);
} catch (e) {
    err = kony.getError(e);
    /* if(err.errorCode == 3002)
  str = "error code : passed \n";
  else
  str = "error code : failed Actual :"+err.errorCode +"expected:3002  \n";
  
  if(err.name == "WorkerThreadError")
  str += "error name: passed \n";
  else
  str += "error name : failed" +"Actual :"+err.name +"expected:WorkerThreadError \n " ;
  
  if(err.message == "importScripts: InvalidParameter. Invalid script name" )
  str += "error message: passed";
  else
  str += "error message : failed" +"Actual :"+err.message +"expected:importScripts: InvalidParameter. Invalid script name " ; */
    postMessage('\n' + "try catch error code is " + err.errorCode + '\n' + "name:" + err.name + '\n' + "message:" + err.message + '\n');
    // postMessage(str);
    throw err;
}
/*catch(e)
{
 var str =" ";
 err = kony.getError(e);
 if(err.errorCode == 3002 && err.name == "WorkerThreadError" && err.message == "importScripts: InvalidParameter. Invalid script name")
 {
	str = "passed";
 }
 else
 {
	str +="failed"+" try catch error code is "+err.errorCode+'\n'+"name:"+err.name +'\n'+ "message:"+ err.message+ '\n';
 }
  postMessage(str);
  throw err;
}  */