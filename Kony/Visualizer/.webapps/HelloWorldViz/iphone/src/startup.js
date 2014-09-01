function makeCall(eventobject) {
    kony.phone.dial(eventobject.text);
};
//startup.js 
var appConfig = {
    appId: "Project0b0cd6",
    appName: "Project0b0cd6",
    appVersion: "1.0.0",
    serverIp: "",
    serverPort: "",
    secureServerPort: "",
    url: null,
    secureurl: null
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true
    })
};

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    setAppBehaviors();
};
//This is a hack for postAppInit and NotesPopup.
function postAppInitCallBack() {
    apppostappinitFuncPreview();
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: postAppInitCallBack,
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
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();