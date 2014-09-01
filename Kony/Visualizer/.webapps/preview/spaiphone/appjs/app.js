function addWidgetsfrmHome() {
    var hBoxTop1 = new kony.ui.Box({
        "id": "hBoxTop1",
        "skin": "slHbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "percent": true,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "containerWeight": 100,
        "vExpand": false
    }, {});
    var btn1 = new kony.ui.Button({
        "id": "btn1",
        "skin": "slButtonGlossBlue",
        "focusSkin": "slButtonGlossRed",
        "isVisible": true,
        "text": "Button"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "containerWeight": 100,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "hExpand": true,
        "vExpand": false,
        "displayText": true
    }, {});
    hBoxTop1.add(
    btn1);
    var Image09958efedd61142 = new kony.ui.Image2({
        "id": "Image09958efedd61142",
        "isVisible": true,
        "src": "zoomout.png"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "containerWeight": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmHome.add(
    hBoxTop1, Image09958efedd61142);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "type": constants.FORM_TYPE_NATIVE,
        "title": null,
        "skin": "slForm",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "addWidgets": addWidgetsfrmHome
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
    frmHome.info = {};
};

function appmenuseq() {
    frmHome.show();
};

function callAppMenu() {
    var appMenu = [
        ["appmenuitemid1", "Item 1", "option1.png", appmenuseq,
        {}],
        ["appmenuitemid2", "Item 2", "option2.png", appmenuseq,
        {}],
        ["appmenuitemid3", "Item 3", "option3.png", appmenuseq,
        {}],
        ["appmenuitemid4", "Item 4", "option4.png", appmenuseq,
        {}]
    ];
    kony.application.createAppMenu("sampAppMenu", appMenu, "", "");
    kony.application.setCurrentAppMenu("sampAppMenu");
};

function makeCall(eventobject) {
    kony.phone.dial(eventobject.text);
};
kony.globals["appid"] = "Project0b0cd6";
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

function appInit(params) {
    frmHomeGlobals();
    //to generate adherePercentageStrictly, retainSpace, marginPaddingConsistency flags as true if the project is created in 5.5
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};
//This is a hack for postAppInit and NotesPopup.
function postAppInitCallBack() {};

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
    kony.theme.packagedthemes(["defaultTheme"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    loadResources();
};