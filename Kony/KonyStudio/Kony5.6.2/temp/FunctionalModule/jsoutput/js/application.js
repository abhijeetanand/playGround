//application.js file
function displayMWError()
{
 kony.ui.Alert("Middleware Error ",null,"error",null,null);
};
function displaySessionError()
{
 kony.ui.Alert("Session Expired .. Please re-login",null,"error",null,null);
};
function displayError(code, msg)
{
// Commented for SWA: kony.ui.Alert("Error Code: "..code .." Message: " ..msg,null,"error",null,null);
	kony.ui.Alert(code+"- "+msg,null,"error",null,null);
};

//#ifdef xadvip
 //#define TC_PLATFORMS
//#endif
//#ifdef xadvbb
 //#define TC_PLATFORMS
//#endif
//#ifdef xadvand
 //#define TC_PLATFORMS
//#endif
//#ifdef xadvnth
 //#define TC_PLATFORMS
//#endif
//#ifdef xadvpalm
 //#define TC_PLATFORMS
//#endif
//#ifdef basic
 //#define TC_PLATFORMS
//#endif
//#ifdef bjs
 //#define TC_PLATFORMS
//#endif


var mergeHeaders = function (httpHeaders,globalHeaders){
 for (var attrName in globalHeaders) { 
 httpHeaders[attrName] = globalHeaders[attrName];
 }
 return httpHeaders;
}

//#ifdef spaip
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spaan
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spabb
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef desktopweb
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spawindows
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spawinphone8
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spatabwindows
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spabbnth
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spaipad
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spatabandroid
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spaplaybook
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef playbook
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef SpaMiddlewareInvoker

//#else
function appmiddlewareinvoker (inputParam, isBlocking, indicator, datasetID)
{
 var url = appConfig.url;
 var sessionIdKey = "cacheid";
 
 inputParam.appID = appConfig.appId;
 inputParam.appver = appConfig.appVersion;
 //#ifdef TC_PLATFORMS
 inputParam["channel"] = "wap";
 //#else
 inputParam["channel"] = "rc";
 //#endif

 	 	 //#ifdef android
		 inputParam["platformver"] = "5.6.GA_v201408140021";
		 //#endif
 		 	 //#ifdef wap
		 inputParam["platformver"] = "5.6.GA_v201408140259";
		 //#endif
 	 	 	 inputParam["platform"] = kony.os.deviceInfo().name;
 
 if (indicator) {
 inputParam["indicator"] = indicator;
 };

 if (datasetID){
 inputParam["datasetID"] = datasetID ;
 };
 inputParam[sessionIdKey] = sessionID;

 if(globalhttpheaders){
 if(inputParam["httpheaders"]){
 inputParam.httpheaders = mergeHeaders(inputParam.httpheaders ,globalhttpheaders);
 }
	else
	{
 inputParam["httpheaders"] = mergeHeaders({},globalhttpheaders);
 };
 };

 var resulttable = kony.net.invokeService(url, inputParam, isBlocking);
 if (resulttable){
 if (resulttable[sessionIdKey]){
 sessionID = resulttable[sessionIdKey];
 };
 };
 
 return resulttable;

};

function appmiddlewaresecureinvoker (inputParam, isBlocking, indicator, datasetID)
{
 var url = appConfig.secureurl;
 var sessionIdKey = "cacheid";
 
 inputParam.appID = appConfig.appId;
 inputParam.appver = appConfig.appVersion;
 //#ifdef TC_PLATFORMS
 inputParam["channel"] = "wap";
 //#else
 inputParam["channel"] = "rc";
 //#endif
 	 	 //#ifdef android
		 inputParam["platformver"] = "5.6.GA_v201408140021";
		 //#endif
 		 	 //#ifdef wap
		 inputParam["platformver"] = "5.6.GA_v201408140259";
		 //#endif
 	 	 	 inputParam["platform"] = kony.os.deviceInfo().name;
 
 if (indicator) {
 inputParam["indicator"] = indicator;
 };

 if (datasetID){
 inputParam["datasetID"] = datasetID ;
 };
 inputParam[sessionIdKey] = sessionID;

 if(globalhttpheaders){
 if(inputParam["httpheaders"]){
 inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
 }else{
 inputParam["httpheaders"] = mergeHeaders({},globalhttpheaders);
 };
 };

 var resulttable = kony.net.invokeService(url, inputParam, isBlocking);
 if (resulttable){
 if (resulttable[sessionIdKey]){
 sessionID = resulttable[sessionIdKey];
 };
 };
 
 return resulttable;

};
//#endif

