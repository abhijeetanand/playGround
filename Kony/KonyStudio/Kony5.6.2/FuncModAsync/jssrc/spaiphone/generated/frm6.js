//Form JS File
function addWidgetsfrm6() {
    var label115052332250580 = new kony.ui.Label({
        "id": "label115052332250580",
        "isVisible": true,
        "text": "PQ-70731: More than one dependent module defined",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var label115052332250581 = new kony.ui.Label({
        "id": "label115052332250581",
        "isVisible": true,
        "text": "here, header is loaded in one module and footer is loaded in another module",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frm6.add(
    label115052332250580, label115052332250581);
};

function frm6Globals() {
    var MenuId = [];
    frm6 = new kony.ui.Form2({
        "id": "frm6",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox115052332251303],
        "footers": [hbox115052332252223],
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
        "addWidgets": addWidgetsfrm6
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
frm6Globals();