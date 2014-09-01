//Form JS File
function pop4_button115058290429441_onClick_seq0(eventobject) {
    chngtxt2();
};

function pop4_button115058290429449_onClick_seq0(eventobject) {
    readheader();
};

function pop4_button115058290429442_onClick_seq0(eventobject) {
    pop4.dismiss();
};

function addWidgetspop4() {
    var label115058290429438 = new kony.ui.Label({
        "id": "label115058290429438",
        "isVisible": true,
        "text": "PQ-70726: Views tag defined with popups in it and jsModules tag defined with JS files relative path in it",
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
    var button115058290429441 = new kony.ui.Button({
        "id": "button115058290429441",
        "isVisible": true,
        "text": "click to assign text to label",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": pop4_button115058290429441_onClick_seq0
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
        "containerWeight": 40
    }, {});
    var label115058290429440 = new kony.ui.Label({
        "id": "label115058290429440",
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
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var hbox115058290429439 = new kony.ui.Box({
        "id": "hbox115058290429439",
        "isVisible": true,
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
    hbox115058290429439.add(
    button115058290429441, label115058290429440);
    var button115058290429449 = new kony.ui.Button({
        "id": "button115058290429449",
        "isVisible": true,
        "text": "Click to read header",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": pop4_button115058290429449_onClick_seq0
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
        "containerWeight": 40
    }, {});
    var label115058290429450 = new kony.ui.Label({
        "id": "label115058290429450",
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
        "containerWeight": 60
    }, {
        "textCopyable": false
    });
    var hbox115058290429448 = new kony.ui.Box({
        "id": "hbox115058290429448",
        "isVisible": true,
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
    hbox115058290429448.add(
    button115058290429449, label115058290429450);
    var button115058290429442 = new kony.ui.Button({
        "id": "button115058290429442",
        "isVisible": true,
        "text": "Dismiss",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": pop4_button115058290429442_onClick_seq0
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
    pop4.add(
    label115058290429438, hbox115058290429439, hbox115058290429448, button115058290429442);
};

function pop4Globals() {
    pop4 = new kony.ui.Popup({
        "id": "pop4",
        "title": null,
        "headers": [hbox115058290429443],
        "footers": [hbox115058290429445],
        "transparencyBehindThePopup": 100,
        "skin": "frmskn",
        "isModal": false,
        "addWidgets": addWidgetspop4
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_RESIZE,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
};
pop4Globals();