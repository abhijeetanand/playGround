kony.inherits = function(subClass, baseClass) {
   
   function inherit() {}
   
   inherit.prototype = baseClass.prototype;
   subClass.prototype = new inherit();
   subClass.prototype.constructor = subClass;
   subClass.baseConstructor = baseClass;
   subClass.superClass = baseClass.prototype;
};

kony.ui = {

	Widget: function(bconfig, lconfig, pspconfig) {

		// Exception handling
		if(arguments.length < 3)
			throw new KonyError(101, "Error", "Invalid number of arguments");	// (errorcode, name, message)
			
		if (bconfig.id === undefined || bconfig.id === null || bconfig.id === '') {
			throw new KonyError(1102,'WidgetError','Widget cannot be created due to invalid input data.');
		}

		this.id = bconfig.id;
		this.focusskin = bconfig.focusSkin;	
        this.isvisible =  bconfig.isVisible===undefined ? true : (bconfig.isVisible && true);
		bconfig.i18n_text && (this.i18n_text = bconfig.i18n_text);
		
        this.containerweight = lconfig.containerWeight || 0;
		this.contentalignment = lconfig.contentAlignment;   //1-topleft, 2-topcenter, 3-topright, 4-middleleft, 5-center, 6-middleright, 7-bottomleft, 8-bottomcenter, 9-bottomright  
		this.widgetalignment = lconfig.widgetAlignment;
        this.marginInPixel = lconfig.marginInPixel;
        this.paddingInPixel = lconfig.paddingInPixel;
        this.blockeduiskin =  pspconfig.blockedUISkin; 

        this.enabled = false;
		this.canUpdateUI = true;

        this.onclick = bconfig.onClick;
		
		this.accessibilityconfig = bconfig.accessibilityConfig;
		
		defineGetter(this, "accessibilityConfig", function() {
			return this.accessibilityconfig;
		});	
		
		defineSetter(this, "accessibilityConfig", function(val) {
			this.accessibilityconfig = val;
			kony.model.updateView(this,  "accessibilityConfig" , val);
			
		});	
		
        var margin = (!lconfig.margin) ? [0,0,0,0] : lconfig.margin;
		defineGetter(this, "margin", function() {
			return margin;
		});
		defineSetter(this, "margin", function(val) {
			margin = val;
			$KU.isArray(val) && kony.model.updateView(this,  "margin" , val);
		});
        
        var padding = (!lconfig.padding)? [0,0,0,0] : lconfig.padding;
		defineGetter(this, "padding", function() {
			return padding;
		});
		defineSetter(this, "padding", function(val) {
			padding = val;
			$KU.isArray(val) && kony.model.updateView(this,  "padding" , val);
		});
        				
		var skin = bconfig.skin || "konycustomcss";	
		defineGetter(this, "skin", function() {
			return skin;
		});	
		defineSetter(this, "skin", function(val) {
			var oldvalue = skin;
			skin = val;
			kony.model.updateView(this,  "skin" , val, oldvalue);
		});		

		kony.ui.Widget.prototype.setGetterSetter.call(this);

	},
	
	ContainerWidget: function(bconfig, lconfig, pspconfig) {
		
		kony.ui.ContainerWidget.baseConstructor.call(this, bconfig, lconfig, pspconfig);

		this.orientation = bconfig.orientation || constants.BOX_LAYOUT_HORIZONTAL;
		this.percent = (lconfig.percent===undefined) ? true : lconfig.percent;
		if(this.percent === false) this.widgetdirection = lconfig.layoutAlignment;	  //1-LEFT,  2-MIDDLE, 3-RIGHT
		
		//Internal use
		this.ownchildrenref = [];
		this.children = [];	         
	},
	
	GroupWidget: function(bconfig, lconfig, pspconfig) {
		
		kony.ui.GroupWidget.baseConstructor.call(this, bconfig, lconfig, pspconfig);

		this.onselection = bconfig.onSelection;

		this.masterdata = bconfig.masterData;
		this.masterdatamap = bconfig.masterDataMap; 	
		this.selectedkeyvalue = null;
		this.selectedkey = bconfig.selectedKey || null;
		kony.ui.GroupWidget.prototype.setGetterSetter.call(this);
	} 	   
};

kony.inherits(kony.ui.GroupWidget,kony.ui.Widget);
kony.inherits(kony.ui.ContainerWidget,kony.ui.Widget);

//Widget API's
kony.ui.Widget.prototype.setVisibility = function(isvisible) {
	$KW.Widget.setvisibility (this, isvisible);
};

kony.ui.Widget.prototype.setFocus = function() {
	$KW.Widget.setfocus(this);
};

kony.ui.Widget.prototype.setEnabled = function(isenabled) {
	$KW.Widget.setenabled(this, isenabled);
};

kony.ui.Widget.prototype.setGestureRecognizer = function(gesturetype, setupparams, gesturehandler) {
	return ($KW.Widget.setgesturerecognizer(this, gesturetype, setupparams, gesturehandler));
};

