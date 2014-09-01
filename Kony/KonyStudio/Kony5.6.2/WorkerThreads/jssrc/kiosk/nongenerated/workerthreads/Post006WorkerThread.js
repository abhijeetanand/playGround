try {
    //will invoke worker's inner scope message event handler
    addEventListener("error", function(event) {
        var a = "error lineno:" + event.lineno + "filename: " + event.filename + "message :" + event.message
        postMessage(a);
    });
    postMessage(123);
    /*  addEventListener("message", function(event) {
	  
	  postMessage("wrong post message invoked"); });*/
} catch (e) {
    err = kony.getError(e);
    var b = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
    postMessage(b);
    throw err;
}