//Form JS File
function frmImport_button1296320449188961_onClick_seq0(eventobject) {
    test_case_import_parent_thread1.call(this);
};

function frmImport_button1296320449190881_onClick_seq0(eventobject) {
    test_case_import_parent_thread2.call(this);
};

function frmImport_button1296320449190125_onClick_seq0(eventobject) {
    test_case_import_parent_thread3.call(this);
};

function frmImport_button1296320449202377_onClick_seq0(eventobject) {
    test_case_import_parent_thread4.call(this);
};

function frmImport_button1264920735253421_onClick_seq0(eventobject) {
    test_case_import_parent_thread5.call(this);
};

function frmImport_button1264920735262685_onClick_seq0(eventobject) {
    test_case_import_parent_thread6.call(this);
};

function frmImport_button1264920735269405_onClick_seq0(eventobject) {
    test_case_import_parent_thread7.call(this);
};

function frmImport_button1588395243294645_onClick_seq0(eventobject) {
    test_case_import_parent_thread8.call(this);
};

function frmImport_button456101778315137_onClick_seq0(eventobject) {
    test_case_import_parent_thread9.call(this);
};

function frmImport_button456101778310197_onClick_seq0(eventobject) {
    test_case_import_parent_thread10.call(this);
};

function addWidgetsfrmImport() {
    var button1296320449188961 = new kony.ui.Button({
        "id": "button1296320449188961",
        "isVisible": true,
        "text": "PQ - 71041 importScripts api with out passing any arguments",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmImport_button1296320449188961_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "text": "print child hello :",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var hbox1296320449188959 = new kony.ui.Box({
        "id": "hbox1296320449188959",
        "isVisible": true,
        "skin": "hboxskin",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1296320449188959.add(
    button1296320449188961, lbl1);
    var button1296320449190881 = new kony.ui.Button({
        "id": "button1296320449190881",
        "isVisible": true,
        "text": " PQ - 71042 importScripts api by passing a single js file",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmImport_button1296320449190881_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lbl21 = new kony.ui.Label({
        "id": "lbl21",
        "isVisible": true,
        "text": "worker1 message should display",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {});
    var lbl22 = new kony.ui.Label({
        "id": "lbl22",
        "isVisible": true,
        "text": "print worker1 variable",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {});
    var vbox1267691298212383 = new kony.ui.Box({
        "id": "vbox1267691298212383",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1267691298212383.add(
    lbl21, lbl22);
    var hbox1296320449190879 = new kony.ui.Box({
        "id": "hbox1296320449190879",
        "isVisible": true,
        "skin": "hboxskin",
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
    hbox1296320449190879.add(
    button1296320449190881, vbox1267691298212383);
    var button1296320449190125 = new kony.ui.Button({
        "id": "button1296320449190125",
        "isVisible": true,
        "text": "PQ - 71043 importScripts api by passing multiple js files",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmImport_button1296320449190125_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lbl31 = new kony.ui.Label({
        "id": "lbl31",
        "isVisible": true,
        "text": "worker2 message should display",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {});
    var lbl32 = new kony.ui.Label({
        "id": "lbl32",
        "isVisible": true,
        "text": "print worker1 variable",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 27
    }, {});
    var lbl33 = new kony.ui.Label({
        "id": "lbl33",
        "isVisible": true,
        "text": "worker1 message should display",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 36
    }, {});
    var vbox456101778212863 = new kony.ui.Box({
        "id": "vbox456101778212863",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox456101778212863.add(
    lbl31, lbl32, lbl33);
    var hbox1296320449190123 = new kony.ui.Box({
        "id": "hbox1296320449190123",
        "isVisible": true,
        "skin": "hboxskin",
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
    hbox1296320449190123.add(
    button1296320449190125, vbox456101778212863);
    var button1296320449202377 = new kony.ui.Button({
        "id": "button1296320449202377",
        "isVisible": true,
        "text": "PQ - 71045 importScripts api by specifying 3 js files and loading any one of js files should be error",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmImport_button1296320449202377_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lbl4 = new kony.ui.Label({
        "id": "lbl4",
        "isVisible": true,
        "text": "partially loaded mesg and error listener error and try catch err message",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 75
    }, {});
    var lbl3 = new kony.ui.Box({
        "id": "lbl3",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    lbl3.add(
    lbl4);
    var hbox1296320449202375 = new kony.ui.Box({
        "id": "hbox1296320449202375",
        "isVisible": true,
        "skin": "hboxskin",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1296320449202375.add(
    button1296320449202377, lbl3);
    var button1264920735253421 = new kony.ui.Button({
        "id": "button1264920735253421",
        "isVisible": true,
        "text": "PQ - 71046 importScripts( ) api in main thread scope",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmImport_button1264920735253421_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lbl5 = new kony.ui.Label({
        "id": "lbl5",
        "isVisible": true,
        "text": "try catch error",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1264920735253423 = new kony.ui.Box({
        "id": "vbox1264920735253423",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1264920735253423.add(
    lbl5);
    var hbox1264920735253419 = new kony.ui.Box({
        "id": "hbox1264920735253419",
        "isVisible": true,
        "skin": "hboxskin",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1264920735253419.add(
    button1264920735253421, vbox1264920735253423);
    var button1264920735262685 = new kony.ui.Button({
        "id": "button1264920735262685",
        "isVisible": true,
        "text": "PQ - 71047 ,PQ - 71049 passing invalid argument to importScripts( ) api",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmImport_button1264920735262685_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lbl61 = new kony.ui.Label({
        "id": "lbl61",
        "isVisible": true,
        "text": "try catch error",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 52
    }, {});
    var lbl62 = new kony.ui.Label({
        "id": "lbl62",
        "isVisible": true,
        "text": "errorlistener",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 48
    }, {});
    var vbox1264920735262687 = new kony.ui.Box({
        "id": "vbox1264920735262687",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1264920735262687.add(
    lbl61, lbl62);
    var hbox1264920735262683 = new kony.ui.Box({
        "id": "hbox1264920735262683",
        "isVisible": true,
        "skin": "hboxskin",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 9,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1264920735262683.add(
    button1264920735262685, vbox1264920735262687);
    var button1264920735269405 = new kony.ui.Button({
        "id": "button1264920735269405",
        "isVisible": true,
        "text": "PQ - 71048 ,PQ - 71050 importScripts( ) by passing unavailable js file",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmImport_button1264920735269405_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lbl71 = new kony.ui.Label({
        "id": "lbl71",
        "isVisible": true,
        "text": "try catch ",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 51
    }, {});
    var lbl72 = new kony.ui.Label({
        "id": "lbl72",
        "isVisible": true,
        "text": "errorlistener",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {});
    var vbox1264920735269407 = new kony.ui.Box({
        "id": "vbox1264920735269407",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1264920735269407.add(
    lbl71, lbl72);
    var hbox1264920735269403 = new kony.ui.Box({
        "id": "hbox1264920735269403",
        "isVisible": true,
        "skin": "hboxskin",
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
    hbox1264920735269403.add(
    button1264920735269405, vbox1264920735269407);
    var button1588395243294645 = new kony.ui.Button({
        "id": "button1588395243294645",
        "isVisible": true,
        "text": "PQ - 71044 importScripts api by specifying js file in main context",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmImport_button1588395243294645_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lbl81 = new kony.ui.Label({
        "id": "lbl81",
        "isVisible": true,
        "text": "try catch ",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {});
    var lbl82 = new kony.ui.Label({
        "id": "lbl82",
        "isVisible": true,
        "text": "errorlistener",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {});
    var vbox1588395243294647 = new kony.ui.Box({
        "id": "vbox1588395243294647",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1588395243294647.add(
    lbl81, lbl82);
    var hbox1588395243294643 = new kony.ui.Box({
        "id": "hbox1588395243294643",
        "isVisible": true,
        "skin": "hboxskin",
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
    hbox1588395243294643.add(
    button1588395243294645, vbox1588395243294647);
    var button456101778315137 = new kony.ui.Button({
        "id": "button456101778315137",
        "isVisible": true,
        "text": "PQ-72209 call importScripts and check variable of import scripts is not present in another worker",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmImport_button456101778315137_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lbl91 = new kony.ui.Label({
        "id": "lbl91",
        "isVisible": true,
        "text": "try catch ",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {});
    var label456101778315143 = new kony.ui.Label({
        "id": "label456101778315143",
        "isVisible": true,
        "text": "errorlistener",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 37
    }, {});
    var vbox456101778315139 = new kony.ui.Box({
        "id": "vbox456101778315139",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox456101778315139.add(
    lbl91, label456101778315143);
    var hbox456101778315135 = new kony.ui.Box({
        "id": "hbox456101778315135",
        "isVisible": true,
        "skin": "hboxskin",
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
    hbox456101778315135.add(
    button456101778315137, vbox456101778315139);
    var button456101778310197 = new kony.ui.Button({
        "id": "button456101778310197",
        "isVisible": true,
        "text": "PQ-72210 call importScripts and check modified variable of import scripts is not present in another worker",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmImport_button456101778310197_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {});
    var lbl101 = new kony.ui.Label({
        "id": "lbl101",
        "isVisible": true,
        "text": "should print passed",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 34
    }, {});
    var vbox456101778310199 = new kony.ui.Box({
        "id": "vbox456101778310199",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox456101778310199.add(
    lbl101);
    var hbox456101778310195 = new kony.ui.Box({
        "id": "hbox456101778310195",
        "isVisible": true,
        "skin": "hboxskin",
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
    hbox456101778310195.add(
    button456101778310197, vbox456101778310199);
    frmImport.add(
    hbox1296320449188959, hbox1296320449190879, hbox1296320449190123, hbox1296320449202375, hbox1264920735253419, hbox1264920735262683, hbox1264920735269403, hbox1588395243294643, hbox456101778315135, hbox456101778310195);
};

function frmImportGlobals() {
    var MenuId = [];
    frmImport = new kony.ui.Form2({
        "id": "frmImport",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmImport
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "layout": constants.Vertical,
        "titleBar": true,
        "directChildrenIDs": ["hbox1296320449188959", "button1296320449188961", "lbl1", "hbox1296320449190123", "button1296320449190125", "vbox456101778212863", "lbl31", "lbl33", "lbl32", "hbox1296320449190879", "button1296320449190881", "vbox1267691298212383", "lbl21", "lbl22", "hbox1296320449202375", "button1296320449202377", "lbl3", "lbl4", "hbox1264920735253419", "button1264920735253421", "vbox1264920735253423", "lbl5", "hbox1264920735262683", "button1264920735262685", "vbox1264920735262687", "lbl61", "lbl62", "hbox1264920735269403", "button1264920735269405", "vbox1264920735269407", "lbl71", "lbl72", "hbox1588395243294643", "button1588395243294645", "vbox1588395243294647", "lbl81", "lbl82", "hbox456101778315135", "button456101778315137", "vbox456101778315139", "lbl91", "label456101778315143", "hbox456101778310195", "button456101778310197", "vbox456101778310199", "lbl101"],
        "viewConfig": {
            "referenceWidth": 0,
            "referenceHeight": 0
        }
    });
};