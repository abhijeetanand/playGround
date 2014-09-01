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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
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
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP,
        "textCopyable": false
    });
    var RangeSlidercustom115037436758153 = new com.kny.RangeSlider({
        "id": "RangeSlidercustom115037436758153",
        "image": null,
        "isVisible": true,
        "hExpand": true,
        "vExpand": false,
        "minimumValue": 0,
        "maximumValue": 100,
        "minimumRange": 20,
        "selectedMinimumValue": 5,
        "selectedMaximumValue": 98,
        "minThumbImageName": "handle.png",
        "maxThumbImageName": "handle.png",
        "trackBackgroundImageName": "bar-background_.png",
        "trackHighlightImageName": "bar-highlight_.png",
        "aInt": 10,
        "aLong": 10,
        "aFloat": 20.5,
        "aDouble": 2147483648,
        "aString": "Hello World1",
        "aNumber": 21,
        "aStringList": "sample1",
        "aFloatList": 10.5,
        "aBoolean": false
    }, {
        "widgetAlign": 5,
        "containerWeight": 6,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "RangeSlider"
    });
    frm3.add(
    label115058290429423, button115058290429430, label115052332257165, RangeSlidercustom115037436758153);
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
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "titleBarRightSideView": "none",
            "titleBarLeftSideView": "none"
        },
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false
    });
};
frm3Globals();