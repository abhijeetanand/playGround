//Template File
function headerOne_btnHeader_onClick_seq0(eventobject) {
    createBrowserWidget.call(this);
};

function initializeheaderOne() {
    hbxHeader = new kony.ui.Box({
        "id": "hbxHeader",
        "isVisible": true,
        "skin": "sknHBox",
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
            "margin": [1, 1, 1, 1],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "marginInPixel": true,
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
            "margin": [1, 1, 1, 1],
            "padding": [0, 3, 0, 3],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": 20
        }, {});
        hbxHeader.add(
        lblHeader, btnHeader);
    }
    addWidgetshbxHeader();
};