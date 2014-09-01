//startup.js file
var appConfig = {
    appId: "WorkerThreads",
    appName: "WorkerThreads",
    appVersion: "13.0",
    platformVersion: null,
    serverIp: "10.11.12.90",
    serverPort: "9090",
    secureServerPort: "443",
    url: "http://10.11.12.90:9090/middleware/MWServlet",
    secureurl: "https://10.11.12.90:443/middleware/MWServlet",
    middlewareContext: "middleware"
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