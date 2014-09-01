function addWidgetsfrmHome() {
    var hBoxTop1 = new kony.ui.Box({
        "id": "hBoxTop1",
        "skin": "slHbox",
        "onClick": null,
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "percent": true,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "containerWeight": 100,
        "vExpand": false
    }, {
        "fixedHeightRow": false
    });
    var btn1 = new kony.ui.Button({
        "id": "btn1",
        "skin": "slButtonGlossBlue",
        "focusSkin": "slButtonGlossRed",
        "onClick": null,
        "isVisible": true,
        "text": "Button"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "containerWeight": 100,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "hExpand": true,
        "vExpand": false,
        "displayText": true
    }, {
        "glowEffect": false,
        "showProgressIndicator": false
    });
    hBoxTop1.add(
    btn1);
    var Image09958efedd61142 = new kony.ui.Image2({
        "id": "Image09958efedd61142",
        "isVisible": true,
        "onDownloadComplete": null,
        "src": "zoomout.png"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "containerWeight": 100,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT,
        "skin": "slImage"
    });
    frmHome.add(
    hBoxTop1, Image09958efedd61142);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "type": constants.FORM_TYPE_NATIVE,
        "title": null,
        "skin": "slForm",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "addWidgets": addWidgetsfrmHome,
        "init": null,
        "preShow": null,
        "postShow": null,
        "onHide": null,
        "onOrientationChange": null,
        "onDestroy": null
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "titleBarConfig": {
            "renderTitleText": true,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "needsIndicatorDuringPostShow": false,
        "formTransparencyDuringPostShow": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        },
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "bounces": true
    });
    frmHome.info = {};
};