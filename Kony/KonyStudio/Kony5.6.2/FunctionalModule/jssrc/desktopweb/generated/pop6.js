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
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "toolTip": null
    });
    pop6.add(
    button115052332256854);
};

function pop6Globals() {
    pop6 = new kony.ui.Popup({
        "id": "pop6",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "frmskn",
        "isModal": false,
        "addWidgets": addWidgetspop6
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "minimizeOnLostFocus": false,
        "draggable": false,
        "resizable": false,
        "titleBarConfig": {
            "closeIcon": "close.png",
            "minIcon": "min.png",
            "maxIcon": "max.png"
        },
        "inTransitionConfig": {
            "popupTransition": "none"
        },
        "outTransitionConfig": {
            "popupTransition": "none"
        }
    });
};