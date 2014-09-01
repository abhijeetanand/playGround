//startup.js file
function home_callback_seq0() {
    frmHome.show();
};

function exit_callback_seq0() {
    kony.application.exit();
};

function FuncModAsyncpostappinit_seq0(params) {
    loadModulpstAppInt.call(this);
};

function FuncModAsyncappservice_seq0(params) {
    loadModulAppsrvc.call(this);
};
var appConfig = {
    appId: "FuncModAsync",
    appName: "FuncModAsync",
    appVersion: "1.0.5",
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
    frm7Globals();
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
        postappinit: loadModulpstAppInt,
        appservice: loadModulAppsrvc,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};