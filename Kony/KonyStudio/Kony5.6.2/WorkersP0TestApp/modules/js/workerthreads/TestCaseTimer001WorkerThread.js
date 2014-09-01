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
test009();


//
function test009() {
    kony.print("Worker Scope :- kony.timer.schedule - ");
    
    var timerId = "mytimer12";
    var i = 0;
    
    function timerFuncNew()
    {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFuncNew() : " + i);
        
        if(i > 6) {
            kony.print("Worker Scope :- kony.timer.schedule - Stopping timer : ");
            kony.timer.cancel(timerId);
        }
    };
    
    
    function timerFunc()
    {
        i++;
        kony.print("Worker Scope :- kony.timer.schedule - In timerFunc() : " + i);

        
        if(i > 3) {
            kony.print("Worker Scope :- kony.timer.schedule - Changing timer func : ");
            kony.timer.setCallBack(timerId,timerFuncNew);
        }

    };
    
    //
    kony.timer.schedule(timerId,timerFunc, 2, true);

    kony.print("Worker Scope :- kony.timer.schedule - Done");

};





kony.print("Worker Scope: Loading done");

