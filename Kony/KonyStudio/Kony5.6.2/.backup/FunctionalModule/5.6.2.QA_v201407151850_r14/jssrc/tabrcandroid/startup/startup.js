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
var globalhttpheaders = {};
var appConfig = {
    appId: "FunctionalModule",
    appName: "FunctionalModule",
    appVersion: "1.0.10",
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
    frm7Globals();
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

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        preappinit: FunctionalModulepreappinit_seq0,
        init: appInit,
        postappinit: FunctionalModulepostappinit_seq0,
        appservice: FunctionalModuleappservice_seq0,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "cwiclassname": "com.konylabs.customwidget.ND_com_kny"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_hg"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_ffiSampleJS"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_ffiMethodJS"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_FFIWin"
    });
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;