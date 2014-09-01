//Form JS File
function frmsqlapis_button1587561095306399_onClick_seq0(eventobject) {
    frmSQL1.show();
};

function addWidgetsfrmsqlapis() {
    var button1587561095306399 = new kony.ui.Button({
        "id": "button1587561095306399",
        "isVisible": true,
        "text": "SQL 1",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmsqlapis_button1587561095306399_onClick_seq0
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
    frmsqlapis.add(
    button1587561095306399);
};

function frmsqlapisGlobals() {
    var MenuId = [];
    frmsqlapis = new kony.ui.Form2({
        "id": "frmsqlapis",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmsqlapis
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