checkIfNetworkIsAvailable();
checkActiveNetwork();
setNetworkCallBacksFunc();

function checkIfNetworkIsAvailable() {
    postMessage(" **** kony.net.isNetworkAvailable ****\n");
    postMessage("Network type wifi is provided :: " + kony.net.isNetworkAvailable(constants.NETWORK_TYPE_WIFI));
}

function checkActiveNetwork() {
    var avalnet = kony.net.getActiveNetworkType();
    if (avalnet == constants.NETWORK_TYPE_3G) {
        postMessage("\n Network available is : 3G");
    } else if (avalnet == constants.NETWORK_TYPE_WIFI) {
        postMessage("\n Network available is : WiFi");
    } else if (avalnet == constants.NETWORK_TYPE_ETHERNET) {
        postMessage("\n Network available is : ETHERNET");
    } else if (avalnet == constants.NETWORK_TYPE_ANY) {
        postMessage("\n Network available is : ANY ");
    } else {
        alert(avalnet);
        postMessage("\n Not connected to any network");
    }
}

function setNetworkCallBacksFunc() {
    var config = {};
    config.statusChange = function(isOnLine) {
        if (isOnLine) {
            postMessage("\n Device is Online");
            //networkTypeAny();
        } else {
            postMessage("\n Device is offline");
        }
    }
    kony.net.setNetworkCallbacks(config);
    postMessage("networkcallbacks set");
}