//Form JS File
function frmNonapis_button456101778330035_onClick_seq0(eventobject) {
    test_case_nonapi_parent_thread1.call(this);
};

function addWidgetsfrmNonapis() {
    var button456101778330035 = new kony.ui.Button({
        "id": "button456101778330035",
        "isVisible": true,
        "text": "Non supported apis namespaces are not supported in worker",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmNonapis_button456101778330035_onClick_seq0
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
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "text": "Label",
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
    frmNonapis.add(
    button456101778330035, lbl1);
};

function frmNonapisGlobals() {
    var MenuId = [];
    frmNonapis = new kony.ui.Form2({
        "id": "frmNonapis",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmNonapis
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "layout": constants.Vertical,
        "titleBar": true,
        "directChildrenIDs": ["button456101778330035", "lbl1"],
        "viewConfig": {
            "referenceWidth": 0,
            "referenceHeight": 0
        }
    });
};