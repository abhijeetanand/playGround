var evtMsgHandler_1 = function(event) {
        try {
            postMessage(a);
        } catch (err) {
            postMessage(err.message);
        }
    };
addEventListener("message", evtMsgHandler_1);