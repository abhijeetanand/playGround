//worker
//workers inner scope
//error handler
var evtErrorHandler_1 = function(event) {
        postMessage('\n' + 'Worker scope: ERROR: Line ' + event.lineno + ' in ' + event.filename + ': ' + event.message);
    };
self.addEventListener("error", evtErrorHandler_1);
try {
    //import
    importScripts('file_not_present_in_scope.js');
} catch (e) {
    err = kony.getError(e);
    postMessage('\n' + "try catch error code is " + err.errorCode + '\n' + "name:" + err.name + '\n' + "message:" + err.message + '\n');
    throw err;
}