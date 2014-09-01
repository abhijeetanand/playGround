//startup.js file
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
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://10.11.12.90:9090/middleware/MWServlet",
    secureurl: "https://10.11.12.90:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeheader1();
    initializeheader2();
    initializeheader3();
    initializeheader4();
    initializeheader5();
    initializeheader6();
    initializefooter1();
    initializefooter2();
    initializefooter3();
    initializefooter4();
    initializefooter5();
    initializefooter6();
    initializeseg1();
    dummyGlobals();
    frm1Globals();
    frm2Globals();
    frm3Globals();
    frm4Globals();
    frm5Globals();
    frm6Globals();
    frm7Globals();
    frmEventsGlobals();
    frmHomeGlobals();
    pop1Globals();
    pop2Globals();
    pop3Globals();
    pop4Globals();
    pop5Globals();
    pop6Globals();
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
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};