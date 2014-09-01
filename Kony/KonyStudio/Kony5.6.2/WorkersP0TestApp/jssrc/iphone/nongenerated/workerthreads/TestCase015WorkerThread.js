//worker
//workers inner scope
kony.print("Worker Scope: Init");
kony.print('Worker Scope : invoking postMessage()');
//will invoke Parent worker.onmessage()
postMessage({
    'message': "Hello World From Worker "
});
kony.print("Worker Scope: Loading done");