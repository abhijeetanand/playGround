//Template File
function initializefooter6() {
    hbox115052332256527 = new kony.ui.Box({
        "id": "hbox115052332256527",
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
    }, {
        "borderCollapse": "false",
        "preOnclickJS": null,
        "postOnclickJS": null
    });

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
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT
        }, {});
        hbox115052332256527.add(
        label115058290428852);
    }
    addWidgetshbox115052332256527();
};