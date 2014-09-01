//Form JS File
function pop2_button115058290429421_onClick_seq0(eventobject) {
    pop2.dismiss();
};

function addWidgetspop2() {
    var button115058290429421 = new kony.ui.Button({
        "id": "button115058290429421",
        "isVisible": true,
        "text": "click to dismiss",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": pop2_button115058290429421_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    pop2.add(
    button115058290429421);
};

function pop2Globals() {
    pop2 = new kony.ui.Popup({
        "id": "pop2",
        "title": null,
        "isModal": false,
        "transparencyBehindThePopup": 100,
        "skin": "frmskn",
        "addWidgets": addWidgetspop2
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "inTransitionConfig": {
            "transition": "0"
        },
        "out_transition": 0
    });
};