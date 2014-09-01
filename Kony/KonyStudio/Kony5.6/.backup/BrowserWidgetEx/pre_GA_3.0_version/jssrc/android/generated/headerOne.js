//Template File
function headerOne_btnHeader_onClick_seq0(eventobject) {
    createBrowserWidget.call(this);
};

function initializeheaderOne() {
    hbxHeader = new kony.ui.BoxTemplate({
        "id": "hbxHeader",
        "isVisible": true,
        "skin": "sknHBox",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbxHeader
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

    function addWidgetshbxHeader() {
        var lblHeader = new kony.ui.Label({
            "id": "lblHeader",
            "isVisible": true,
            "text": "This is Header",
            "skin": "sknLabel"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 80
        }, {});
        var btnHeader = new kony.ui.Button({
            "id": "btnHeader",
            "isVisible": true,
            "text": "Add",
            "skin": "sknButton",
            "focusSkin": "btnFocus",
            "onClick": headerOne_btnHeader_onClick_seq0
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
        hbxHeader.add(
        lblHeader, btnHeader);
    }
};