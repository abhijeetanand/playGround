function addWidgetspopupBottomPreview() {
    var segPopupPreviewbox = new kony.ui.Box({
        "id": "segPopupPreviewbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segPopupPreview = 	new kony.ui.SegmentedUI2({
        "id": "segPopupPreview",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
			"hbxsegpopupPreview": "hbxsegpopupPreview",
			"comment": "comment",
			"createdBy": "createdBy",
            "lastModifiedTime": "lastModifiedTime"
        },
        "rowTemplate": segPopupPreviewbox,
        "widgetSkin": "segTrans",
        "rowSkin": "segRowTrans",
        "rowFocusSkin": "segRowTrans",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "b4b4b400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "indicator": constants.SEGUI_NONE,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var createdBy = new kony.ui.Label({
        "id": "createdBy",
        "isVisible": true,
        "skin": "popNotesPersonLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lastModifiedTime = new kony.ui.Label({
        "id": "lastModifiedTime",
        "isVisible": true,
        "skin": "popNotesTimestampLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxsegpopupPreview = new kony.ui.Box({
        "id": "hbxsegpopupPreview",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 26,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxsegpopupPreview.add(
    createdBy, lastModifiedTime);
    var comment = new kony.ui.Label({
        "id": "comment",
        "isVisible": true,
        "skin": "notesPopNoteContent"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    segPopupPreviewbox.add(
    hbxsegpopupPreview, comment);
    popupBottomPreview.add(segPopupPreview);
};

function hdrBottomPopupFP() {
    var button1039885914163844 = new kony.ui.Button({
        "id": "button1039885914163844",
        "isVisible": true,
        "text": null,
        "skin": "popSwitchButton",
        "focusSkin": "popSwitchButtonFocus",
		"onClick": function(eventobject) {
            popupBottomPreview.dismiss();
            var currentfrm = kony.application.getCurrentForm();
            var notesId = currentfrm.info.notesId;
            var annotationDataPREVIEW = getAnnotations(notesId);
                var context_leftSwipe = {
                    "widget": currentfrm,
                    "anchor": "top",
                    "sizetoanchorwidth": false
                };
                //setContext method call  
                if (annotationDataPREVIEW !== null && annotationDataPREVIEW !== undefined && annotationDataPREVIEW["comments"] !== null) {
                    popupTopPreview.setContext(context_leftSwipe);
                    popupTopPreview.segPopupPreview.setData(annotationDataPREVIEW["comments"])
					popupTopPreview.containerHeight = popupHeightFP;
                    popupTopPreview.show();
					}
        }
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,		
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label1367604859562 = new kony.ui.Label({
        "id": "label1367604859562",
        "isVisible": true,
        "text": "FORM NOTES",
        "skin": "notesPopTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox1367604859570 = new kony.ui.Box({
        "id": "vbox1367604859570",
        "isVisible": true,
        "skin": "popTitleVbox",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 80,
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1367604859570.add(
    label1367604859562);
    var button1039885914163836 = new kony.ui.Button({
        "id": "button1039885914163836",
        "isVisible": true,
        "text": "X",
        "skin": "popCloseButton",
        "focusSkin": "popCloseButtonFocus",
		"onClick": function(eventobject) {
            popupBottomPreview.dismiss();
        }
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [0, 1, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hbxpopupBottomHDRPreview = new kony.ui.Box({
        "id": "hbxpopupBottomHDRPreview",
        "isVisible": true,
        "skin": "popNotesTitleHbox",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxpopupBottomHDRPreview.add(
    button1039885914163844, vbox1367604859570, button1039885914163836);
}
//---------------------------------------------------------------------------------------------------------------------------------------------
function addWidgetspopupTopPreview() {
    var segPopupPreviewbox = new kony.ui.Box({
        "id": "segPopupPreviewbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segPopupPreview = 	new kony.ui.SegmentedUI2({
        "id": "segPopupPreview",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
			"hbxsegpopupPreview": "hbxsegpopupPreview",
			"comment": "comment",
			"createdBy": "createdBy",
            "lastModifiedTime": "lastModifiedTime"
        },
        "rowTemplate": segPopupPreviewbox,
        "widgetSkin": "segTrans",
        "rowSkin": "segRowTrans",
        "rowFocusSkin": "segRowTrans",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "b4b4b400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [3, 0, 3, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "indicator": constants.SEGUI_NONE,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": false,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var createdBy = new kony.ui.Label({
        "id": "createdBy",
        "isVisible": true,
        "skin": "popNotesPersonLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": false,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lastModifiedTime = new kony.ui.Label({
        "id": "lastModifiedTime",
        "isVisible": true,
        "skin": "popNotesTimestampLabel"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 60
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxsegpopupPreview = new kony.ui.Box({
        "id": "hbxsegpopupPreview",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 26,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxsegpopupPreview.add(
    createdBy, lastModifiedTime);
    var comment = new kony.ui.Label({
        "id": "comment",
        "isVisible": true,
        "skin": "notesPopNoteContent"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "paddingInPixel": false,
        "containerWeight": 14
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    segPopupPreviewbox.add(
    hbxsegpopupPreview, comment);
    popupTopPreview.add(
    segPopupPreview);
};

function hdrTopPopupFP() {
    var button1039885914163844 = new kony.ui.Button({
        "id": "button1039885914163844",
        "isVisible": true,
        "text": null,
        "skin": "popSwitchButton",
        "focusSkin": "popSwitchButtonFocus",
		"onClick": function(eventobject) {
            popupTopPreview.dismiss();
            var currentfrm = kony.application.getCurrentForm();
            var notesId = currentfrm.info.notesId;
            var annotationDataPREVIEW = getAnnotations(notesId);
            var context_bottom = {
                "widget": currentfrm,
                "anchor": "bottom",
                "sizetoanchorwidth": false
            };
            //setContext method call 
            if (annotationDataPREVIEW !== null && annotationDataPREVIEW !== undefined && annotationDataPREVIEW["comments"] !== null) {
                popupBottomPreview.segPopupPreview.setData(annotationDataPREVIEW["comments"]);
                popupBottomPreview.setContext(context_bottom);
				popupBottomPreview.containerHeight = popupHeightFP;
                popupBottomPreview.show();
            }
        }
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": false,
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var label1367604859562 = new kony.ui.Label({
        "id": "label1367604859562",
        "isVisible": true,
        "text": "FORM NOTES",
        "skin": "notesPopTitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbox1367604859570 = new kony.ui.Box({
        "id": "vbox1367604859570",
        "isVisible": true,
        "skin": "popTitleVbox",
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 80,
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1367604859570.add(
    label1367604859562);
    var button1039885914163836 = new kony.ui.Button({
        "id": "button1039885914163836",
        "isVisible": true,
        "text": "X",
        "skin": "popCloseButton",
        "focusSkin": "popCloseButtonFocus",
		"onClick": function(eventobject) {
            popupTopPreview.dismiss();
        }
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,		
        "padding": [0, 1, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "paddingInPixel": false,
        "containerWeight": 10
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hbxpopupTopHDRPreview = new kony.ui.Box({
        "id": "hbxpopupTopHDRPreview",
        "isVisible": true,
        "skin": "popNotesTitleHbox",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxpopupTopHDRPreview.add(
    button1039885914163844, vbox1367604859570, button1039885914163836);
}
//startup.js file
function apppostappinitFuncPreview() {
	
    hdrBottomPopupFP();
    hdrTopPopupFP();

	
    popupBottomPreview = new kony.ui.Popup({
        "id": "popupBottomPreview",
        "title": null,
        "headers": [hbxpopupBottomHDRPreview],
        "transparencyBehindThePopup": 100,
        "skin": "notesPopBG",
        "isModal": false,
        "addWidgets": addWidgetspopupBottomPreview
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 100,
        "containerHeight": 45,
        "containerHeightReference": constants.HEIGHT_BY_DEVICE_REFERENCE,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_PAN,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
    popupTopPreview = new kony.ui.Popup({
        "id": "popupTopPreview",
        "title": null,
        "footers": [hbxpopupTopHDRPreview],
        "transparencyBehindThePopup": 100,
        "skin": "notesPopBG",
        "isModal": false,
        "addWidgets": addWidgetspopupTopPreview
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 100,
        "containerHeight": 45,
        "containerHeightReference": constants.HEIGHT_BY_DEVICE_REFERENCE,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_PAN,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
    var x = {
        fingers: 2,
        pressDuration: 1
    };
    try {
        kony.application.setGestureRecognizerForAllForms(3, x, function(widgetRef, gestureInfo) {
            if (kony.os.toNumber(gestureInfo["gestureType"]) == 3) {
			var currentfrmFP = kony.application.getCurrentForm();	
			var notesId = currentfrmFP.info.notesId;
			var annotationDataPREVIEW = getAnnotations(notesId);	
			popupHeightFP = 40;
			
			if (annotationDataPREVIEW !== null && annotationDataPREVIEW !== undefined && annotationDataPREVIEW["comments"] !== null) {
				var annLength = annotationDataPREVIEW["comments"].length;
				
				switch(annLength)
				{
					case 1:
						popupHeightFP = 20;
						break;
					case 2:
						popupHeightFP = 30;
						break;
					case 3:
						popupHeightFP = 30;
						break;
					default:
						popupHeightFP = 40;
				}
			
			}
			
			
                var context_leftSwipe = {
                    "widget": currentfrmFP,
                    "anchor": "bottom",
                    "sizetoanchorwidth": false
                };
                //setContext method call  
                if (annotationDataPREVIEW !== null && annotationDataPREVIEW !== undefined && annotationDataPREVIEW["comments"] !== null) {
                    popupBottomPreview.setContext(context_leftSwipe);
                    popupBottomPreview.segPopupPreview.setData(annotationDataPREVIEW["comments"])
					popupBottomPreview.containerHeight = popupHeightFP;
                    popupBottomPreview.show();
                }
            }
        });
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackSingleTapGesture:" + err.message);
    }
    var y = {
        fingers: 2,
        swipedistance: 30,
        swipevelocity: 60
    };
    try {
        kony.application.setGestureRecognizerForAllForms(2, y, function(widgetRef, gestureInfo) {
            if (kony.os.toNumber(gestureInfo["gestureType"]) == 2) {
                if (kony.os.toNumber(gestureInfo["swipeDirection"]) == 2) {
                    kony.application.launchApplication(null);
                }
            }
        });
    } catch (err) {
        alert(typeof err);
        alert("error in function callbackSingleTapGesture:" + err.message);
    }
};