//Template File
function initializefooter6() {
    hbox115052332256527 = new kony.ui.Box({
        "id": "hbox115052332256527",
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

    function addWidgetshbox115052332256527() {
        var label115058290428852 = new kony.ui.Label({
            "id": "label115058290428852",
            "isVisible": true,
            "text": "Footer",
            "skin": "lbl2"
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
        hbox115052332256527.add(
        label115058290428852);
    }
    addWidgetshbox115052332256527();
};
initializefooter6();