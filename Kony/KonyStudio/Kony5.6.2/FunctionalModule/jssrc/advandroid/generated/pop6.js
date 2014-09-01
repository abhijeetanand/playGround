//Form JS File
function pop6_button115052332256854_onClick_seq0(eventobject) {
    pop6.dismiss();
};

function addWidgetspop6() {
    var button115052332256854 = new kony.ui.Button({
        "id": "button115052332256854",
        "isVisible": true,
        "text": "click to dismiss",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": pop6_button115052332256854_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true
    }, {
        "externalURL": null,
        "submitURL": null,
        "preOnclickJS": null,
        "postOnclickJS": null,
        "showProgressIndicator": true
    });
    pop6.add(
    button115052332256854);
};

function pop6Globals() {
    pop6 = new kony.ui.Popup({
        "id": "pop6",
        "title": null,
        "isModal": false,
        "transparencyBehindThePopup": 100,
        "skin": "frmskn",
        "addWidgets": addWidgetspop6
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "submitSecure": false,
        "noCache": true,
        "secureData": false,
        "captureGPS": false,
        "onLoadJS": null,
        "unLoadJS": null
    });
};