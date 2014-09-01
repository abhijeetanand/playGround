//Form JS File
function frm4_button115058290429436_onClick_seq0(eventobject) {
    chngtxt.call(this);
};

function frm4_button115037436768703_onClick_seq0(eventobject) {
    frm4.richResult.text = FFIWin.add(11, 11);
};

function frm4_button115037436768707_onClick_seq0(eventobject) {
    onSubmitJSMethod.call(this);
};

function addWidgetsfrm4() {
    var label115058290429434 = new kony.ui.Label({
        "id": "label115058290429434",
        "isVisible": true,
        "text": "PQ-70724: Views tag defined with forms in it and jsModules tag defined with JS files in it",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button115058290429436 = new kony.ui.Button({
        "id": "button115058290429436",
        "isVisible": true,
        "text": "click to assign text to label",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm4_button115058290429436_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var label115058290429437 = new kony.ui.Label({
        "id": "label115058290429437",
        "isVisible": true,
        "text": "Label",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var hbox115058290429435 = new kony.ui.Box({
        "id": "hbox115058290429435",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
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
    }, {});
    hbox115058290429435.add(
    button115058290429436, label115058290429437);
    var label115037436768788 = new kony.ui.Label({
        "id": "label115037436768788",
        "isVisible": true,
        "text": "PQ-70680:Verify Function Modules Feature by adding FFI to the application",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button115037436768703 = new kony.ui.Button({
        "id": "button115037436768703",
        "isVisible": true,
        "text": "FFI for Windows",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm4_button115037436768703_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var button115037436768707 = new kony.ui.Button({
        "id": "button115037436768707",
        "isVisible": true,
        "text": "FFi for IOS and Android",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm4_button115037436768707_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var richResult = new kony.ui.RichText({
        "id": "richResult",
        "isVisible": true,
        "text": null,
        "skin": "rchtxtskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {});
    frm4.add(
    label115058290429434, hbox115058290429435, label115037436768788, button115037436768703, button115037436768707, richResult);
};

function frm4Globals() {
    var MenuId = [];
    frm4 = new kony.ui.Form2({
        "id": "frm4",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
        "addWidgets": addWidgetsfrm4
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["label115058290429434", "hbox115058290429435", "button115058290429436", "label115058290429437", "button115037436768703", "richResult", "button115037436768707", "label115037436768788"]
    });
};
frm4Globals();