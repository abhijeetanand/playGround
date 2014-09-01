//worker
//workers inner scope
kony.print("Worker Scope: Init");
var count = 0;
var message1 = function(event) {
        kony.print("Worker Scope : message handler 1");
        self.postMessage({
            'message': "Hello World From Worker "
        });
    };
//add
self.addEventListener("message", message1);
kony.print('Worker Scope : invoking self.postMessage()');
//will invoke Parent worker.onmessage()
postMessage({
    'message': "Hello World From Worker "
});
//should throw error
slef.postMessage({
    'message': "Hello World From Worker "
});
kony.print("Worker Scope: Loading done");