function loadModtrue() {
    a = kony.modules.loadFunctionalModule("loadmodule_001");
    frm1.show();
    alert(a);
}

function loadModfalse() {
    kony.modules.loadFunctionalModule("loadmodule_002");
    frm2.show();
    a = kony.modules.loadFunctionalModule("loadmodule_0002");
    if (a == false) {
        alert(a);
    } else {
        alert("hi");
    }
}

function loadpopup() {
    kony.modules.loadFunctionalModule("loadmodule_004");
    pop1.show();
}

function loadviews() {
    kony.modules.loadFunctionalModule("loadmodule_005");
    frm3.show();
}

function loadModule() {
    kony.modules.loadFunctionalModule("loadmodule_006");
}

function loadModulereltv() {
    kony.modules.loadFunctionalModule("loadmodule_007");
}

function loadModulviewMod() {
    kony.modules.loadFunctionalModule("loadmodule_008");
    frm4.show();
}

function loadModulPopHdrMod() {
    kony.modules.loadFunctionalModule("loadmodule_009");
    pop4.show();
}

function loadModulViewJsmod() {
    kony.modules.loadFunctionalModule("loadmodule_011");
    frm5.show();
}

function loadModul2dpnds() {
    kony.modules.loadFunctionalModule("loadmodule_012");
    frm6.show();
}

function loadModulInit() {
    kony.modules.loadFunctionalModule("loadmodule_019");
}

function loadModulprShw() {
    kony.modules.loadFunctionalModule("loadmodule_020");
}

function loadModulpstShw() {
    kony.modules.loadFunctionalModule("loadmodule_021");
}

function loadModulonHide() {
    kony.modules.loadFunctionalModule("loadmodule_022");
}

function loadModulonOrntchng() {
    kony.modules.loadFunctionalModule("loadmodule_023");
}

function loadModulpstAppInt() {
    kony.modules.loadFunctionalModule("loadmodule_024");
}

function loadModuldstryEvntt() {
    kony.modules.loadFunctionalModule("loadmodule_025");
}

function loadModulAppsrvc() {
    kony.modules.loadFunctionalModule("loadmodule_026");
}

function onSubmitJSMethod() {
    var experience = 2.0; //Number
    var name = "John Smith"; //String
    var isMarriedBoolean = true; //Boolean
    var progLang = ["Objective C", "Java", "C++", "Ruby", "Python", "Javascript"];
    var result = ffiMethodJS.memberRegisterJS(experience, name, isMarriedBoolean, progLang);
    frm4.richResult.text = "" + result;
}