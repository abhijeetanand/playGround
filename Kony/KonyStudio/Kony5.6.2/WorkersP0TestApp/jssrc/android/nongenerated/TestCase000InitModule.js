//
app_global_context = {};
app_global_context["functionArrayNonUI"] = [];
app_global_context["basicFuncArray"] = [];
app_global_context["nonuiFuncArray"] = [];
//registration function
app_global_context["registerFunc"] = function(description, funcObj, type) {
    var funcInfoObject = {};
    funcInfoObject["desc"] = description;
    funcInfoObject["func"] = funcObj;
    var funcObjArrayType = "basicFuncArray";
    if ("basic" == type) {
        funcObjArrayType = "basicFuncArray";
    } else if ("nonui" == type) {
        funcObjArrayType = "nonuiFuncArray";
    }
    var insertIndex = app_global_context[funcObjArrayType].length;
    app_global_context[funcObjArrayType][insertIndex] = funcInfoObject;
};
//basic
function init_segui_set_data() {
    var segUIData = [];
    var funcObjArray = app_global_context["basicFuncArray"];
    for (var i = 0; i < funcObjArray.length; i++) {
        segUIData[i] = {};
        segUIData[i]["segUILabel"] = "Woker TestCase: " + i + funcObjArray[i]["desc"];
    }
    frmMain.segUI.setData(segUIData);
};

function segui_on_row_click(eventobject, sectionNumber, rowNumber) {
    kony.print("segui_on_row_click : sectionNumber : " + sectionNumber);
    kony.print("segui_on_row_click : rowNumber : " + rowNumber);
    app_global_context["basicFuncArray"][rowNumber]["func"]();
};
//non UI
function init_segui_set_data_nonui() {
    var segUIData = [];
    var funcObjArray = app_global_context["nonuiFuncArray"];
    for (var i = 0; i < funcObjArray.length; i++) {
        segUIData[i] = {};
        segUIData[i]["segUILabel"] = "Woker TestCase: " + funcObjArray[i]["desc"];
    }
    frmNonUI.segUI.setData(segUIData);
};

function segui_on_row_click_nonui(eventobject, sectionNumber, rowNumber) {
    kony.print("segui_on_row_click : sectionNumber : " + sectionNumber);
    kony.print("segui_on_row_click : rowNumber : " + rowNumber);
    app_global_context["nonuiFuncArray"][rowNumber]["func"]();
};