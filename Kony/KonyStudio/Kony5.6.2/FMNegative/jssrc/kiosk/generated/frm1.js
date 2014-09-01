//Form JS File
function frm1_button68508508643454_onClick_seq0(eventobject) {
    loadMod_module1.call(this);
};

function frm1_button68508508643455_onClick_seq0(eventobject) {
    loadMod_module2.call(this);
};

function addWidgetsfrm1() {
    var label68508508643457 = new kony.ui.Label({
        "id": "label68508508643457",
        "isVisible": true,
        "text": "PQ-70746, PQ-70747:module1 and module2 have the same views and jsModules defined",
        "skin": "skinLabel"
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
        "toolTip": null
    });
    var button68508508643454 = new kony.ui.Button({
        "id": "button68508508643454",
        "isVisible": true,
        "text": "Load module1",
        "skin": "skinBtn",
        "focusSkin": "btnFocus",
        "onClick": frm1_button68508508643454_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
    var button68508508643455 = new kony.ui.Button({
        "id": "button68508508643455",
        "isVisible": true,
        "text": "Load module2",
        "skin": "skinBtn",
        "focusSkin": "btnFocus",
        "onClick": frm1_button68508508643455_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
    frm1.add(
    label68508508643457, button68508508643454, button68508508643455);
};

function frm1Globals() {
    var MenuId = [];
    frm1 = new kony.ui.Form2({
        "id": "frm1",
        "title": "PQ-70746",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrm1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["button68508508643454", "button68508508643455", "label68508508643457"]
    });
};