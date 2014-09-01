gtRespnsHdr();

var glob_req;
var httpreq;

function gtRespnsHdr()
{
postMessage("\nWS: ***Init Worker_1***\n");
try {	
	var request = new kony.net.HttpRequest();
	glob_req = request;
	//request.onReadyStateChange=getHeaderValue;
	request.open(constants.HTTP_METHOD_GET, "http://feeds.foxnews.com/foxnews/health");	
	request.send(); 
	//postMessage("Response is:: "+request.getResponseHeader("Date"));
    request.onReadyStateChange=handleresponse;
	
	
	
	}
	catch (err)
	{
		postMessage("my error");
		postMessage(JSON.stringify(err));
	}	
}

function handleresponse(){

var a = glob_req.readyState ;

var stat1 = glob_req.status;

 if (a == 4) 
			  {
  				    if(stat1==200)
					
					{postMessage(" Response is::" + glob_req.getResponseHeader("Date"));
					}else{
                              alert("Status code is not equal to 200");
                              }
                       
	                 
			}
}