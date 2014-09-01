//worker
//workers inner scope
//error handler
var evtErrorHandler_1 = function(event) {
        postMessage('\n' + 'Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
    };
self.addEventListener("error", evtErrorHandler_1);
try {
    //import parent js file
    importScripts('Import008ParentThread.js');
} catch (e) {
    err = kony.getError(e);
    postMessage('\n' + "try catch error code is " + err.errorCode + '\n' + "name:" + err.name + '\n' + "message:" + err.message + '\n');
    throw err;
}