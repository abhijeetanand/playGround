//Template File
function initializeheader3() {
    hbox115058290429443 = new kony.ui.Box({
        "id": "hbox115058290429443",
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

    function addWidgetshbox115058290429443() {
        var label115058290429444 = new kony.ui.Label({
            "id": "label115058290429444",
            "isVisible": true,
            "text": "PQ-70707: Views tag defined with templates in it and jsModules tag defined with JS files relative path in it",
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
        hbox115058290429443.add(
        label115058290429444);
    }
    addWidgetshbox115058290429443();
};