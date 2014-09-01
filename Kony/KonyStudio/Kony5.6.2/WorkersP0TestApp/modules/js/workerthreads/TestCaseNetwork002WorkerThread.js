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
test002();

//
function test002() {
    kony.print("Worker Scope :- konynetwork API - kony.net.cancel");
    //var url = "http://www.google.com";
    var url = "http://ws.geonames.org/weatherIcaoJSON";
    var inputParam = {};
    inputParam["ICAO"] = "KMCO";
    
    function net_callback(status, resulttable) {
        kony.print("Worker Scope :- konynetwork API - callback Handler : " + status);
        kony.print("Worker Scope :- konynetwork API - printing result table : begin");
        
        
        function iter_json(table, indent) {
            var addIndent = indent + "    ";
            for (var key in table) {
                var val = table[key];
                if(typeof val == "object") {
                    iter_json(val, addIndent);
                } else {
                    kony.print("Worker Scope :- " + addIndent + "key : " + key + " : val : " + val);
                }
            }
        };
        
        iter_json(resulttable, "");
        kony.print("Worker Scope :- konynetwork API - printing result table : end");
    };
    
    if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.print("Worker Scope :- going to invoke: kony.net.invokeServiceAsync()");
        
        var connHandle = kony.net.invokeServiceAsync(url, inputParam, net_callback, "", "get");
        
        //cancel
        kony.print("Worker Scope :- kony.net.cancel(connHandle)");
        kony.net.cancel(connHandle);
    }
};


kony.print("Worker Scope: Loading done");

