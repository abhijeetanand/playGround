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


var appConfig={appId:  "BrowserWidgetEx" ,
        appName: "BrowserWidgetEx" , 
	appVersion: "1.0.0" ,
	platformVersion: null ,
	serverIp: "10.10.3.92" ,
	serverPort: "80" ,
        secureServerPort: "443" ,
	                            url:"https://abhijeet-anand.konycloud.com/BrowserWidgetEx/MWServlet",
                secureurl:"https://abhijeet-anand.konycloud.com/BrowserWidgetEx/MWServlet",
                            //#ifdef TC_PLATFORMS
            "noScriptMessage" : "To use this site, first enable your browser;kqt;s JavaScript support and then refresh this page.",                                                                               "hasPopup" : true,                                                                              
                                                                                     
//#endif
         middlewareContext: "BrowserWidgetEx" 
};
     
sessionID = "";
    

function appInit( params )
{

    skinsInit();
            initializeheaderOne();
                initializefooterOne();
                                

              frmBrowserGlobals();
            frmHomeGlobals();
        //to generate adherePercentageStrictly, retainSpace, marginPaddingConsistency flags as true if the project is created in 5.5
    setAppBehaviors();
    

};

function setAppBehaviors(){
                            //#ifdef desktopweb
                             kony.application.setApplicationBehaviors({applyMarginPaddingInBCGMode:true,
                adherePercentageStrictly:true,
                retainSpaceOnHide:true 
                })
                    //#else
            kony.application.setApplicationBehaviors({applyMarginPaddingInBCGMode:false,
                adherePercentageStrictly:true,
                retainSpaceOnHide:true 
                })
        //#endif
      
};
function themeCallBack(){

                                                        kony.application.setApplicationInitializationEvents({                                                                                                 init : appInit,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    showstartupform : function (){
                                                                                                                                                                                                                                                    frmBrowser.show();
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


var globalhttpheaders= {};



var appConfig={appId:  "BrowserWidgetEx" ,
        appName: "BrowserWidgetEx" , 
	appVersion: "1.0.0" ,
	platformVersion: null ,
	serverIp: "10.10.3.92" ,
	serverPort: "80" ,
        secureServerPort: "443" ,
        isDebug:  true ,
	middlewareContext: "BrowserWidgetEx" ,
                                    url:"https://abhijeet-anand.konycloud.com/BrowserWidgetEx/MWServlet",
                secureurl:"https://abhijeet-anand.konycloud.com/BrowserWidgetEx/MWServlet"};
                    
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
                            initializeheaderOne();
                            initializefooterOne();
                            
 
              frmBrowserGlobals();
            frmHomeGlobals();
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


		
                                                        kony.application.setApplicationInitializationEvents({                                                                                                 init : appInit,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      showstartupform : function (){
                                                                                                                                                                                                                                                    frmBrowser.show();
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

 //#ifdef iphone
   //#define DEBUG_CALL
 //#endif
 //#ifdef android
   //#define DEBUG_CALL
 //#endif
 //#ifdef ipad
   //#define DEBUG_CALL
 //#endif
 //#ifdef tabrcandroid
   //#define DEBUG_CALL
 //#endif

 //#ifdef DEBUG_CALL
    // If you wish to debug Application Initialization events, now is the time to
    // place breakpoints.
     debugger;
 //#endif





