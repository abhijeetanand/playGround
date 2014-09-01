//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "BrowserWidgetEx",
    appName: "BrowserWidgetEx",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.3.92",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://10.10.3.92:80/middleware/MWServlet",
    secureurl: "https://10.10.3.92:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeheaderOne();
    initializefooterOne();
    frmBrowserGlobals();
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
        init: appInit,
        showstartupform: function() {
            frmBrowser.show();
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