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
var globalhttpheaders = {};
var appConfig = {
    appId: "FuncModAsync",
    appName: "FuncModAsync",
    appVersion: "1.0.5",
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
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
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

function fprefreshgesture_function() {
    var y = {
        fingers: 1,
        swipedistance: 30,
        swipevelocity: 60
    };
    try {
        kony.application.setGestureRecognizerForAllForms(2, y, function(widgetRef, gestureInfo) {
            if (kony.os.toNumber(gestureInfo["gestureType"]) == 2) {
                if (kony.os.toNumber(gestureInfo["swipeDirection"]) == 2) {
                    kony.application.launchApplication(null);
                }
            }
        });
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackSingleTapGesture:" + err.message);
    }
    loadModulpstAppInt();
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: fprefreshgesture_function,
        appservice: loadModulAppsrvc,
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