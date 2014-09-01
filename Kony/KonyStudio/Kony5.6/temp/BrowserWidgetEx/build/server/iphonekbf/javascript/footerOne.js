//Template File
function footerOne_button685084058980999_onClick_seq0(eventobject) {
    removeBrowserWidget.call(this);
};

function footerOne_btnFooter_onClick_seq0(eventobject) {
    removeBrowserWidget.call(this);
};

function initializefooterOne() {
    hbxFooter = new kony.ui.BoxTemplate({
        "id": "hbxFooter",
        "isVisible": true,
        "skin": "sknHBox",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbxFooter
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

    function addWidgetshbxFooter() {
        var lblFooter = new kony.ui.Label({
            "id": "lblFooter",
            "isVisible": true,
            "text": "This is Footer",
            "skin": "sknLabel"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": 59
        }, {
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var button685084058980999 = new kony.ui.Button({
            "id": "button685084058980999",
            "isVisible": true,
            "text": "Change",
            "skin": "sknButton",
            "focusSkin": "btnFocus",
            "onClick": footerOne_button685084058980999_onClick_seq0
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
            "containerWeight": 20
        }, {
            "glowEffect": false,
            "showProgressIndicator": true
        });
        var btnFooter = new kony.ui.Button({
            "id": "btnFooter",
            "isVisible": true,
            "text": "Remove",
            "skin": "sknButton",
            "focusSkin": "btnFocus",
            "onClick": footerOne_btnFooter_onClick_seq0
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
            "containerWeight": 20
        }, {
            "glowEffect": false,
            "showProgressIndicator": true
        });
        hbxFooter.add(
        lblFooter, button685084058980999, btnFooter);
    }
};