//Form JS File
function frmPost_button1296320449188961_onClick_seq0(eventobject) {
    test_case_post_parent_thread1.call(this);
};

function frmPost_button1296320449190881_onClick_seq0(eventobject) {
    test_case_post_parent_thread2.call(this);
};

function frmPost_button1296320449190125_onClick_seq0(eventobject) {
    test_case_post_parent_thread3.call(this);
};

function frmPost_button1296320449202377_onClick_seq0(eventobject) {
    test_case_post_parent_thread4.call(this);
};

function frmPost_button1262984320214057_onClick_seq0(eventobject) {
    test_case_post_parent_thread5.call(this);
};

function frmPost_button1262984320219257_onClick_seq0(eventobject) {
    test_case_post_parent_thread6.call(this);
};

function frmPost_button735091630288525_onClick_seq0(eventobject) {
    test_case_post_parent_thread7.call(this);
};

function frmPost_button456101778310157_onClick_seq0(eventobject) {
    test_case_post_parent_thread8.call(this);
};

function addWidgetsfrmPost() {
    var button1296320449188961 = new kony.ui.Button({
        "id": "button1296320449188961",
        "isVisible": true,
        "text": "PQ - 71005 ,PQ - 71009 ,PQ - 71010 ,PQ- 71011 worker.postMessage(), from Parent thread scope (String as parameter),this and self post message",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmPost_button1296320449188961_onClick_seq0
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
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "text": "3 times passed :",
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
    var hbox1296320449188959 = new kony.ui.Box({
        "id": "hbox1296320449188959",
        "isVisible": true,
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
    hbox1296320449188959.add(
    button1296320449188961, lbl1);
    var button1296320449190881 = new kony.ui.Button({
        "id": "button1296320449190881",
        "isVisible": true,
        "text": "PQ - 71012 PQ-71006,PQ-71017 , PQ - 71019JSON PostMessage in parent and child scope and this,self and normal addevent listener,this,self message listener and message listener in parent scope",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmPost_button1296320449190881_onClick_seq0
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
    var lbl2 = new kony.ui.Label({
        "id": "lbl2",
        "isVisible": true,
        "text": "check logs",
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
        "containerWeight": 100
    }, {
        "toolTip": null
    });
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
    lbl2);
    var hbox1296320449190879 = new kony.ui.Box({
        "id": "hbox1296320449190879",
        "isVisible": true,
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
    hbox1296320449190879.add(
    button1296320449190881, vbox1267691298212383);
    var button1296320449190125 = new kony.ui.Button({
        "id": "button1296320449190125",
        "isVisible": true,
        "text": "PQ-71007 call postMessage API without passing any parameter in parent. ",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmPost_button1296320449190125_onClick_seq0
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
    var lbl3 = new kony.ui.Label({
        "id": "lbl3",
        "isVisible": true,
        "text": "TryCatch error",
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
        "containerWeight": 54
    }, {
        "toolTip": null
    });
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
    lbl3);
    var hbox1296320449190123 = new kony.ui.Box({
        "id": "hbox1296320449190123",
        "isVisible": true,
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
    hbox1296320449190123.add(
    button1296320449190125, vbox456101778212863);
    var button1296320449202377 = new kony.ui.Button({
        "id": "button1296320449202377",
        "isVisible": true,
        "text": "PQ-71008 postMessage() API, by passing invalid type parameter,error event listener in parent",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmPost_button1296320449202377_onClick_seq0
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
    var lbl5 = new kony.ui.Label({
        "id": "lbl5",
        "isVisible": true,
        "text": "TryCatch error",
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
        "containerWeight": 54
    }, {
        "toolTip": null
    });
    var vbox456101778213323 = new kony.ui.Box({
        "id": "vbox456101778213323",
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
    vbox456101778213323.add(
    lbl5);
    var hbox1296320449202375 = new kony.ui.Box({
        "id": "hbox1296320449202375",
        "isVisible": true,
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
    hbox1296320449202375.add(
    button1296320449202377, vbox456101778213323);
    var button1262984320214057 = new kony.ui.Button({
        "id": "button1262984320214057",
        "isVisible": true,
        "text": "PQ - 71013 call postMessage in child scope without passing any parameter ,error listener in child",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmPost_button1262984320214057_onClick_seq0
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
    var lbl8 = new kony.ui.Label({
        "id": "lbl8",
        "isVisible": true,
        "text": "try catch and error listener",
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
        "containerWeight": 98
    }, {
        "toolTip": null
    });
    var vbox1262984320214059 = new kony.ui.Box({
        "id": "vbox1262984320214059",
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
    vbox1262984320214059.add(
    lbl8);
    var hbox1262984320214055 = new kony.ui.Box({
        "id": "hbox1262984320214055",
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
    hbox1262984320214055.add(
    button1262984320214057, vbox1262984320214059);
    var button1262984320219257 = new kony.ui.Button({
        "id": "button1262984320219257",
        "isVisible": true,
        "text": "PQ - 7014postMessage in child scope API, by passing invalid type parameter",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmPost_button1262984320219257_onClick_seq0
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
    var lbl10 = new kony.ui.Label({
        "id": "lbl10",
        "isVisible": true,
        "text": "try catch and error listener",
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
        "containerWeight": 97
    }, {
        "toolTip": null
    });
    var vbox1262984320219259 = new kony.ui.Box({
        "id": "vbox1262984320219259",
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
    vbox1262984320219259.add(
    lbl10);
    var hbox1262984320219255 = new kony.ui.Box({
        "id": "hbox1262984320219255",
        "isVisible": true,
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
    hbox1262984320219255.add(
    button1262984320219257, vbox1262984320219259);
    var button735091630288525 = new kony.ui.Button({
        "id": "button735091630288525",
        "isVisible": true,
        "text": "send complex json from worker to parent",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmPost_button735091630288525_onClick_seq0
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
    var lbl11 = new kony.ui.Label({
        "id": "lbl11",
        "isVisible": true,
        "text": "TryCatch error",
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
        "containerWeight": 31
    }, {
        "toolTip": null
    });
    var label735091630288531 = new kony.ui.Label({
        "id": "label735091630288531",
        "isVisible": true,
        "text": "error listener output",
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
        "containerWeight": 25
    }, {
        "toolTip": null
    });
    var vbox735091630288527 = new kony.ui.Box({
        "id": "vbox735091630288527",
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
    vbox735091630288527.add(
    lbl11, label735091630288531);
    var hbox735091630288523 = new kony.ui.Box({
        "id": "hbox735091630288523",
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
    hbox735091630288523.add(
    button735091630288525, vbox735091630288527);
    var button456101778310157 = new kony.ui.Button({
        "id": "button456101778310157",
        "isVisible": true,
        "text": "PQ-72211 call postMessage before registering addeventmessage listener",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmPost_button456101778310157_onClick_seq0
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
    var lbl12 = new kony.ui.Label({
        "id": "lbl12",
        "isVisible": true,
        "text": "TryCatch error",
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
        "containerWeight": 27
    }, {
        "toolTip": null
    });
    var vbox456101778310159 = new kony.ui.Box({
        "id": "vbox456101778310159",
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
    vbox456101778310159.add(
    lbl12);
    var hbox456101778310155 = new kony.ui.Box({
        "id": "hbox456101778310155",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox456101778310155.add(
    button456101778310157, vbox456101778310159);
    frmPost.add(
    hbox1296320449188959, hbox1296320449190879, hbox1296320449190123, hbox1296320449202375, hbox1262984320214055, hbox1262984320219255, hbox735091630288523, hbox456101778310155);
};

function frmPostGlobals() {
    var MenuId = [];
    frmPost = new kony.ui.Form2({
        "id": "frmPost",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmPost
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