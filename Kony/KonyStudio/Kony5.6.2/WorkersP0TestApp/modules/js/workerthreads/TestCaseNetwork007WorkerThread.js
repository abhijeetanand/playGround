//worker

//workers inner scope

kony.print("Worker Scope: Init");


//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
	kony.print('Worker Scope : onmessage : event.data : ' + event.data);
	//call func
	do_something_in_worker();
});

function do_something_in_worker() {
	kony.print('Worker Scope : invoking postMessage()');
	//will invoke Parent worker.onmessage()
	postMessage({
		'message' : "Hello World From Worker "
	});
};


//
test007();


//
function test007() {
 
    kony.print("Worker Scope :- konynetwork API - kony.net.HttpRequest() : sync call");
    
    //sync callback
    
    var global_request;
    
    function notimeoutset()
    {
        var request = new kony.net.HttpRequest();
        global_request = request;
        request.onReadyStateChange=callbackHandler1;
        
//        var url = "http://ilabs.uw.edu/sites/default/files/sample_0.pdf";
        var url = "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO";
        //        var url = "http://www.google.com";
        request.open(constants.HTTP_METHOD_GET, url, false);
        request.send();
        
    };
    
    notimeoutset();
    
    
    function callbackHandler1(){
        kony.print("Worker Scope :- kony.net.HttpRequest() : callbackHandler1");
        kony.print("Worker Scope :- request.status : ");
        kony.print(global_request.status);
        kony.print("Worker Scope :- request.statusText : " );
        kony.print(global_request.statusText);
        kony.print("Worker Scope :- request.responseType : " );
        kony.print(global_request.responseType);
        kony.print("Worker Scope :- request.response : " );
        kony.print(global_request.response);
        kony.print("Worker Scope :- request.readyState : " );
        kony.print(global_request.readyState);
        kony.print("Worker Scope :- request.getAllResponseHeaders() : ");
        kony.print(global_request.getAllResponseHeaders());
    }
    
};


kony.print("Worker Scope: Loading done");

