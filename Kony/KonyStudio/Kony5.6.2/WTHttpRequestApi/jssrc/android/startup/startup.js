//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "WTHttpRequestApi",
    appName: "WTHttpRequestApi",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.25.216",
    serverPort: "9090",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "WTHttpRequestApi",
    url: "https://abhijeet-anand.konycloud.com/WTHttpRequestApi/MWServlet",
    secureurl: "https://abhijeet-anand.konycloud.com/WTHttpRequestApi/MWServlet"
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
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true
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
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;