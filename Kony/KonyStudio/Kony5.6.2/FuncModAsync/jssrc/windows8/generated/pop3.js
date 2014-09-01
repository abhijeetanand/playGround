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
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
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
        "layout": constants.Vertical,
        "directChildrenIDs": ["button115058290429429"],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};
pop3Globals();