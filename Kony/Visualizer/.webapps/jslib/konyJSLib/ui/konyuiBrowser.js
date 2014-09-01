//Browser Constructor
kony.ui.Browser = function(bconfig, lconfig, pspconfig) {
		
	kony.ui.Browser.baseConstructor.call(this, bconfig, lconfig, pspconfig);
		
	this.onSuccess = bconfig.onSuccess;					//Not Supported	
	this.onFailure = bconfig.onFailure;					//Not Supported	
	this.screenLevelWidget = bconfig.screenLevelWidget; //Not Supported	
	this.enableZoom = bconfig.enableZoom;				//Not Supported	
	this.detectTelNumber = bconfig.detectTelNumber;		//Not Supported	
	
	this.readconfig = function(val) {
    		this.url = val.URL;
    		this.method = val.requestMethod;
    		this.data = val.requestData;
	}
    
    bconfig.requestURLConfig && this.readconfig(bconfig.requestURLConfig);
    this.requesturlconfig = bconfig.requestURLConfig;	
	this.htmlstring =  bconfig.htmlString;	
     
    //Internal Usage
    this.wType = "Browser";
    this.name =  "kony.ui.Browser";
	
	this.setGetterSetter();	
};

kony.inherits(kony.ui.Browser,kony.ui.Widget);

kony.ui.Browser.prototype.setGetterSetter = function() {

	defineGetter(this, "htmlString", function() {
		return this.htmlstring;
	});	
	defineSetter(this, "htmlString", function(val) {
		this.htmlstring = val;
		$KW[this.wType]["updateView"](this,  "htmlstring" , val);
	});	

	defineGetter(this, "requestURLConfig", function() {
		return this.requesturlconfig;
	});	
	defineSetter(this, "requestURLConfig", function(val) {
		this.requesturlconfig = val;
		this.readconfig(val);
		$KW[this.wType]["updateView"](this, "requesturlconfig", val);
	});

}

//Browser Methods	
kony.ui.Browser.prototype.reload = 
kony.ui.Browser.prototype.goForward = 
kony.ui.Browser.prototype.goBack = 
kony.ui.Browser.prototype.canGoBack = 
kony.ui.Browser.prototype.canGoForward = 
kony.ui.Browser.prototype.clearHistory = function() {	
	console.warn("Browser Methods are not supported in SPA");
};