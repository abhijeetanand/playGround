//Form JS File
function frmHome_button115058290426655_onClick_seq0(eventobject) {
    loadModtrue.call(this);
};

function frmHome_button115058290427525_onClick_seq0(eventobject) {
    loadModfalse.call(this);
};

function frmHome_button115058290427561_onClick_seq0(eventobject) {
    loadpopup.call(this);
};

function frmHome_button115058290427597_onClick_seq0(eventobject) {
    loadviews.call(this);
};

function frmHome_button115058290429431_onClick_seq0(eventobject) {
    loadModule.call(this);
};

function frmHome_button115058290427633_onClick_seq0(eventobject) {
    chngSkn.call(this);
};

function frmHome_button115058290429432_onClick_seq0(eventobject) {
    loadModulereltv.call(this);
};

function frmHome_button115058290427669_onClick_seq0(eventobject) {
    chngSkn1();
};

function frmHome_button115058290427705_onClick_seq0(eventobject) {
    loadModulviewMod.call(this);
};

function frmHome_button115058290427741_onClick_seq0(eventobject) {
    loadModulPopHdrMod.call(this);
};

function frmHome_button115052332230020_onClick_seq0(eventobject) {
    loadModulViewJsmod.call(this);
};

function frmHome_button115052332230224_onClick_seq0(eventobject) {
    loadModul2dpnds.call(this);
};

function frmHome_button115052332250344_onClick_seq0(eventobject) {
    frm7.show();
};

function frmHome_button115037436767680_onClick_seq0(eventobject) {
    frmEvents.show();
};

