


function onSubmitJSMethod(){
  var experience = 2.0;//Number
  var name = "John Smith";//String
  var isMarriedBoolean = true;//Boolean
  var progLang = ["Objective C","Java","C++","Ruby","Python","Javascript"];
  var result = ffiMethodJS.memberRegisterJS( experience,  name,  isMarriedBoolean, progLang);
  postMessage(result);
 }

onSubmitJSMethod();