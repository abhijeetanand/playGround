try {
    var a = kony.modules.loadFunctionalModule('parentm2');
    if (a == false) {
        postMessage("passed");
    } else {
        postMessage("failed");
    }
} catch (err) {
    var b = "error code is " + err.errorCode + "name:" + err.name + "message:" + err.message;
    postMessage(b);
    //throw err; 
}