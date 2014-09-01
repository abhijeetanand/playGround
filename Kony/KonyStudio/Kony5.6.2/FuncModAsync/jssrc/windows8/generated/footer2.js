//Template File
function initializefooter2() {
    hbox115058290429427 = new kony.ui.Box({
        "id": "hbox115058290429427",
        "isVisible": true,
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

    function addWidgetshbox115058290429427() {
        var label115058290429428 = new kony.ui.Label({
            "id": "label115058290429428",
            "isVisible": true,
            "text": "Footer",
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
        hbox115058290429427.add(
        label115058290429428);
    }
    addWidgetshbox115058290429427();
};
initializefooter2();