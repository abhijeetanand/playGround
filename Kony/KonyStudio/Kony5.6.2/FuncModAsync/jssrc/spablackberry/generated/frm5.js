//Form JS File
function frm5_button115052332236390_onClick_seq0(eventobject) {
    pop5.show();
};

function frm5_button115052332240616_onClick_seq0(eventobject) {
    chngtxt011.call(this);
};

function frm5_button115052332241221_onClick_seq0(eventobject) {
    chngtxtreltv011();
};

function addWidgetsfrm5() {
    var label115052332236388 = new kony.ui.Label({
        "id": "label115052332236388",
        "isVisible": true,
        "text": "PQ-70727,PQ-70729:Views and jsModules tags defined",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var button115052332236390 = new kony.ui.Button({
        "id": "button115052332236390",
        "isVisible": true,
        "text": "click to invoke popup",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm5_button115052332236390_onClick_seq0
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
    var button115052332240616 = new kony.ui.Button({
        "id": "button115052332240616",
        "isVisible": true,
        "text": "click to change text",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm5_button115052332240616_onClick_seq0
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
        "containerWeight": 31
    }, {});
    var label115052332240617 = new kony.ui.Label({
        "id": "label115052332240617",
        "isVisible": true,
        "text": "Label",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 69
    }, {
        "textCopyable": false
    });
    var hbox115052332240615 = new kony.ui.Box({
        "id": "hbox115052332240615",
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
    hbox115052332240615.add(
    button115052332240616, label115052332240617);
    var button115052332241221 = new kony.ui.Button({
        "id": "button115052332241221",
        "isVisible": true,
        "text": "click to change text",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm5_button115052332241221_onClick_seq0
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
        "containerWeight": 31
    }, {});
    var label115052332241223 = new kony.ui.Label({
        "id": "label115052332241223",
        "isVisible": true,
        "text": "Label",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 69
    }, {
        "textCopyable": false
    });
    var hbox115052332241219 = new kony.ui.Box({
        "id": "hbox115052332241219",
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
    hbox115052332241219.add(
    button115052332241221, label115052332241223);
    var label115052332249918 = new kony.ui.Label({
        "id": "label115052332249918",
        "isVisible": true,
        "text": "Label",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frm5.add(
    label115052332236388, button115052332236390, hbox115052332240615, hbox115052332241219, label115052332249918);
};

function frm5Globals() {
    var MenuId = [];
    frm5 = new kony.ui.Form2({
        "id": "frm5",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox115052332237112],
        "footers": [hbox115052332238488],
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
        "addWidgets": addWidgetsfrm5
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
frm5Globals();