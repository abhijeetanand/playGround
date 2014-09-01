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
test005();

//
function test005() {
    
    
    function notimeoutset()
    {
        kony.print("Worker Scope :- konynetwork API - kony.net.HttpRequest();");
        var request = new kony.net.HttpRequest();
        var url = "http://ilabs.uw.edu/sites/default/files/sample_0.pdf";
//        var url = "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO";
//        var url = "http://www.google.com";
        request.open(constants.HTTP_METHOD_GET, url, false);
        request.send();
        
        kony.print("Worker Scope :- kony.net.HttpRequest();");
        kony.print("Worker Scope :- request.status : ");
        kony.print(request.status);
        kony.print("Worker Scope :- request.statusText : " );
        kony.print(request.statusText);
        kony.print("Worker Scope :- request.responseType : " );
        kony.print(request.responseType);
        kony.print("Worker Scope :- request.response : " );
        kony.print(request.response);
        kony.print("Worker Scope :-request.readyState : " );
        kony.print(request.readyState);
        kony.print("Worker Scope :- request.getAllResponseHeaders() : ");
        kony.print(request.getAllResponseHeaders());

    };
    
   notimeoutset();
    
};


kony.print("Worker Scope: Loading done");

