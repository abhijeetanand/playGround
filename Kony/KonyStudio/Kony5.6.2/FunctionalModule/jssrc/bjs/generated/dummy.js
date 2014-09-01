//Form JS File
function dummy_dummy_onDestroy_seq0(eventobject, neworientation) {
    loadModuldstryEvntt.call(this);
};

function dummy_button115037436768704_onClick_seq0(eventobject) {
    frmEvents.show();
};

function addWidgetsdummy() {
    var button115037436768704 = new kony.ui.Button({
        "id": "button115037436768704",
        "isVisible": true,
        "text": "back",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": dummy_button115037436768704_onClick_seq0
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
    dummy.add(
    button115037436768704);
};

function dummyGlobals() {
    var MenuId = [];
    dummy = new kony.ui.Form2({
        "id": "dummy",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
        "onDestroy": dummy_dummy_onDestroy_seq0,
        "addWidgets": addWidgetsdummy
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "submitSecure": false,
        "noCache": true,
        "secureData": false,
        "captureGPS": false,
        "onLoadJS": null,
        "unLoadJS": null,
        "titleBar": true
    });
};