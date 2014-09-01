//worker
//workers inner scope
kony.print("Worker Scope: Init");
var count = 0;
//invoked when Parent calls worker.postmessage()
this.addEventListener("message", function(event) {
    kony.print('Worker Scope : onmessage : event.data : ' + event.data["message"] + "msg count : " + ++count);
    //call func
    postMessage({
        'message': "Hello World From Worker "
    });
});
kony.print("Worker Scope: invoking self.close()");
self.close();
kony.print('Worker Scope : invoking self.postMessage()');
//will invoke Parent worker.onmessage()
postMessage({
    'message': "Hello World From Worker "
});
kony.print("Worker Scope: Loading done");