//Form JS File
function frmMultiThread_button456101778309651_onClick_seq0(eventobject) {
    test_case_multithread_parent_thread1.call(this);
};

function addWidgetsfrmMultiThread() {
    var button456101778309651 = new kony.ui.Button({
        "id": "button456101778309651",
        "isVisible": true,
        "text": "create 10 threads:expected output is 10 times worker passed should print in segment",
        "skin": "btnskn",
        "focusSkin": "btnFocus",
        "onClick": frmMultiThread_button456101778309651_onClick_seq0
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
    var segment2456101778309652box = new kony.ui.Box({
        "id": "segment2456101778309652box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segment2456101778309652 = new kony.ui.SegmentedUI2({
        "id": "segment2456101778309652",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "segLabel": "segLabel"
        },
        "rowTemplate": segment2456101778309652box,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true,
                "projectionAngle": 60
            }
        },
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    var segLabel = new kony.ui.Label({
        "id": "segLabel",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "toolTip": null
    });
    segment2456101778309652box.add(
    segLabel);
    frmMultiThread.add(
    button456101778309651, segment2456101778309652);
};

function frmMultiThreadGlobals() {
    var MenuId = [];
    frmMultiThread = new kony.ui.Form2({
        "id": "frmMultiThread",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmMultiThread
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
        "directChildrenIDs": ["button456101778309651", "segment2456101778309652"]
    });
};