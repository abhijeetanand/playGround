//Form JS File
function pop5_button115052332236389_onClick_seq0(eventobject) {
    pop5.dismiss();
};

function addWidgetspop5() {
    var button115052332236389 = new kony.ui.Button({
        "id": "button115052332236389",
        "isVisible": true,
        "text": "click to dismiss",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": pop5_button115052332236389_onClick_seq0
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
    pop5.add(
    button115052332236389);
};

function pop5Globals() {
    pop5 = new kony.ui.Popup({
        "id": "pop5",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "frmskn",
        "isModal": false,
        "addWidgets": addWidgetspop5
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
pop5Globals();