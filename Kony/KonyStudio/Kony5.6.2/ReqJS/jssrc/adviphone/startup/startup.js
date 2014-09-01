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
var appConfig = {
    appId: "ReqJS",
    appName: "ReqJS",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "169.254.80.80",
    serverPort: "80",
    secureServerPort: "443",
    url: "http://169.254.80.80:80/middleware/MWServlet",
    secureurl: "https://169.254.80.80:443/middleware/MWServlet",
    "noScriptMessage": "To use this site, first enable your browser's JavaScript support and then refresh this page.",
    middlewareContext: "middleware"
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
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        preappinit: ReqJSpreappinit_seq0,
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};