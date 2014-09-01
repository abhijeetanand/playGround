gblBrowserWidget = null;
gblUrl = null;
gblUrlFlag = null;

function createBrowserWidget() {
    kony.print("==========> createBrowserWidget - Begin");
    gblBrowserWidget = new kony.ui.Browser({
        "id": "brwWidgetOne",
        "text": "Browser",
        "isVisible": true,
        "requestURLConfig": {
            "URL": gblUrl,
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "detectTelNumber": true,
        "screenLevelWidget": true,
        "enableZoom": true
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {});
    frmHome.add(gblBrowserWidget);
    kony.print("==========> createBrowserWidget - End");
}

function removeBrowserWidget() {
    kony.print("==========> removeBrowserWidget - Begin");
    frmHome.remove(gblBrowserWidget);
    kony.print("==========> removeBrowserWidget - End");
}

function button1() {
    gblUrl = "http://www.moh.gov.ae/en/MobileApp/Pages/ServiceCatalogue.aspx";
    frmHome["brwWidgetOne"]["URL"] = "http://www.moh.gov.ae/en/MobileApp/Pages/ServiceCatalogue.aspx";
    frmHome.show();
}

function button2() {
    gblUrl = "https://www.mygov.ae/mygov/index.aspx";
    frmHome["brwWidgetOne"]["URL"] = "https://www.mygov.ae/mygov/index.aspx";
    frmHome.show();
}

function button3() {
    gblUrl = "https://www.mygov.ae/mygov/index.aspx";
    frmHome["brwWidgetOne"]["URL"] = "https://www.mygov.ae/mygov/index.aspx";
    frmHome.show();
}

function button4() {
    gblUrl = "http://www.moh.gov.ae/en/MobileApp/Pages/PollResult.aspx";
    frmHome["brwWidgetOne"]["URL"] = "http://www.moh.gov.ae/en/MobileApp/Pages/PollResult.aspx";
    frmHome.show();
}

function button5() {
    gblUrl = "https://smartforms.moh.gov.ae:444/login.aspx";
    frmHome["brwWidgetOne"]["URL"] = "https://smartforms.moh.gov.ae:444/login.aspx";
    frmHome.show();
}