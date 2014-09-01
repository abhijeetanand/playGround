//startup.js file
function home_callback_seq0() {
    frmHome.show();
};

function exit_callback_seq0() {
    kony.application.exit();
};

function FunctionalModulepreappinit_seq0(params) {
    /* 
b= kony.modules.loadFunctionalModule("m1");
alert(b);

 */
};

function FunctionalModulepostappinit_seq0(params) {
    /* 
loadModulpstAppInt.call(this);

 */
    kony.modules.loadFunctionalModule("loadmodule_024");
};

function FunctionalModuleappservice_seq0(params) {
    /* 
loadModulAppsrvc.call(this);

 */
    kony.modules.loadFunctionalModule("loadmodule_026");
    return (frmHome);
};
var appConfig = {
    appId: "FunctionalModule",
    appName: "FunctionalModule",
    appVersion: "1.0.10",
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
        preappinit: FunctionalModulepreappinit_seq0,
        init: appInit,
        postappinit: FunctionalModulepostappinit_seq0,
        appservice: FunctionalModuleappservice_seq0,
        showstartupform: function() {
            frm5.show();
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