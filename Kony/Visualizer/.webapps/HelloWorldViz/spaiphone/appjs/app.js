function addWidgetsfrmHome() {
    var hBoxTop1 = new kony.ui.Box({
        "id": "hBoxTop1",
        "skin": "slHbox",
        "onClick": null,
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
        "onClick": null,
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
        "onDownloadComplete": null,
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
        "addWidgets": addWidgetsfrmHome,
        "init": null,
        "preShow": null,
        "postShow": null,
        "onHide": null,
        "onOrientationChange": null,
        "onDestroy": null
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
        },
        "onDeviceBack": null
    });
    frmHome.info = {};
};

function displayMWError() {
    kony.ui.Alert("Middleware Error ", null, "error", null, null);
};

function displaySessionError() {
    kony.ui.Alert("Session Expired .. Please re-login", null, "error", null, null);
};

function displayError(code, msg) {
    // Commented for SWA: kony.ui.Alert("Error Code: "..code .." Message: " ..msg,null,"error",null,null);
    kony.ui.Alert(code + "- " + msg, null, "error", null, null);
};
var mergeHeaders = function(httpHeaders, globalHeaders) {
        for (var attrName in globalHeaders) {
            httpHeaders[attrName] = globalHeaders[attrName];
        }
        return httpHeaders;
    };

function appmiddlewareinvokerasync(inputParam, callBack) {
    var url = appConfig.url;
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "wap";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam.httpheaders = globalhttpheaders;
        };
    };
    var connHandle = kony.net.invokeServiceAsync(url, inputParam, callBack)
    return connHandle;
};

function appmiddlewaresecureinvokerasync(inputParam, callBack) {
    var url = appConfig.secureurl;
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "wap";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = globalhttpheaders;
        };
    };
    var connHandle = kony.net.invokeServiceAsync(url, inputParam, callBack)
    return connHandle;
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

function skinsInit() {
    slHbox = "slHbox";
    slButtonGlossBlue = "slButtonGlossBlue";
    slButtonGlossRed = "slButtonGlossRed";
    slImage = "slImage";
    slForm = "slForm";
    slTitleBar = "slTitleBar";
    slPopup = "slPopup";
    slTitleBarTablet = "slTitleBarTablet"
};

