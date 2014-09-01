//Form JS File
function addWidgetsfrm1() {
    var label115058290429415 = new kony.ui.Label({
        "id": "label115058290429415",
        "isVisible": true,
        "text": "PQ-70698,PQ-70701,PQ-70712: Verify alert with return value true when loadFunctionalModule is invoked",
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
    }, {});
    var segment2115058290429417box = new kony.ui.Box({
        "id": "segment2115058290429417box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 18
    }, {});
    var segment2115058290429417 = new kony.ui.SegmentedUI2({
        "id": "segment2115058290429417",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox115058290429405": "hbox115058290429405",
            "label115058290429407": "label115058290429407",
            "seg1": "seg1",
            "image2115058290429406": "image2115058290429406"
        },
        "data": [{
            "label115058290429407": "Veirfy header teamplate",
            "image2115058290429406": "a.png"
        }, {
            "label115058290429407": "Verify Footer Template",
            "image2115058290429406": "b.png"
        }, {
            "label115058290429407": "Verify Segment template",
            "image2115058290429406": "c.png"
        }],
        "rowTemplate": hbox115058290429405,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 18
    }, {});
    var label115058290429418 = new kony.ui.Label({
        "id": "label115058290429418",
        "isVisible": true,
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
        "containerWeight": 33
    }, {});
    segment2115058290429417box.add(
    label115058290429418);
    frm1.add(
    label115058290429415, segment2115058290429417);
};

function frm1Globals() {
    var MenuId = [];
    frm1 = new kony.ui.Form2({
        "id": "frm1",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox115058290428573],
        "footers": [hbox115058290428839],
        "enabledForIdleTimeout": false,
        "skin": "frmskn",
        "addWidgets": addWidgetsfrm1
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "titleBar": true,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};