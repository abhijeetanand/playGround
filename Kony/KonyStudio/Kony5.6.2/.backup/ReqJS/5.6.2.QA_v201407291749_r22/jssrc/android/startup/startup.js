//startup.js file
function ReqJSpreappinit_seq0(params) {
    num1 = kony.math.pow(5, 2);
    alert("Accessing functions of konylibrary.js in pre app init");
    alert("Result of kony.math.pow(5,2) is: " + num1);
    define("cartPreAppInit", function() {
        return {
            "cartPreAppInit": "Cart object"
        };
    });
    require(["cartPreAppInit"], function(cartPreAppInit) {
        alert("Testing RequireJS in pre app init");
        alert("Showing return value from define cart function: " + cartPreAppInit.cartPreAppInit);
    });
};
var globalhttpheaders = {};
var appConfig = {
    appId: "ReqJS",
    appName: "ReqJS",
    appVersion: "1.0.5",
    platformVersion: null,
    serverIp: "10.11.12.90",
    serverPort: "9090",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://10.11.12.90:9090/middleware/MWServlet",
    secureurl: "https://10.11.12.90:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true
    })
};

function fprefreshgesture_function() {
    var y = {
        fingers: 1,
        swipedistance: 30,
        swipevelocity: 60
    };
    try {
        kony.application.setGestureRecognizerForAllForms(2, y, function(widgetRef, gestureInfo) {
            if (kony.os.toNumber(gestureInfo["gestureType"]) == 2) {
                if (kony.os.toNumber(gestureInfo["swipeDirection"]) == 2) {
                    kony.application.launchApplication(null);
                }
            }
        });
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackSingleTapGesture:" + err.message);
    }
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        preappinit: ReqJSpreappinit_seq0,
        init: appInit,
        postappinit: fprefreshgesture_function,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};