//Form JS File
function frm3_button115058290429430_onClick_seq0(eventobject) {
    pop3.show();
};

function addWidgetsfrm3() {
    var label115058290429423 = new kony.ui.Label({
        "id": "label115058290429423",
        "isVisible": true,
        "text": "PQ-70721: views tag defined in a module with Forms + Templates + Popups in it",
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
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var label115052332257159 = new kony.ui.Label({
        "id": "label115052332257159",
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
    var CustomButtoncustom115052332257163 = new com.kony.customwidget.CustomButton({
        "id": "CustomButtoncustom115052332257163",
        "image": null,
        "isVisible": true,
        "hExpand": true,
        "vExpand": false,
        "aString": null,
        "aInt": null,
        "aLong": null,
        "aDouble": null,
        "aBoolean": false,
        "aVoid": null
    }, {
        "widgetAlign": 5,
        "containerWeight": 6,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "CustomButton"
    });
    frm3.add(
    label115058290429423, button115058290429430, label115052332257159, CustomButtoncustom115052332257163);
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
        "animateHeaderFooter": false,
        "directChildrenIDs": ["label115058290429423", "button115058290429430", "label115052332257159", "CustomButtoncustom115052332257163"]
    });
};
frm3Globals();