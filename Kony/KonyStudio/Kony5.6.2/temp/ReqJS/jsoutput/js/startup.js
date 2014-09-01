//startup.js file
//#ifdef iphone
    //#define IOS_NATIVE_PLATFORMS
//#endif
//#ifdef ipad
    //#define IOS_NATIVE_PLATFORMS
//#endif
//#ifdef android
    //#define android_ios
//#endif
//#ifdef iphone
    //#define android_ios
//#endif
//#ifdef tabrcandroid
    //#define android_ios
//#endif
//#ifdef ipad
    //#define android_ios
//#endif
//#ifdef spaip
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef spaan
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef spabb
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef spabbnth
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef spawinphone8
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef spawindows
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef spatabwindows
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef spaipad
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef spatabandroid
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef spaplaybook
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef desktopweb
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef xadvip
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef xadvbb
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef xadvand
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef xadvnth
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef xadvpalm
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef basic
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif
//#ifdef bjs
  //#define SPA_HYBRID_WRAPPER_STARTUP_TC
//#endif

//#ifdef bb
    //#define FM_EXCEPTIONAL_PLATFORMS
//#endif
//#ifdef bb10
    //#define FM_EXCEPTIONAL_PLATFORMS
//#endif
//#ifdef winmobile
    //#define FM_EXCEPTIONAL_PLATFORMS
//#endif
//#ifdef winmobile6x
    //#define FM_EXCEPTIONAL_PLATFORMS
//#endif

//#ifdef SPA_HYBRID_WRAPPER_STARTUP_TC
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
//#ifdef TC_PLATFORMS
  //#define FM_EXCEPTIONAL_PLATFORMS
//#endif


function ReqJSpreappinit_seq0(params){

num1 = kony.math.pow(5,2);
alert("Accessing functions of konylibrary.js in pre app init");
alert("Result of kony.math.pow(5,2) is: " + num1);

define("cartPreAppInit",        
        function() 
        {
         return {"cartPreAppInit":"Cart object"};
        }
);

require(["cartPreAppInit"], 
  function(cartPreAppInit){
   alert("Testing RequireJS in pre app init");
   alert("Showing return value from define cart function: " + cartPreAppInit.cartPreAppInit);
  }
);

};



var appConfig={appId:  "ReqJS" ,
        appName: "ReqJS" , 
	appVersion: "1.0.5" ,
	platformVersion: null ,
	serverIp: "10.11.12.90" ,
	serverPort: "9090" ,
        secureServerPort: "443" ,
	                            url:"https://abhijeet-anand.konycloud.com/ReqJS/MWServlet",
                secureurl:"https://abhijeet-anand.konycloud.com/ReqJS/MWServlet",
                            //#ifdef TC_PLATFORMS
            "noScriptMessage" : "To use this site, first enable your browser;kqt;s JavaScript support and then refresh this page.",                                                                                                                                                           
                                                                                     
//#endif
         middlewareContext: "ReqJS" 
};
     
sessionID = "";
    

function appInit( params )
{

    skinsInit();
        //#ifdef desktopweb
                                                            //#endif
    //#ifdef FM_EXCEPTIONAL_PLATFORMS
                    //#else
                    //#endif
    //#ifndef desktopweb
           //#ifdef FM_EXCEPTIONAL_PLATFORMS
                          //#else
                          //#endif
          //#ifdef FM_EXCEPTIONAL_PLATFORMS
                          //#else
                          //#endif
          //#ifdef FM_EXCEPTIONAL_PLATFORMS
                          //#else
                          //#endif
          //#ifdef FM_EXCEPTIONAL_PLATFORMS
                          //#else
                          //#endif
    //#endif


      //#ifdef FM_EXCEPTIONAL_PLATFORMS
            frmHomeGlobals();
        //#else
            frmHomeGlobals();
        //#endif
        setAppBehaviors();
    

};

function setAppBehaviors(){
                kony.application.setApplicationBehaviors({applyMarginPaddingInBCGMode:false,
        adherePercentageStrictly:true,
        retainSpaceOnHide:true 
        })
      
};
function themeCallBack(){

                                                        kony.application.setApplicationInitializationEvents({                                                                                                 preappinit : ReqJSpreappinit_seq0,
                                                                                                                                                                                             init : appInit,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    showstartupform : function (){
                                                                                                                                                                                                                                                    frmHome.show();
                                                                                                                        }
                                                                                             });
};

