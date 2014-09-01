//Form JS File
function pop1_button115058290429419_onClick_seq0(eventobject) {
    pop1.dismiss();
};

function pop1_button115058290429420_onClick_seq0(eventobject) {
    pop2.show();
};

function addWidgetspop1() {
    var label115058290429424 = new kony.ui.Label({
        "id": "label115058290429424",
        "isVisible": true,
        "text": "PQ-70720: views tag defined in a module with only Popups in it",
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
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var button115058290429419 = new kony.ui.Button({
        "id": "button115058290429419",
        "isVisible": true,
        "text": "Am popup.Click to dismiss me",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": pop1_button115058290429419_onClick_seq0
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button115058290429420 = new kony.ui.Button({
        "id": "button115058290429420",
        "isVisible": true,
        "text": "Click to open other loaded popup",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": pop1_button115058290429420_onClick_seq0
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    pop1.add(
    label115058290429424, button115058290429419, button115058290429420);
};

function pop1Globals() {
    pop1 = new kony.ui.Popup({
        "id": "pop1",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "frmskn",
        "isModal": false,
        "addWidgets": addWidgetspop1
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "popupStyle": constants.POPUP_TYPE_KONY_STYLE,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};
pop1Globals();