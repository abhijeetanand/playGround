//Form JS File
function frm7_button115052332257097_onClick_seq0(eventobject) {
    pop6.show();
};

function frm7_button115052332257191_onClick_seq0(eventobject) {
    dummyfunctn.call(this);
};

function addWidgetsfrm7() {
    var label115052332257040 = new kony.ui.Label({
        "id": "label115052332257040",
        "isVisible": true,
        "text": "PQ-70732,PQ-70671: Dependent module defined and the dependent module another dependent module",
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
    var label115052332257098 = new kony.ui.Label({
        "id": "label115052332257098",
        "isVisible": true,
        "text": "here, header,footer,popup and form are defined in different dependent modules",
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
    var button115052332257097 = new kony.ui.Button({
        "id": "button115052332257097",
        "isVisible": true,
        "text": "click to invoke popup",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm7_button115052332257097_onClick_seq0
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
    var label115052332257190 = new kony.ui.Label({
        "id": "label115052332257190",
        "isVisible": true,
        "text": "PQ-70682: Verify the behavior of a module which is defined in the application but not in functionModules.xml",
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
    var button115052332257191 = new kony.ui.Button({
        "id": "button115052332257191",
        "isVisible": true,
        "text": "Application Crashes onclick of this button",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm7_button115052332257191_onClick_seq0
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
    frm7.add(
    label115052332257040, label115052332257098, button115052332257097, label115052332257190, button115052332257191);
};

function frm7Globals() {
    var MenuId = [];
    frm7 = new kony.ui.Form2({
        "id": "frm7",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox115052332254839],
        "footers": [hbox115052332256527],
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
        "addWidgets": addWidgetsfrm7
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};