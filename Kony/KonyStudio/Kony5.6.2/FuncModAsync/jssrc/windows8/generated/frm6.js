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
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var label115052332250581 = new kony.ui.Label({
        "id": "label115052332250581",
        "isVisible": true,
        "text": "here, header is loaded in one module and footer is loaded in another module",
        "skin": "lblskn"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
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
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "layout": constants.Vertical,
        "titleBar": true,
        "directChildrenIDs": ["label115052332250580", "label115052332250581"],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};
frm6Globals();