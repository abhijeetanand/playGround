//Form JS File
function frmHome_button68508508643449_onClick_seq0(eventobject) {
    frm1.show();
};

function frmHome_button68508508643458_onClick_seq0(eventobject) {
    invokeNotLoadedForm.call(this);
};

function frmHome_button68508508643461_onClick_seq0(eventobject) {
    invokeNotLoadedJSFile.call(this);
};

function frmHome_button68508508643464_onClick_seq0(eventobject) {
    initFunctionNotPresent.call(this);
};

function frmHome_button68508508643465_onClick_seq0(eventobject) {
    invalidLoadOnStartUp.call(this);
};

function frmHome_button68508508643466_onClick_seq0(eventobject) {
    frm5.show();
};

function addWidgetsfrmHome() {
    var button68508508643449 = new kony.ui.Button({
        "id": "button68508508643449",
        "isVisible": true,
        "text": "PQ-70746, PQ-70747:Same JS file name given in two different modules",
        "skin": "skinBtn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508643449_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button68508508643458 = new kony.ui.Button({
        "id": "button68508508643458",
        "isVisible": true,
        "text": "PQ-70748:Call a Form without loading the module that the form is present in",
        "skin": "skinBtn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508643458_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button68508508643461 = new kony.ui.Button({
        "id": "button68508508643461",
        "isVisible": true,
        "text": "PQ-70749: Call a function in a JS file without loading the module that has the JS file present in it",
        "skin": "skinBtn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508643461_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button68508508643464 = new kony.ui.Button({
        "id": "button68508508643464",
        "isVisible": true,
        "text": "PQ-70750:init parameter defined in the functionalModule tag with a function name that is not present",
        "skin": "skinBtn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508643464_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button68508508643465 = new kony.ui.Button({
        "id": "button68508508643465",
        "isVisible": true,
        "text": "PQ-70751:loadOnStartUp paramter defined with an invalid value",
        "skin": "skinBtn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508643465_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button68508508643466 = new kony.ui.Button({
        "id": "button68508508643466",
        "isVisible": true,
        "text": "PQ-70752:Dependent module defined with a module name that is not present in the XML",
        "skin": "skinBtn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button68508508643466_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmHome.add(
    button68508508643449, button68508508643458, button68508508643461, button68508508643464, button68508508643465, button68508508643466);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};