kony.ui.Widget.prototype.removeGestureRecognizer = function(gesturetype) {
	$KW.Widget.removegesturerecognizer(this, gesturetype);
};

kony.ui.Widget.prototype.toString = function() {
	return JSON.stringify(this);
};

//Internal Functions
/*
kony.ui.Widget.prototype.canUpdateDOM = function() {

    var id = (this.wType == "Form" || this.wType == "Popup") ? this.id : this.pf;
    var topContainer = window[id];
    if(topContainer){
		var popup = (topContainer.wType == "Popup") && $KU.getElementById(id);
		var cForm = $KG["__currentForm"];
		if($KW[this.wType]["updateView"] && ((cForm && topContainer.wType == "Form" && cForm.id == topContainer.id) || 
						(cForm && topContainer.isheader && $KU.canUpdateDOM(cForm, topContainer)) || 
						(topContainer.wType == "Popup" && popup))){
						return true;
		}
	}
    return false;                       
};
*/

kony.ui.Widget.prototype.setGetterSetter = function() {

	defineGetter(this, "contentAlignment", function() {
		return this.contentalignment;
	});
	defineSetter(this, "contentAlignment", function(val) {
		var oldvalue = this.contentalignment;
		this.contentalignment = val;
		kony.model.updateView(this,  "contentalignment" , val, oldvalue);
	});

	defineGetter(this, "containerWeight", function() {
		return this.containerweight;
	});
	defineSetter(this, "containerWeight", function(val) {
		var oldvalue = this.containerweight;
		this.containerweight = val;
		kony.model.updateView(this,  "containerweight" , val, oldvalue);
	});

	defineGetter(this, "focusSkin", function() {
		return this.focusskin;
	});
	defineSetter(this, "focusSkin", function(val) {
		var oldvalue = this.focusskin;
		this.focusskin =  val;
		kony.model.updateView(this,  "focusskin" , val, oldvalue);
	});
        
        
	defineGetter(this, "isVisible", function() {
		return this.isvisible;
	});
	defineSetter(this, "isVisible", function(val) {
		this.isvisible = val;
		kony.model.updateView(this,  "isvisible" , val);
	});

	defineGetter(this, "blockedUISkin", function() {
		return this.blockeduiskin;
	});	
	defineSetter(this, "blockedUISkin", function(val) {
		this.blockeduiskin =  val;
	});

	defineGetter(this, "onClick", function() {	
			return this.onclick;
		
	});

	defineSetter(this, "onClick", function(val) {
		this.onclick = val;
	});	

};

//ContainerWidget Methods
kony.ui.ContainerWidget.prototype.add = function(widgetarray) {	
	containerWidgetExtendAdd.call(this, widgetarray);
};
	
kony.ui.ContainerWidget.prototype.addAt = function(widgetref, index) {
	containerWidgetExtendAddAt.call(this, widgetref, index);
};
	
kony.ui.ContainerWidget.prototype.remove = function(widgetref) {
	containerWidgetExtendRemove.call(this, widgetref);
};

kony.ui.ContainerWidget.prototype.removeAt = function(index) {
	return containerWidgetExtendRemoveAt.call(this, index);
};

kony.ui.ContainerWidget.prototype.widgets = function() {
	return this.ownchildrenref;
};
	
//Internal Methods
kony.ui.ContainerWidget.prototype.setparent = function(widgetarray) {
	containerWidgetExtendSetParent.call(this, widgetarray);
};

kony.ui.ContainerWidget.prototype.createhierarchy = function (widgetarray) {
	containerWidgetExtendCreateHierarchy.call(this, widgetarray);
};

kony.ui.ContainerWidget.prototype.removeReferences = function(widgetref) {
	containerWidgetExtendRemoveReferences.call(this, widgetref);
};


kony.ui.GroupWidget.prototype.setGetterSetter = function() {


	defineGetter(this, "onSelection", function() {
		return this.onselection;
	});
	defineSetter(this, "onSelection", function(val) {
		this.onselection = val;
	});

	defineGetter(this, "masterData", function() {
		return this.masterdata;
	});
	defineSetter(this, "masterData", function(val) {
		this.masterdata = val;
		$KW[this.wType]["updateView"](this,  "masterdata" , val);
	});
	
	defineGetter(this, "masterDataMap", function() {
		return this.masterdatamap;
	});
	defineSetter(this, "masterDataMap", function(val) {
		this.masterdatamap = val;
		$KW[this.wType]["updateView"](this,  "masterdatamap" , val);
	});

	defineGetter(this, "selectedKey", function() {
		return this.selectedkey;
	});
	defineSetter(this, "selectedKey", function(val) {
		this.selectedkey = val;
		$KW[this.wType]["updateView"](this,  "selectedkey" , val);
	});

	//Not a writable property
	defineGetter(this, "selectedKeyValue", function() {
		return this.selectedkeyvalue;
	});
	defineSetter(this, "selectedKeyValue", function() { });

}

_konyConstNS = IndexJL ? konyLua : kony.ui;
