headersetting();

function headersetting() {
    postMessage("\nWS: ***Init Worker_1***\n");
    try {
        var request = new kony.net.HttpRequest();
        glob_req = request;
        request.open(constants.HTTP_METHOD_POST, "http://10.10.25.22:9090/HttpRequestStub/ServiceStub?testCase_id=form_data");
        var frmData = new kony.net.FormData();
        postMessage(" kony.net.FormData() is successful");
        frmData.append("param1", "KONY LABS");
        request.setRequestHeader("reqtHeader", "Kony");
        request.setRequestHeader("reqtHeader", "Platform");
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
            postMessage(" Response is::" + JSON.stringify(glob_req.response));
        } else {
            alert("Status code is not equal to 200");
        }
    }
}