function appmiddlewareinvokerasync (inputParam, callBack)
{
 var url = appConfig.url;
 var sessionIdKey = "cacheid";
 
 inputParam.appID = appConfig.appId;
 inputParam.appver = appConfig.appVersion;
 //#ifdef TC_PLATFORMS
 inputParam["channel"] = "wap";
 //#else
 //#ifdef SpaMiddlewareInvoker
 inputParam["channel"] = "wap";
 //#else
 inputParam["channel"] = "rc";
 //#endif
 //#endif

 	 	 //#ifdef android
		 inputParam["platformver"] = "5.6.GA_v201408140021";
		 //#endif
 		 	 //#ifdef wap
		 inputParam["platformver"] = "5.6.GA_v201408140259";
		 //#endif
 	 	 	 inputParam["platform"] = kony.os.deviceInfo().name;


 inputParam[sessionIdKey] = sessionID;

 if(globalhttpheaders){
 if(inputParam["httpheaders"]){
 inputParam.httpheaders = mergeHeaders(inputParam.httpheaders ,globalhttpheaders);
 }
	else
	{
 inputParam.httpheaders = mergeHeaders({},globalhttpheaders);
 };
 };

 var connHandle = kony.net.invokeServiceAsync (url, inputParam, callBack)
 return connHandle;
};

function appmiddlewaresecureinvokerasync (inputParam, callBack)
{
 var url = appConfig.secureurl;
 var sessionIdKey = "cacheid";
 
 inputParam.appID = appConfig.appId;
 inputParam.appver = appConfig.appVersion;
 //#ifdef TC_PLATFORMS
 inputParam["channel"] = "wap";
 //#else
 //#ifdef SpaMiddlewareInvoker
 inputParam["channel"] = "wap";
 //#else
 inputParam["channel"] = "rc";
 //#endif
 //#endif

 	 	 //#ifdef android
		 inputParam["platformver"] = "5.6.GA_v201408140021";
		 //#endif
 		 	 //#ifdef wap
		 inputParam["platformver"] = "5.6.GA_v201408140259";
		 //#endif
 	 	 	 inputParam["platform"] = kony.os.deviceInfo().name;


 inputParam[sessionIdKey] = sessionID;

 if(globalhttpheaders){
 if(inputParam["httpheaders"]){
 inputParam.httpheaders = mergeHeaders(inputParam.httpheaders,globalhttpheaders);
 }else{
 inputParam["httpheaders"] = mergeHeaders({},globalhttpheaders);
 };
 };

 var connHandle = kony.net.invokeServiceAsync (url, inputParam, callBack)
 return connHandle;
};

function appmiddlewaresecureinvokerasyncForMBAAS (inputParam, serviceID, operationID, callBack)
{
 var url = appConfig.secureurl;
 var sessionIdKey = "cacheid";
 
 inputParam.appID = appConfig.appId;
 inputParam.appver = appConfig.appVersion;
 //#ifdef TC_PLATFORMS
 inputParam["channel"] = "wap";
 //#else
 //#ifdef SpaMiddlewareInvoker
 inputParam["channel"] = "wap";
 //#else
 inputParam["channel"] = "rc";
 //#endif
 //#endif

 	 	 //#ifdef android
		 inputParam["platformver"] = "5.6.GA_v201408140021";
		 //#endif
 		 	 //#ifdef wap
		 inputParam["platformver"] = "5.6.GA_v201408140259";
		 //#endif
 	 	 	 inputParam["platform"] = kony.os.deviceInfo().name;


 inputParam[sessionIdKey] = sessionID;

 if(globalhttpheaders){
 if(inputParam["httpheaders"]){
 inputParam.httpheaders = mergeHeaders(inputParam.httpheaders,globalhttpheaders);
 }else{
 inputParam["httpheaders"] = mergeHeaders({},globalhttpheaders);
 };
 };

 if(kony.mbaas)
 {
 kony.mbaas.invokeMbaasServiceFromKonyStudio(url,inputParam,serviceID,operationID,callBack);
 }
 else
 {
 alert("Unable to find the MBAAS SDK for KonyStudio. Please download the SDK from the Kony Cloud Console and add as module to the Kony Project.");
 }

};
function makeCall(eventobject)
{
 kony.phone.dial(eventobject.text);
};

 		
	
	//#ifdef iphone
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

,
{selectedImage:""}
] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

,
{selectedImage:""}
] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef bb
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

,
true
] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

,
true
] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef bb10
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef winmobile
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef winmobile6x
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef winphone8
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef android
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

,
{"showAsFlag":constants.MENUITEM_SHOW_AS_ACTION_NEVER}
] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

,
{"showAsFlag":constants.MENUITEM_SHOW_AS_ACTION_NEVER}
] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef xadvip
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef xadvand
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef xadvbb
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef xadvnth
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef bjs
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef basic
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef xadvpalm
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef j2me
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef symbian
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

,
false
] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

,
false
] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef palm
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef spaip
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef spaan
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef spabb
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef spawindows
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef spabbnth
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif



 		
	
	//#ifdef spawinphone8
	 appMenu = null;
 function callAppMenu(){
 var appMenu = [
 [
"home",
 "home"
 

 ,
 "h.png"
 

 ,
 home_callback_seq0
 

] ,
 [
"exit",
 "exit"
 

 ,
 "e.png"
 

 ,
 exit_callback_seq0
 

] ];
 
kony.application.createAppMenu("FunctionalModuleAppMenu", appMenu,
 null


 ,
 null


 );

kony.application.setCurrentAppMenu("FunctionalModuleAppMenu");
}
 //#endif


