function successCall() {
    //alert("Functional Module successfully loaded");
}

function errorCall(modulename, error) {
    alert("Could not load Functional Module, error code: " + error + " in module: " + modulename);
}

function loadModtrue() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_001", successCall001, errorCall);
}

function successCall001() {
    frm1.show();
}

function loadModfalse() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_002", successCall002, errorCall);
}

function successCall002() {
    frm2.show();
}

function loadModule1250() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_0002", successCall, errorCall1250);
}

function errorCall1250(modulename, error) {
    frm2.lbl1250.text = "Label set in error call back, error code: " + error + " in module: " + modulename;
    //alert(modulename + "," + error);
}

function loadModule1251() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_1251", successCall, errorCall1251);
}

function errorCall1251(modulename, error) {
    frm2.lbl1251.text = "Label set in error call back, error code: " + error + " in module: " + modulename;
}

function loadpopup() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_004", successCallpopup, errorCall);
}

function successCallpopup() {
    pop1.show();
}

function loadviews() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_005", successCallviews, errorCall);
}

function successCallviews() {
    frm3.show();
}

function loadModule() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_006", successCall, errorCall);
}

function loadModulereltv() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_007", successCall, errorCall);
}

function loadModulviewMod() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_008", successCall008, errorCall);
}

function successCall008() {
    frm4.show();
}

function loadModulPopHdrMod() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_009", successCall009, errorCall);
}

function successCall009() {
    pop4.show();
}

function loadModulViewJsmod() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_011", successCall011, errorCall);
}

function successCall011() {
    frm5.show();
}

function loadModul2dpnds() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_012", successCall012, errorCall);
}

function successCall012() {
    frm6.show();
}

function loadModulInit() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_019", successCall, errorCall);
}

function loadModulprShw() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_020", successCall, errorCall);
}

function loadModulpstShw() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_021", successCall, errorCall);
}

function loadModulonHide() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_022", successCall, errorCall);
}

function loadModulonOrntchng() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_023", successCall, errorCall);
}

function loadModulpstAppInt() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_024", successCall, errorCall);
}

function loadModuldstryEvntt() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_025", successCall, errorCall);
}

function loadModulAppsrvc() {
    kony.modules.loadFunctionalModuleAsync("loadmodule_026", successCall, errorCall);
}

function onSubmitJSMethod() {
    var experience = 2.0; //Number
    var name = "John Smith"; //String
    var isMarriedBoolean = true; //Boolean
    var progLang = ["Objective C", "Java", "C++", "Ruby", "Python", "Javascript"];
    var result = ffiMethodJS.memberRegisterJS(experience, name, isMarriedBoolean, progLang);
    frm4.richResult.text = "" + result;
}