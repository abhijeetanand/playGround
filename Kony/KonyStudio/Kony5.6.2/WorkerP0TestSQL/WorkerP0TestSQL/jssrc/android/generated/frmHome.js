//Form JS File
function frmHome_frmHome_init_seq0(eventobject, neworientation) {
    init_segui_set_data.call(this);
};

function frmHome_button284225108340_onClick_seq0(eventobject) {
    frmMain.show();
};

function frmHome_button284225108341_onClick_seq0(eventobject) {
    frmNonUI.show();
};

function frmHome_button10722091433_onClick_seq0(eventobject) {
    frmSQL.show();
};

function addWidgetsfrmHome() {
    var button284225108340 = new kony.ui.Button({
        "id": "button284225108340",
        "isVisible": true,
        "text": "Basic",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button284225108340_onClick_seq0
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
    var button284225108341 = new kony.ui.Button({
        "id": "button284225108341",
        "isVisible": true,
        "text": "NonUI",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button284225108341_onClick_seq0
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
    var button10722091433 = new kony.ui.Button({
        "id": "button10722091433",
        "isVisible": true,
        "text": "SQL",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button10722091433_onClick_seq0
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
    button284225108340, button284225108341, button10722091433);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmHome_frmHome_init_seq0,
        "addWidgets": addWidgetsfrmHome
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