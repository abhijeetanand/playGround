//Form JS File
function frmsqlapis_button1587561095306399_onClick_seq0(eventobject) {
    frmSQL1.show();
};

function addWidgetsfrmsqlapis() {
    var button1587561095306399 = new kony.ui.Button({
        "id": "button1587561095306399",
        "isVisible": true,
        "text": "SQL 1",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmsqlapis_button1587561095306399_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
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
    frmsqlapis.add(
    button1587561095306399);
};

function frmsqlapisGlobals() {
    var MenuId = [];
    frmsqlapis = new kony.ui.Form2({
        "id": "frmsqlapis",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmsqlapis
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["button1587561095306399"]
    });
};