//Form JS File
function frmEvents_frmEvents_init_seq0(eventobject, neworientation) {
    loadModulInit.call(this);
};

function frmEvents_frmEvents_preshow_seq0(eventobject, neworientation) {
    loadModulprShw.call(this);
};

function frmEvents_frmEvents_postshow_seq0(eventobject, neworientation) {
    loadModulpstShw.call(this);
};

function frmEvents_frmEvents_onhide_seq0(eventobject, neworientation) {
    loadModulonHide.call(this);
};

function frmEvents_frmEvents_onOrientationChange_seq0(eventobject, neworientation) {
    loadModulonOrntchng.call(this);
};

function frmEvents_button115037436768677_onClick_seq0(eventobject) {
    initLoad.call(this);
};

function frmEvents_button115037436768678_onClick_seq0(eventobject) {
    preShwLoad.call(this);
};

function frmEvents_button115037436768679_onClick_seq0(eventobject) {
    PostShwLoad.call(this);
};

function frmEvents_button115037436768680_onClick_seq0(eventobject) {
    onHideLoad.call(this);
};

function frmEvents_button115037436768681_onClick_seq0(eventobject) {
    orientchngLoad.call(this);
};

function frmEvents_button115037436768705_onClick_seq0(eventobject) {
    dummy.show();
};

function frmEvents_button115037436768216_onClick_seq0(eventobject) {
    dummy.destroy();
};

function frmEvents_button115037436768700_onClick_seq0(eventobject) {
    DestryLoad.call(this);
};

function frmEvents_button115037436768682_onClick_seq0(eventobject) {
    appsrvcEvnt.call(this);
};

function addWidgetsfrmEvents() {
    var label115037436758155 = new kony.ui.Label({
        "id": "label115037436758155",
        "isVisible": true,
        "text": "PQ-70734: This fom is loaded in post Appinit event",
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
    var button115037436768677 = new kony.ui.Button({
        "id": "button115037436768677",
        "isVisible": true,
        "text": "PQ-70737: Init",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmEvents_button115037436768677_onClick_seq0
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
    var label115037436758158 = new kony.ui.Label({
        "id": "label115037436758158",
        "isVisible": true,
        "text": "Label",
        "skin": "lbl2"
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
    var hbox115037436758156 = new kony.ui.Box({
        "id": "hbox115037436758156",
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
    hbox115037436758156.add(
    button115037436768677, label115037436758158);
    var button115037436768678 = new kony.ui.Button({
        "id": "button115037436768678",
        "isVisible": true,
        "text": "PQ-70738:preShow",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmEvents_button115037436768678_onClick_seq0
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
    var label115037436758800 = new kony.ui.Label({
        "id": "label115037436758800",
        "isVisible": true,
        "text": "Label",
        "skin": "lbl2"
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
    var hbox115037436758796 = new kony.ui.Box({
        "id": "hbox115037436758796",
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
    hbox115037436758796.add(
    button115037436768678, label115037436758800);
    var button115037436768679 = new kony.ui.Button({
        "id": "button115037436768679",
        "isVisible": true,
        "text": "PQ-70739: postShow",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmEvents_button115037436768679_onClick_seq0
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
    var label115037436758836 = new kony.ui.Label({
        "id": "label115037436758836",
        "isVisible": true,
        "text": "Label",
        "skin": "lbl2"
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
    var hbox115037436758832 = new kony.ui.Box({
        "id": "hbox115037436758832",
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
    hbox115037436758832.add(
    button115037436768679, label115037436758836);
    var button115037436768680 = new kony.ui.Button({
        "id": "button115037436768680",
        "isVisible": true,
        "text": "PQ-70740: onHide",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmEvents_button115037436768680_onClick_seq0
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
    var label115037436758872 = new kony.ui.Label({
        "id": "label115037436758872",
        "isVisible": true,
        "text": "Label",
        "skin": "lbl2"
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
    var hbox115037436758868 = new kony.ui.Box({
        "id": "hbox115037436758868",
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
    hbox115037436758868.add(
    button115037436768680, label115037436758872);
    var button115037436768681 = new kony.ui.Button({
        "id": "button115037436768681",
        "isVisible": true,
        "text": "PQ-70742: onOrientationChange",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmEvents_button115037436768681_onClick_seq0
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
    var label115037436760156 = new kony.ui.Label({
        "id": "label115037436760156",
        "isVisible": true,
        "text": "Label",
        "skin": "lbl2"
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
    var hbox115037436760152 = new kony.ui.Box({
        "id": "hbox115037436760152",
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
    hbox115037436760152.add(
    button115037436768681, label115037436760156);
    var button115037436768705 = new kony.ui.Button({
        "id": "button115037436768705",
        "isVisible": true,
        "text": "dummy",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmEvents_button115037436768705_onClick_seq0
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
        "containerWeight": 16
    }, {});
    var button115037436768216 = new kony.ui.Button({
        "id": "button115037436768216",
        "isVisible": true,
        "text": "Click to destroy",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmEvents_button115037436768216_onClick_seq0
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
        "containerWeight": 20
    }, {});
    var button115037436768700 = new kony.ui.Button({
        "id": "button115037436768700",
        "isVisible": true,
        "text": "PQ-70741: Fire Event",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmEvents_button115037436768700_onClick_seq0
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
        "containerWeight": 20
    }, {});
    var label115037436768217 = new kony.ui.Label({
        "id": "label115037436768217",
        "isVisible": true,
        "text": "Label",
        "skin": "lbl2"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 43
    }, {
        "textCopyable": false
    });
    var hbox115037436768215 = new kony.ui.Box({
        "id": "hbox115037436768215",
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
    hbox115037436768215.add(
    button115037436768705, button115037436768216, button115037436768700, label115037436768217);
    var button115037436768682 = new kony.ui.Button({
        "id": "button115037436768682",
        "isVisible": true,
        "text": "PQ-70735: Appservice",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmEvents_button115037436768682_onClick_seq0
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
    var label115037436768237 = new kony.ui.Label({
        "id": "label115037436768237",
        "isVisible": true,
        "text": "Label",
        "skin": "lbl2"
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
    var hbox115037436768219 = new kony.ui.Box({
        "id": "hbox115037436768219",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115037436768219.add(
    button115037436768682, label115037436768237);
    frmEvents.add(
    label115037436758155, hbox115037436758156, hbox115037436758796, hbox115037436758832, hbox115037436758868, hbox115037436760152, hbox115037436768215, hbox115037436768219);
};

function frmEventsGlobals() {
    var MenuId = [];
    frmEvents = new kony.ui.Form2({
        "id": "frmEvents",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
        "init": frmEvents_frmEvents_init_seq0,
        "preShow": frmEvents_frmEvents_preshow_seq0,
        "postShow": frmEvents_frmEvents_postshow_seq0,
        "onHide": frmEvents_frmEvents_onhide_seq0,
        "onOrientationChange": frmEvents_frmEvents_onOrientationChange_seq0,
        "addWidgets": addWidgetsfrmEvents
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
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
frmEventsGlobals();