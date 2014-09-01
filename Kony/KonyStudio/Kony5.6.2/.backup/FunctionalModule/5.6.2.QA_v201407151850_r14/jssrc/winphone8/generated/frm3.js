//Form JS File
function frm3_button115058290429430_onClick_seq0(eventobject) {
    pop3.show();
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
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
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
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frm3.add(
    label115058290429423, button115058290429430, label115052332257165);
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
        "maxAppMenuButtons": 4,
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
        "directChildrenIDs": ["label115058290429423", "button115058290429430", "label115052332257165", "custom115037436758152"]
    });
};