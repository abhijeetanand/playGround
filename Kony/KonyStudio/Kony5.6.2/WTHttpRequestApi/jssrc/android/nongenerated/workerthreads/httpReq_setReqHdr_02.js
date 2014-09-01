headersetting();

function headersetting() {
    postMessage("\nWS: httpReq_setReqHdr_02 ***Init Worker_1***\n");
    try {
        var request = new kony.net.HttpRequest();
        glob_req = request;
        request.open(constants.HTTP_METHOD_GET, "http://ws.geonames.org/weatherIcaoJSON?ICAO=KMCO");
        request.send();
        request.onReadyStateChange = handleresponse;
    } catch (err) {
        postMessage("my error");
        postMessage(JSON.stringify(err));
    }
}

function handleresponse() {
    var a = glob_req.readyState;
    var stat1 = glob_req.status;
    if (a == 4) {
        if (stat1 == 200) {
            postMessage(" httpReq_setReqHdr_02 Response is::" + JSON.stringify(glob_req.response));
        } else {
            alert("Status code is not equal to 200");
        }
    }
}