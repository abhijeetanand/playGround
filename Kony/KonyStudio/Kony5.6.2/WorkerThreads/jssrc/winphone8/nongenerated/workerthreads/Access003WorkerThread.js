function callText() {
    try {
        var b = a;
    } catch (err) {
        // err = kony.getError(e);
        var c = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
        postMessage(c);
    }
}
callText();