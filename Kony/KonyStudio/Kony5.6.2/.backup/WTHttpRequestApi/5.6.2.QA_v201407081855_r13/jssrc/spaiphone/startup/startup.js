//startup.js file
var appConfig = {
    appId: "WTHttpRequestApi",
    appName: "WTDevP0",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.25.216",
    serverPort: "9090",
    secureServerPort: "443",
    url: "http://10.10.25.216:9090/middleware/MWServlet",
    secureurl: "https://10.10.25.216:443/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frm1Globals();
    frm2Globals();
    frm3Globals();
    frm4Globals();
    frm5Globals();
    frm6Globals();
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