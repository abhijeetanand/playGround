//Form JS File
function frm2_btn1250_onClick_seq0(eventobject) {
    loadModule1250.call(this);
};

function frm2_btn1251_onClick_seq0(eventobject) {
    loadModule1251.call(this);
};

function addWidgetsfrm2() {
    var label115058290429416 = new kony.ui.Label({
        "id": "label115058290429416",
        "isVisible": true,
        "text": "PQ-70718: This form is shown in the sccess call back after loading a module that has only forms defined in views tag",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
    var btn1250 = new kony.ui.Button({
        "id": "btn1250",
        "isVisible": true,
        "text": "PQ-70716: Click to test error code 1250",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm2_btn1250_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "toolTip": null
    });
    var lbl1250 = new kony.ui.Label({
        "id": "lbl1250",
        "isVisible": true,
        "text": null,
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "toolTip": null
    });
    var hbox68508508642753 = new kony.ui.Box({
        "id": "hbox68508508642753",
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
    hbox68508508642753.add(
    btn1250, lbl1250);
    var btn1251 = new kony.ui.Button({
        "id": "btn1251",
        "isVisible": true,
        "text": "PQ-70717: Click to test error code 1251",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm2_btn1251_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "toolTip": null
    });
    var lbl1251 = new kony.ui.Label({
        "id": "lbl1251",
        "isVisible": true,
        "text": null,
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "toolTip": null
    });
    var hbox68508508642754 = new kony.ui.Box({
        "id": "hbox68508508642754",
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
    hbox68508508642754.add(
    btn1251, lbl1251);
    frm2.add(
    label115058290429416, hbox68508508642753, hbox68508508642754);
};

function frm2Globals() {
    var MenuId = [];
    frm2 = new kony.ui.Form2({
        "id": "frm2",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
        "addWidgets": addWidgetsfrm2
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        }
    });
};
frm2Globals();