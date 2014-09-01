//Form JS File
function frm8_button158580345371401_onClick_seq0(eventobject) {
    fptestcase.call(this);
};

function addWidgetsfrm8() {
    var button158580345371401 = new kony.ui.Button({
        "id": "button158580345371401",
        "isVisible": true,
        "text": "Button",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frm8_button158580345371401_onClick_seq0
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
    frm8.add(
    button158580345371401);
};

function frm8Globals() {
    var MenuId = [];
    frm8 = new kony.ui.Form2({
        "id": "frm8",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
        "addWidgets": addWidgetsfrm8
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};
frm8Globals();