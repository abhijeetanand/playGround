//Form JS File
function pop3_button115058290429429_onClick_seq0(eventobject) {
    pop3.dismiss();
};

function addWidgetspop3() {
    var button115058290429429 = new kony.ui.Button({
        "id": "button115058290429429",
        "isVisible": true,
        "text": "clcik to dismiss this popup",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": pop3_button115058290429429_onClick_seq0
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
    pop3.add(
    button115058290429429);
};

function pop3Globals() {
    pop3 = new kony.ui.Popup({
        "id": "pop3",
        "title": null,
        "isModal": false,
        "transparencyBehindThePopup": 100,
        "skin": "frmskn",
        "addWidgets": addWidgetspop3
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