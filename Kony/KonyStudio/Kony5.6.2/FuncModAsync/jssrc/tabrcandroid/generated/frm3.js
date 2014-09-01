//Form JS File
function frm3_button115058290429430_onClick_seq0(eventobject) {
    pop3.show();
};

function frm3_cust1custom115052332257157_slideCheck_seq0(l, h) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "slidecheck!!",
        "alertType": constants.ALERT_TYPE_ERROR,
        "alertTitle": "",
        "yesLabel": "Yes",
        "noLabel": "",
        "alertIcon": "",
        "alertHandler": null
    }, {});
};

function addWidgetsfrm3() {
    var label115058290429423 = new kony.ui.Label({
        "id": "label115058290429423",
        "isVisible": true,
        "text": "PQ-70703: views tag defined in a module with Forms + Templates + Popups in it",
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
    var button115058290429430 = new kony.ui.Button({
        "id": "button115058290429430",
        "isVisible": true,
        "text": "Click to invoke popup",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm3_button115058290429430_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var label115052332257165 = new kony.ui.Label({
        "id": "label115052332257165",
        "isVisible": true,
        "text": "PQ-70679: Function Modules Feature by adding Custom widgets to the application",
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
    var cust1custom115052332257157 = new com.kny.cust1({
        "id": "cust1custom115052332257157",
        "image": null,
        "isVisible": true,
        "hExpand": true,
        "vExpand": false,
        "low": 0,
        "high": 100,
        "slideCheck": frm3_cust1custom115052332257157_slideCheck_seq0,
        "aInt": 111,
        "aLong": 222,
        "aFloat": 10.10,
        "aDouble": 20.20,
        "aBoolean": false,
        "aIntList": 1,
        "aStringList": "sample1"
    }, {
        "widgetAlign": 5,
        "containerWeight": 6,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "cust1"
    });
    frm3.add(
    label115058290429423, button115058290429430, label115052332257165, cust1custom115052332257157);
};

function frm3Globals() {
    var MenuId = [];
    frm3 = new kony.ui.Form2({
        "id": "frm3",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox115058290429425],
        "footers": [hbox115058290429427],
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
        "addWidgets": addWidgetsfrm3
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "titleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "headerOverlap": false,
        "footerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};
frm3Globals();