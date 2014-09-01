//Form JS File
function frmHome_button68508508644690_onClick_seq0(eventobject) {
    sameFileInvoke.call(this);
};

function frmHome_button68508508644772_onClick_seq0(eventobject) {
    oneDependentInvoke.call(this);
};

function frmHome_button68508508644686_onClick_seq0(eventobject) {
    twoDependentInvoke.call(this);
};

function frmHome_button68508508645693_onClick_seq0(eventobject) {
    checkoutInvoke.call(this);
};

function frmHome_button68508508646150_onClick_seq0(eventobject) {
    checkoutDependentInvoke.call(this);
};

function frmHome_button68508508646435_onClick_seq0(eventobject) {
    dependentNotLoadedInvoke.call(this);
};

function addWidgetsfrmHome_hbox68508508644935() {
    var label68508508644936 = new kony.ui.Label({
        "id": "label68508508644936",
        "isVisible": true,
        "text": "Define a module \"cart\" using define() , Access it using require() in same js file",
        "skin": "skinLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var button68508508644690 = new kony.ui.Button({
        "id": "button68508508644690",
        "isVisible": true,
        "text": "Test",
        "skin": "skinButton",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508644690_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    var hbox68508508644935 = new kony.ui.Box({
        "id": "hbox68508508644935",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox68508508644935.add(
    label68508508644936, button68508508644690);
    return hbox68508508644935;
};

function addWidgetsfrmHome_hbox68508508644937() {
    var label68508508644959 = new kony.ui.Label({
        "id": "label68508508644959",
        "isVisible": true,
        "text": "Define module \"inventory\" using define() which is dependent on module \"cart\", Access \"inventory\" using require() in same js file",
        "skin": "skinLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var button68508508644772 = new kony.ui.Button({
        "id": "button68508508644772",
        "isVisible": true,
        "text": "Test",
        "skin": "skinButton",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508644772_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    var hbox68508508644937 = new kony.ui.Box({
        "id": "hbox68508508644937",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox68508508644937.add(
    label68508508644959, button68508508644772);
    return hbox68508508644937;
};

function addWidgetsfrmHome_hbox68508508645142() {
    var label68508508645224 = new kony.ui.Label({
        "id": "label68508508645224",
        "isVisible": true,
        "text": "Define module \"checkout\" using define() which is dependent on module \"cart\",\"inventory\" and then access \"checkout\" using require() in same js file",
        "skin": "skinLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var button68508508644686 = new kony.ui.Button({
        "id": "button68508508644686",
        "isVisible": true,
        "text": "Test",
        "skin": "skinButton",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508644686_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    var hbox68508508645142 = new kony.ui.Box({
        "id": "hbox68508508645142",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox68508508645142.add(
    label68508508645224, button68508508644686);
    return hbox68508508645142;
};

function addWidgetsfrmHome_hbox68508508645447() {
    var label68508508645505 = new kony.ui.Label({
        "id": "label68508508645505",
        "isVisible": true,
        "text": "Define module \"checkout\" using define() which is dependent on module \"cart\",\"inventory\" which are defined in other js file but loaded in same functional module, Access \"checkout\" using require() in same js file",
        "skin": "skinLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var button68508508645693 = new kony.ui.Button({
        "id": "button68508508645693",
        "isVisible": true,
        "text": "Test",
        "skin": "skinButton",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508645693_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    var hbox68508508645447 = new kony.ui.Box({
        "id": "hbox68508508645447",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox68508508645447.add(
    label68508508645505, button68508508645693);
    return hbox68508508645447;
};

function addWidgetsfrmHome_hbox68508508646020() {
    var label68508508646050 = new kony.ui.Label({
        "id": "label68508508646050",
        "isVisible": true,
        "text": "Define module \"checkout\" using define() which is dependent on module \"cart\",\"inventory\" which are defined in other js file and loaded as part of dependent functional module, Access \"checkout\" using require() in same js file",
        "skin": "skinLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var button68508508646150 = new kony.ui.Button({
        "id": "button68508508646150",
        "isVisible": true,
        "text": "Test",
        "skin": "skinButton",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508646150_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    var hbox68508508646020 = new kony.ui.Box({
        "id": "hbox68508508646020",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox68508508646020.add(
    label68508508646050, button68508508646150);
    return hbox68508508646020;
};

function addWidgetsfrmHome_hbox68508508646245() {
    var label68508508646263 = new kony.ui.Label({
        "id": "label68508508646263",
        "isVisible": true,
        "text": "Require with dependent define modules where the JS files that the define functions are present in is not defined",
        "skin": "skinLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 80,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var button68508508646435 = new kony.ui.Button({
        "id": "button68508508646435",
        "isVisible": true,
        "text": "Test",
        "skin": "skinButton",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508646435_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 20,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    var hbox68508508646245 = new kony.ui.Box({
        "id": "hbox68508508646245",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    hbox68508508646245.add(
    label68508508646263, button68508508646435);
    return hbox68508508646245;
};

function addWidgetsfrmHome() {
    var hbox68508508644935 = addWidgetsfrmHome_hbox68508508644935();
    var hbox68508508644937 = addWidgetsfrmHome_hbox68508508644937();
    var hbox68508508645142 = addWidgetsfrmHome_hbox68508508645142();
    var hbox68508508645447 = addWidgetsfrmHome_hbox68508508645447();
    var hbox68508508646020 = addWidgetsfrmHome_hbox68508508646020();
    var hbox68508508646245 = addWidgetsfrmHome_hbox68508508646245();
    frmHome.add(
    hbox68508508644935, hbox68508508644937, hbox68508508645142, hbox68508508645447, hbox68508508646020, hbox68508508646245);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "skinForm",
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "submitSecure": false,
        "noCache": true,
        "secureData": false,
        "captureGPS": false,
        "onLoadJS": null,
        "unLoadJS": null,
        "titleBar": true
    });
};