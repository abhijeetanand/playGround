//Template File
function initializeheader6() {
    hbox115052332254839 = new kony.ui.Box({
        "id": "hbox115052332254839",
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

    function addWidgetshbox115052332254839() {
        var label115058290428830 = new kony.ui.Label({
            "id": "label115058290428830",
            "isVisible": true,
            "text": "Header",
            "skin": "lbl2"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {
            "toolTip": null
        });
        hbox115052332254839.add(
        label115058290428830);
    }
    addWidgetshbox115052332254839();
};
initializeheader6();