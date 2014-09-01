//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "WorkerThreads",
    appName: "WorkerThreads",
    appVersion: "15.0",
    platformVersion: null,
    serverIp: "10.11.12.90",
    serverPort: "9090",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://10.11.12.90:9090/middleware/MWServlet",
    secureurl: "https://10.11.12.90:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmAccessingGlobals();
    frmffiGlobals();
    frmHomeGlobals();
    frmImportGlobals();
    frmInnerGlobals();
    frmKillGlobals();
    frmListenerGlobals();
    frmMultiThreadGlobals();
    frmNonapisGlobals();
    frmPostGlobals();
    frmRemListenerGlobals();
    frmSQL1Globals();
    frmSQL2Globals();
    frmsqlapisGlobals();
    frmTimerGlobals();
    frmWorkersGlobals();
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