function makeCall(eventobject) {
    kony.phone.dial(eventobject.text);
};
kony.globals["appid"] = "Project0b0cd6";
kony.globals["locales"] = [];
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
    skinsInit();
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
};function addWidgetspopupBottomPreview() {
    var segPopupPreviewbox = new kony.ui.Box({
        "id": "segPopupPreviewbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segPopupPreview = 	new kony.ui.SegmentedUI2({
        "id": "segPopupPreview",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
			"hbxsegpopupPreview": "hbxsegpopupPreview",
			"comment": "comment",
			"createdBy": "createdBy",
            "lastModifiedTime": "lastModifiedTime"
        },
        "rowTemplate": segPopupPreviewbox,
        "widgetSkin": "segTrans",
        "rowSkin": "segRowTrans",
        "rowFocusSkin": "segRowTrans",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "b4b4b400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "indicator": constants.SEGUI_NONE,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var createdBy = new kony.ui.Label({
        "id": "createdBy",
        "isVisible": true,
        "skin": "popNotesPersonLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lastModifiedTime = new kony.ui.Label({
        "id": "lastModifiedTime",
        "isVisible": true,
        "skin": "popNotesTimestampLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxsegpopupPreview = new kony.ui.Box({
        "id": "hbxsegpopupPreview",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 26,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxsegpopupPreview.add(
    createdBy, lastModifiedTime);
    var comment = new kony.ui.Label({
        "id": "comment",
        "isVisible": true,
        "skin": "notesPopNoteContent"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    segPopupPreviewbox.add(
    hbxsegpopupPreview, comment);
    popupBottomPreview.add(segPopupPreview);
};

function hdrBottomPopupFP() {
    var button1039885914163844 = new kony.ui.Button({
        "id": "button1039885914163844",
        "isVisible": true,
        "text": null,
        "skin": "popSwitchButton",
        "focusSkin": "popSwitchButtonFocus",
		"onClick": function(eventobject) {
            popupBottomPreview.dismiss();
            var currentfrm = kony.application.getCurrentForm();
            var notesId = currentfrm.info.notesId;
            var annotationDataPREVIEW = getAnnotations(notesId);
                var context_leftSwipe = {
                    "widget": currentfrm,
                    "anchor": "top",
                    "sizetoanchorwidth": false
                };
                //setContext method call  
                if (annotationDataPREVIEW !== null && annotationDataPREVIEW !== undefined && annotationDataPREVIEW["comments"] !== null) {
                    popupTopPreview.setContext(context_leftSwipe);
                    popupTopPreview.segPopupPreview.setData(annotationDataPREVIEW["comments"])
					popupTopPreview.containerHeight = popupHeightFP;
                    popupTopPreview.show();
					}
        }
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,		
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label1367604859562 = new kony.ui.Label({
        "id": "label1367604859562",
        "isVisible": true,
        "text": "FORM NOTES",
        "skin": "notesPopTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox1367604859570 = new kony.ui.Box({
        "id": "vbox1367604859570",
        "isVisible": true,
        "skin": "popTitleVbox",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 80,
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1367604859570.add(
    label1367604859562);
    var button1039885914163836 = new kony.ui.Button({
        "id": "button1039885914163836",
        "isVisible": true,
        "text": "X",
        "skin": "popCloseButton",
        "focusSkin": "popCloseButtonFocus",
		"onClick": function(eventobject) {
            popupBottomPreview.dismiss();
        }
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 1, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hbxpopupBottomHDRPreview = new kony.ui.Box({
        "id": "hbxpopupBottomHDRPreview",
        "isVisible": true,
        "skin": "popNotesTitleHbox",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxpopupBottomHDRPreview.add(
    button1039885914163844, vbox1367604859570, button1039885914163836);
}
//---------------------------------------------------------------------------------------------------------------------------------------------
function addWidgetspopupTopPreview() {
    var segPopupPreviewbox = new kony.ui.Box({
        "id": "segPopupPreviewbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segPopupPreview = 	new kony.ui.SegmentedUI2({
        "id": "segPopupPreview",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
			"hbxsegpopupPreview": "hbxsegpopupPreview",
			"comment": "comment",
			"createdBy": "createdBy",
            "lastModifiedTime": "lastModifiedTime"
        },
        "rowTemplate": segPopupPreviewbox,
        "widgetSkin": "segTrans",
        "rowSkin": "segRowTrans",
        "rowFocusSkin": "segRowTrans",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "b4b4b400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "indicator": constants.SEGUI_NONE,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var createdBy = new kony.ui.Label({
        "id": "createdBy",
        "isVisible": true,
        "skin": "popNotesPersonLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lastModifiedTime = new kony.ui.Label({
        "id": "lastModifiedTime",
        "isVisible": true,
        "skin": "popNotesTimestampLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxsegpopupPreview = new kony.ui.Box({
        "id": "hbxsegpopupPreview",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 26,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxsegpopupPreview.add(
    createdBy, lastModifiedTime);
    var comment = new kony.ui.Label({
        "id": "comment",
        "isVisible": true,
        "skin": "notesPopNoteContent"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    segPopupPreviewbox.add(
    hbxsegpopupPreview, comment);
    popupTopPreview.add(
    segPopupPreview);
};

function hdrTopPopupFP() {
    var button1039885914163844 = new kony.ui.Button({
        "id": "button1039885914163844",
        "isVisible": true,
        "text": null,
        "skin": "popSwitchButton",
        "focusSkin": "popSwitchButtonFocus",
		"onClick": function(eventobject) {
            popupTopPreview.dismiss();
            var currentfrm = kony.application.getCurrentForm();
            var notesId = currentfrm.info.notesId;
            var annotationDataPREVIEW = getAnnotations(notesId);
            var context_bottom = {
                "widget": currentfrm,
                "anchor": "bottom",
                "sizetoanchorwidth": false
            };
            //setContext method call 
            if (annotationDataPREVIEW !== null && annotationDataPREVIEW !== undefined && annotationDataPREVIEW["comments"] !== null) {
                popupBottomPreview.segPopupPreview.setData(annotationDataPREVIEW["comments"]);
                popupBottomPreview.setContext(context_bottom);
				popupBottomPreview.containerHeight = popupHeightFP;
                popupBottomPreview.show();
            }
        }
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label1367604859562 = new kony.ui.Label({
        "id": "label1367604859562",
        "isVisible": true,
        "text": "FORM NOTES",
        "skin": "notesPopTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox1367604859570 = new kony.ui.Box({
        "id": "vbox1367604859570",
        "isVisible": true,
        "skin": "popTitleVbox",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 80,
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1367604859570.add(
    label1367604859562);
    var button1039885914163836 = new kony.ui.Button({
        "id": "button1039885914163836",
        "isVisible": true,
        "text": "X",
        "skin": "popCloseButton",
        "focusSkin": "popCloseButtonFocus",
		"onClick": function(eventobject) {
            popupTopPreview.dismiss();
        }
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,		
        "padding": [0, 1, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hbxpopupTopHDRPreview = new kony.ui.Box({
        "id": "hbxpopupTopHDRPreview",
        "isVisible": true,
        "skin": "popNotesTitleHbox",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxpopupTopHDRPreview.add(
    button1039885914163844, vbox1367604859570, button1039885914163836);
}
//startup.js file
function apppostappinitFuncPreview() {
	
    hdrBottomPopupFP();
    hdrTopPopupFP();

	
    popupBottomPreview = new kony.ui.Popup({
        "id": "popupBottomPreview",
        "title": null,
        "headers": [hbxpopupBottomHDRPreview],
        "transparencyBehindThePopup": 100,
        "skin": "notesPopBG",
        "isModal": false,
        "addWidgets": addWidgetspopupBottomPreview
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 100,
        "containerHeight": 45,
        "containerHeightReference": constants.HEIGHT_BY_DEVICE_REFERENCE,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_PAN,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
    popupTopPreview = new kony.ui.Popup({
        "id": "popupTopPreview",
        "title": null,
        "footers": [hbxpopupTopHDRPreview],
        "transparencyBehindThePopup": 100,
        "skin": "notesPopBG",
        "isModal": false,
        "addWidgets": addWidgetspopupTopPreview
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 100,
        "containerHeight": 45,
        "containerHeightReference": constants.HEIGHT_BY_DEVICE_REFERENCE,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_PAN,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
    var x = {
        fingers: 2,
        pressDuration: 1
    };
    try {
        kony.application.setGestureRecognizerForAllForms(3, x, function(widgetRef, gestureInfo) {
            if (kony.os.toNumber(gestureInfo["gestureType"]) == 3) {
			var currentfrmFP = kony.application.getCurrentForm();	
			var notesId = currentfrmFP.info.notesId;
			var annotationDataPREVIEW = getAnnotations(notesId);	
			popupHeightFP = 40;
			
			if (annotationDataPREVIEW !== null && annotationDataPREVIEW !== undefined && annotationDataPREVIEW["comments"] !== null) {
				var annLength = annotationDataPREVIEW["comments"].length;
				
				switch(annLength)
				{
					case 1:
						popupHeightFP = 20;
						break;
					case 2:
						popupHeightFP = 30;
						break;
					case 3:
						popupHeightFP = 30;
						break;
					default:
						popupHeightFP = 40;
				}
			
			}
			
			
                var context_leftSwipe = {
                    "widget": currentfrmFP,
                    "anchor": "bottom",
                    "sizetoanchorwidth": false
                };
                //setContext method call  
                if (annotationDataPREVIEW !== null && annotationDataPREVIEW !== undefined && annotationDataPREVIEW["comments"] !== null) {
                    popupBottomPreview.setContext(context_leftSwipe);
                    popupBottomPreview.segPopupPreview.setData(annotationDataPREVIEW["comments"])
					popupBottomPreview.containerHeight = popupHeightFP;
                    popupBottomPreview.show();
                }
            }
        });
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackSingleTapGesture:" + err.message);
    }
    var y = {
        fingers: 2,
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
};
//FP Appended KAnnotations.js-----------------------------------------------------------
function getAnnotations(annotationId) {
    var annJSON = {};
    return annJSON[annotationId];
}