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

function addWidgetsfrm4_hbox115058290429435() {
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    var label115058290429437 = new kony.ui.Label({
        "id": "label115058290429437",
        "isVisible": true,
        "text": "Label",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var hbox115058290429435 = new kony.ui.Box({
        "id": "hbox115058290429435",
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
    hbox115058290429435.add(
    button115058290429436, label115058290429437);
    return hbox115058290429435;
};

function addWidgetsfrm4() {
    var label115058290429434 = new kony.ui.Label({
        "id": "label115058290429434",
        "isVisible": true,
        "text": "PQ-70706: Views tag defined with forms in it and jsModules tag defined with JS files in it",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
    }, {});
    var label115037436768788 = new kony.ui.Label({
        "id": "label115037436768788",
        "isVisible": true,
        "text": "PQ-70680:Verify Function Modules Feature by adding FFI to the application",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
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
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    var richResult = new kony.ui.RichText({
        "id": "richResult",
        "isVisible": true,
        "text": null,
        "skin": "rchtxtskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "preOnclickJS": null,
        "postOnclickJS": null
    });
    var hbox115058290429435 = addWidgetsfrm4_hbox115058290429435();
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
        "submitSecure": false,
        "noCache": true,
        "secureData": false,
        "captureGPS": false,
        "onLoadJS": null,
        "unLoadJS": null,
        "titleBar": true
    });
};