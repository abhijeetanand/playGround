//worker

//workers inner scope

kony.print("Worker Scope: Init");

var count = 0;

var message1 = function(event) {
	kony.print("Worker Scope : message handler 1");
};

var message2 = function(event) {
	kony.print("Worker Scope : message handler 2");
};

var message3 = function(event) {
	kony.print("Worker Scope : message handler 3");
};

var message4 = function(event) {
	kony.print("Worker Scope : message handler 4");
};

var message5 = function(event) {
	kony.print("Worker Scope : message handler 5");
};

//add
self.addEventListener("message", message1);
self.addEventListener("message", message2);
self.addEventListener("message", message3);
self.addEventListener("message", message4);
self.addEventListener("message", message5);

//remove
kony.print("Worker: removing message eventListener 5");
self.removeEventListener("message", message5);

kony.print('Worker Scope : invoking self.postMessage()');
//will invoke Parent worker.onmessage()
postMessage({
	'message' : "Hello World From Worker "
});

kony.print("Worker Scope: Loading done");

