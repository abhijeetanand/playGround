//
app_global_context = {};
app_global_context["funcArray"] = {};
app_global_context["funcArray"]["basic"] = [];
app_global_context["funcArray"]["nonui"] = [];
app_global_context["funcArray"]["sql"] = [];


//registration function
app_global_context["registerFunc"] = function(description, funcObj, type) {
    var funcInfoObject = {};
    funcInfoObject["desc"] = description;
    funcInfoObject["func"] = funcObj;
    var insertIndex = app_global_context["funcArray"][type].length;
    app_global_context["funcArray"][type][insertIndex] = funcInfoObject;
};

function init_segui_set_data_withtype(type, frm) {
    var segUIData = [];
    var funcObjArray = app_global_context["funcArray"][type];
    for (var i = 0; i < funcObjArray.length; i++) {
        segUIData[i] = {};
        segUIData[i]["segUILabel"] = "Woker TestCase: " + funcObjArray[i]["desc"];
    }
    frm.segUI.setData(segUIData);
};

//basic
function init_segui_set_data() {
    init_segui_set_data_withtype("basic", frmMain);
    init_segui_set_data_withtype("nonui", frmNonUI);
    init_segui_set_data_withtype("sql", frmSQL);
};


//rowonclick
//basic
function segui_on_row_click(eventobject, sectionNumber, rowNumber, type) {
    kony.print("segui_on_row_click : sectionNumber : " + sectionNumber);
    kony.print("segui_on_row_click : rowNumber : " + rowNumber);
    kony.print("segui_on_row_click : type : " + type);
    app_global_context["funcArray"][type][rowNumber]["func"]();
};