function loadResources(){
     
      	     
                 //#ifdef spaip
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spaan
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spabb
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spawindows
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spawinphone8
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spabbnth
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spaipad
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spatabandroid
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spatabwindows
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spaplaybook
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef desktopweb
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef xadvip
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef xadvand
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef xadvbb
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef xadvnth
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef xadvpalm
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef basic
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef bjs
		  //#define PackagedThemesPlatforms
		 //#endif
	  	  
	  //#ifdef PackagedThemesPlatforms
                 kony.theme.packagedthemes(
                              [
                                                                  "default"
                                                         ]
              );
      //#endif
   
   globalhttpheaders = {
                        };


                
           kony.theme.setCurrentTheme("default",themeCallBack,themeCallBack);
    };



function initializeApp() {
          kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    

    //If default locale is specified. This is set even before any other app life cycle event is called.
            loadResources();
    };



//#else


function ReqJSpreappinit_seq0(params){

num1 = kony.math.pow(5,2);
alert("Accessing functions of konylibrary.js in pre app init");
alert("Result of kony.math.pow(5,2) is: " + num1);

define("cartPreAppInit",        
        function() 
        {
         return {"cartPreAppInit":"Cart object"};
        }
);

require(["cartPreAppInit"], 
  function(cartPreAppInit){
   alert("Testing RequireJS in pre app init");
   alert("Showing return value from define cart function: " + cartPreAppInit.cartPreAppInit);
  }
);

};



var globalhttpheaders= {};



var appConfig={appId:  "ReqJS" ,
        appName: "ReqJS" , 
	appVersion: "1.0.5" ,
	platformVersion: null ,
	serverIp: "10.11.12.90" ,
	serverPort: "9090" ,
        secureServerPort: "443" ,
        isDebug:  false ,
	middlewareContext: "ReqJS" ,
                                    url:"https://abhijeet-anand.konycloud.com/ReqJS/MWServlet",
                secureurl:"https://abhijeet-anand.konycloud.com/ReqJS/MWServlet"};
                    
sessionID = "";

    

   

function appInit( params )
{
    skinsInit();
            //#ifdef IOS_NATIVE_PLATFORMS
            kony.application. setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        //#endif
                //#ifdef IOS_NATIVE_PLATFORMS
            kony.application.setDefaultTextboxPadding(false);
        //#endif
                //#ifdef IOS_NATIVE_PLATFORMS
            kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        //#endif
                //#ifdef FM_EXCEPTIONAL_PLATFORMS
                        //#else
                        //#endif
        //#ifdef FM_EXCEPTIONAL_PLATFORMS
            //#else
            //#endif
    //#ifdef FM_EXCEPTIONAL_PLATFORMS
            //#else
            //#endif
    //#ifdef FM_EXCEPTIONAL_PLATFORMS
            //#else
        //#endif
    //#ifdef FM_EXCEPTIONAL_PLATFORMS
        //#else
        //#endif

 
      //#ifdef FM_EXCEPTIONAL_PLATFORMS
            frmHomeGlobals();
        //#else
            frmHomeGlobals();
        //#endif
        setAppBehaviors();

    

};

function setAppBehaviors(){
                    //#ifdef android_ios
        kony.application.setApplicationBehaviors({applyMarginPaddingInBCGMode:false,
        adherePercentageStrictly:true,
        retainSpaceOnHide:true,
        marginsIncludedInWidgetContainerWeight:true
        })
        //#else
        kony.application.setApplicationBehaviors({applyMarginPaddingInBCGMode:false,
        adherePercentageStrictly:true,
        retainSpaceOnHide:true 
        })
        //#endif
      
};

function themeCallBack(){


		
                                                        kony.application.setApplicationInitializationEvents({                                                                                                 preappinit : ReqJSpreappinit_seq0,
                                                                                                                                                                                             init : appInit,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       showstartupform : function (){
                                                                                                                                                                                                                                                    frmHome.show();
                                                                                                                        }
                                                                                             });
};

function loadResources(){
     
      	     
                 //#ifdef spaip
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spaan
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spabb
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spawindows
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spawinphone8
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spabbnth
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spaipad
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spatabandroid
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spatabwindows
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef spaplaybook
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef desktopweb
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef xadvip
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef xadvand
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef xadvbb
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef xadvnth
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef xadvpalm
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef basic
		  //#define PackagedThemesPlatforms
		 //#endif
	  	     
                 //#ifdef bjs
		  //#define PackagedThemesPlatforms
		 //#endif
	  	  
	  //#ifdef PackagedThemesPlatforms
                 kony.theme.packagedthemes(
                              [
                                                                  "default"
                                                         ]
              );
      //#endif
   
   globalhttpheaders = {
                        };
                        
           kony.theme.setCurrentTheme("default",themeCallBack,themeCallBack);
    };


//#ifdef bb10
function initializeBB10App(){
//#endif
            kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    
    //If default locale is specified. This is set even before any other app life cycle event is called.
            loadResources();
     //#ifdef bb10
        }
    //#endif

//#endif


kony.print = function(){
return;
};



