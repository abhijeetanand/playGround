//worker
//workers inner scope
kony.print("Worker Scope: Init");
var count = 0;
self.addEventListener("message", function(event) {
    kony.print("Worker Scope: message handler 1");
});
self.addEventListener("message", function(event) {
    kony.print("Worker Scope: message handler 2");
});
self.addEventListener("message", function(event) {
    kony.print("Worker Scope: message handler 3");
});
self.addEventListener("message", function(event) {
    kony.print("Worker Scope: message handler 4");
});
self.addEventListener("message", function(event) {
    kony.print("Worker Scope: message handler 5");
});
kony.print('Worker Scope : invoking self.postMessage()');
//will invoke Parent worker.onmessage()
postMessage({
    'message': "Hello World From Worker "
});
kony.print("Worker Scope: Loading done");