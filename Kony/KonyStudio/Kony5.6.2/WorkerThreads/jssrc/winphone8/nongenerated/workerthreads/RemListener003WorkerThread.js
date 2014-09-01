try {
    addEventListener("error", function(event) {
        var a = "error lineno:" + event.lineno + "filename: " + event.filename + "message :" + event.message
        postMessage(a);
    });
    removeEventListener();
} catch (e) {
    err = kony.getError(e);
    var b = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
    postMessage(b);
    throw err;
}