function addWidgetsfrmHome() {
    var label115058290426654 = new kony.ui.Label({
        "id": "label115058290426654",
        "isVisible": true,
        "text": "Success call back",
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
    var button115058290426655 = new kony.ui.Button({
        "id": "button115058290426655",
        "isVisible": true,
        "text": "frm1",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115058290426655_onClick_seq0
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
    var hbox115058290426653 = new kony.ui.Box({
        "id": "hbox115058290426653",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115058290426653.add(
    label115058290426654, button115058290426655);
    var label115058290427523 = new kony.ui.Label({
        "id": "label115058290427523",
        "isVisible": true,
        "text": "views tag defined with only forms and error callback",
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
    var button115058290427525 = new kony.ui.Button({
        "id": "button115058290427525",
        "isVisible": true,
        "text": "frm2",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115058290427525_onClick_seq0
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
    var hbox115058290427521 = new kony.ui.Box({
        "id": "hbox115058290427521",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115058290427521.add(
    label115058290427523, button115058290427525);
    var label115058290427559 = new kony.ui.Label({
        "id": "label115058290427559",
        "isVisible": true,
        "text": "views tag defined in a module with only Popups in it",
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
    var button115058290427561 = new kony.ui.Button({
        "id": "button115058290427561",
        "isVisible": true,
        "text": "pop1",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115058290427561_onClick_seq0
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
    var hbox115058290427557 = new kony.ui.Box({
        "id": "hbox115058290427557",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115058290427557.add(
    label115058290427559, button115058290427561);
    var label115058290427595 = new kony.ui.Label({
        "id": "label115058290427595",
        "isVisible": true,
        "text": "views tag defined in a module with Forms + Templates + Popups",
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
    var button115058290427597 = new kony.ui.Button({
        "id": "button115058290427597",
        "isVisible": true,
        "text": "frm3",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115058290427597_onClick_seq0
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
    var hbox115058290427593 = new kony.ui.Box({
        "id": "hbox115058290427593",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115058290427593.add(
    label115058290427595, button115058290427597);
    var label115058290427631 = new kony.ui.Label({
        "id": "label115058290427631",
        "isVisible": true,
        "text": "PQ-70722: jsModules tag defined in a module with JS file names in it",
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
    var button115058290429431 = new kony.ui.Button({
        "id": "button115058290429431",
        "isVisible": true,
        "text": "Click to load Module",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115058290429431_onClick_seq0
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
    var button115058290427633 = new kony.ui.Button({
        "id": "button115058290427633",
        "isVisible": true,
        "text": "Click to change skin of the label",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115058290427633_onClick_seq0
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
    var hbox115058290427629 = new kony.ui.Box({
        "id": "hbox115058290427629",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115058290427629.add(
    label115058290427631, button115058290429431, button115058290427633);
    var label115058290427667 = new kony.ui.Label({
        "id": "label115058290427667",
        "isVisible": true,
        "text": "PQ-70723: jsModules tag defined in a module with JS files relative path",
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
    var button115058290429432 = new kony.ui.Button({
        "id": "button115058290429432",
        "isVisible": true,
        "text": "click to laod module",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115058290429432_onClick_seq0
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
    var button115058290427669 = new kony.ui.Button({
        "id": "button115058290427669",
        "isVisible": true,
        "text": "click to change label skin",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115058290427669_onClick_seq0
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
    var hbox115058290427665 = new kony.ui.Box({
        "id": "hbox115058290427665",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115058290427665.add(
    label115058290427667, button115058290429432, button115058290427669);
    var label115058290427703 = new kony.ui.Label({
        "id": "label115058290427703",
        "isVisible": true,
        "text": "invoke module with views and Jsmodules tag defined",
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
    var button115058290427705 = new kony.ui.Button({
        "id": "button115058290427705",
        "isVisible": true,
        "text": "frm4",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115058290427705_onClick_seq0
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
    var hbox115058290427701 = new kony.ui.Box({
        "id": "hbox115058290427701",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115058290427701.add(
    label115058290427703, button115058290427705);
    var label115058290427739 = new kony.ui.Label({
        "id": "label115058290427739",
        "isVisible": true,
        "text": "invoke module with templates and jsmodules relative path",
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
    var button115058290427741 = new kony.ui.Button({
        "id": "button115058290427741",
        "isVisible": true,
        "text": "pop4",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115058290427741_onClick_seq0
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
    var hbox115058290427737 = new kony.ui.Box({
        "id": "hbox115058290427737",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115058290427737.add(
    label115058290427739, button115058290427741);
    var label115052332230018 = new kony.ui.Label({
        "id": "label115052332230018",
        "isVisible": true,
        "text": "Views and jsModules tags defined",
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
    var button115052332230020 = new kony.ui.Button({
        "id": "button115052332230020",
        "isVisible": true,
        "text": "frm5",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115052332230020_onClick_seq0
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
    var hbox115052332230016 = new kony.ui.Box({
        "id": "hbox115052332230016",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115052332230016.add(
    label115052332230018, button115052332230020);
    var label115052332230222 = new kony.ui.Label({
        "id": "label115052332230222",
        "isVisible": true,
        "text": "More than one dependent module defined",
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
    var button115052332230224 = new kony.ui.Button({
        "id": "button115052332230224",
        "isVisible": true,
        "text": "frm6",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115052332230224_onClick_seq0
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
    var hbox115052332230220 = new kony.ui.Box({
        "id": "hbox115052332230220",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115052332230220.add(
    label115052332230222, button115052332230224);
    var label115052332250342 = new kony.ui.Label({
        "id": "label115052332250342",
        "isVisible": true,
        "text": "Dependent module defined and the dependent module another dependent module",
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
    var button115052332250344 = new kony.ui.Button({
        "id": "button115052332250344",
        "isVisible": true,
        "text": "frm7",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115052332250344_onClick_seq0
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
    var hbox115052332250340 = new kony.ui.Box({
        "id": "hbox115052332250340",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115052332250340.add(
    label115052332250342, button115052332250344);
    var label115037436767678 = new kony.ui.Label({
        "id": "label115037436767678",
        "isVisible": true,
        "text": "Invoking_API's",
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
    var button115037436767680 = new kony.ui.Button({
        "id": "button115037436767680",
        "isVisible": true,
        "text": "frmEvents",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button115037436767680_onClick_seq0
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
    var hbox115037436767676 = new kony.ui.Box({
        "id": "hbox115037436767676",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox115037436767676.add(
    label115037436767678, button115037436767680);
    frmHome.add(
    hbox115058290426653, hbox115058290427521, hbox115058290427557, hbox115058290427593, hbox115058290427629, hbox115058290427665, hbox115058290427701, hbox115058290427737, hbox115052332230016, hbox115052332230220, hbox115052332250340, hbox115037436767676);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": "loadFunctionalModuleAsync",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
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