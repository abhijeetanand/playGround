var a={};

addEventListener("message", function(event) {
a.msg = event.data.msg;
postMessage(a);
	
});

this.addEventListener("message", function(event) {
	a.msg = event.data.msg;	
	this.postMessage(a);
		
});

self.addEventListener("message", function(event) {
	a.msg = event.data.msg;	
	self.postMessage(a);
	
});
//will invoke Parents inner scope message event handler
postMessage({"msg":"hello world from child"});
