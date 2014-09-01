$KW.Form = {

	initialize: function(){
		kony.events.addEvent("onorientationchange", "Form", this.orientationHandler);
    },
	
    initializeView: function(formId, isForm) {
		
        //Adjusting width/height of the below widgets once the dom is rendered.
        var widgetsSupported = [$KW.Calendar, $KW.HStrip, $KW.Segment, $KW.ScrollBox, $KW.TabPane, $KW.Line, $KW.Switch, $KW.TextField, $KW.DataGrid, $KW.Media, $KW.MenuContainer, $KW.ComboBox, $KW.Slider, $KW.Map];
        for (var i = 0; i < widgetsSupported.length; i++) {
            if (widgetsSupported[i]) {
                widgetsSupported[i].initializeView && widgetsSupported[i].initializeView(formId);
            }
        }
		if(isForm){
            $KW.Form.resizeForm(formId);
        }
			
	 },
	
    updateView : function(formModel, propertyName, propertyValue, oldPropertyValue)
    {
        switch (propertyName) {
            case "title":
                document.title = propertyValue || $KG.apptitle || $KG.appid;
                formModel.i18n_title = "";
                break;
			  
			case "padding":
				var element = document.getElementById(formModel.id);
				if(!$KG.needScroller)
					element && (element.style[propertyName] = $KU.joinArray(propertyValue, "% ") + "%");
				break;
        }
    },

    orientationHandler: function(formId, orientation) {
		var formModel = $KG.allforms[formId];
		if (formModel) {
			var formref = $KU.returnEventReference(formModel.onorientationchange);
			formref && formref.call(formModel,formModel, orientation);
		}
    },

    generateAppmenu: function(formModel)
    {
		var more_container = document.getElementById('appmenumore_container');
		if(more_container)
			more_container.parentNode.removeChild(more_container);
         if($KG.__appmenu && formModel.needappmenu)
            return $KW["Appmenu"] && $KW["Appmenu"].render($KG.__appmenu);
        else
            return "";
    },

	initializeTouchWidgets: function(formId, isForm){
        $KW.Scroller.initializeScrollBoxes(formId); //Initializes form scroller and scroll box widgets.
        $KW.Scroller.initializePageViews(formId); //Initializes pageviews
		this.initializeView(formId, isForm); 
    },

    destroyTouchWidgets: function(formId, isNonForm){
	
        if(!isNonForm)
			$KW.Scroller.destroyFormScroller(formId);
		$KW.Scroller.destroyScrollBoxes(formId);
        $KW.Scroller.destroyImageStripStripViews(formId);
        $KW.Scroller.destroyPageViews(formId);
    },
	
	formRendered: function(formId){	
		kony.events.browserback.updateURLWithLocation(formId);
		$KW.Form.enlistSystemTimerActions();
        if($KU.isWindowsPhone && $KU.isIE9)
			window.scrollTo(0, 0);
		else if($KG.relativeScroll)
            window.scrollTo(0, 1);
	},

    resizeForm: function(formId, orientation)
    {
        var formModel = $KG.allforms[formId];
		//setting bodys min-height to viewport height during native scroll. Setting 10px more for windows7.5 for its not giving correct viewport height.
		if($KG["nativeScroll"] || $KG["relativeScroll"])
		{
			var viewPortHeight = ($KU.isWindowsPhone && $KU.getPlatform().version == "7.5") ? ($KW.Utils.getViewPortHeight()+10) : $KW.Utils.getViewPortHeight();
			document.body.style.minHeight = viewPortHeight+"px";
		}

		if(kony.appinit.isTablet && kony.appinit.isAndroid && (kony.constants.APPLICATION_MODE_HYBRID || kony.constants.APPLICATION_MODE_WRAPPER)){
			document.body.style.minHeight = (screen.height / window.devicePixelRatio - window.screenTop) + 'px';
		}
		
		if($KG.relativeScroll || $KG["nativeScroll"]){  
			var windowHeight = window.innerHeight || document.body.clientHeight;
			var formNode = document.getElementById(formId);
			var totalHeight, formHeight;
			
			var totalHeight = __MainContainer.clientHeight;
			var formHeight = formNode.clientHeight;
			
			// Persist height
			if(!orientation)
			{
				totalHeight = __MainContainer.__clientHeight = __MainContainer.clientHeight;
				formHeight = formNode.__clientHeight = formNode.clientHeight;
			}
			else
			{
				totalHeight = __MainContainer.__clientHeight;
				formHeight = formNode.__clientHeight;
			}
			
			// Adjust height
			if(totalHeight < windowHeight)
			{
				var bias = windowHeight - totalHeight;
				formHeight = formHeight + bias;
				formNode.style.minHeight = formHeight + "px";

				if($KU.isWindowsPhone && $KU.isIE9)
					setTimeout(function(){window.scrollTo(0, 0)}, 10);
				else
					setTimeout(function(){window.scrollTo(0, 1)}, 10);
			}
		}	
    },

	
	enlistSystemTimerActions: function() {    
	    //Hash change event on window    
	    if ($KU.hashChange) {
	        kony.events.addEventListener(window, 'hashchange', kony.events.browserback.handleBrowserBackEvent);
	    }
	    else {
	        var browserBackAction = new kony.system.timers.TimerAction(kony.events.browserback.handleBrowserBackEvent, 300);
	        kony.system.timers.registerTimerAction(browserBackAction);
	    }
	},

	delistSystemTimerActions: function(){
    	kony.system.timers.clearTimerAction();
	},
    
	
	
    addChild : function(formModel, wArray, bVisibility )
	{
        if(($KG["__currentForm"] && formModel.id == $KG["__currentForm"].id) || formModel.wType == 'Popup'){

			var formNode = $KU.getElementById(formModel.id);
			
			
            if(!formNode) 
				return;
            var htmlString = "";
			var screenlLevelWidgetModel = $KU.getScreenLevelWidgetModel(formModel);
            for(var i=0; i < wArray.length; i++){
				if(screenlLevelWidgetModel)
				{
					htmlString = $KW.Form.generateWidget(formModel, screenlLevelWidgetModel);					
					break;
				}
				if(formModel[wArray[i].id]) htmlString += $KW.Form.generateWidget(formModel, formModel[wArray[i].id]);
            }         
			
			// Add to DOM
			var wrapper = document.createElement("div");
            wrapper.innerHTML = htmlString;
			if(screenlLevelWidgetModel)
			{
				formNode.innerHTML = htmlString;
			}
			else
			{
				if(bVisibility)
				{
					formNode.innerHTML = htmlString;
				}
				else
				{
					while(wrapper.children.length > 0){
						formNode.appendChild(wrapper.children[0]);
					}
				}
			}
			$KW.Utils.initializeNewWidgets(wArray);
        }    
    },

    addChildAt : function(formModel, widget, index)
	{
        if(($KG["__currentForm"] && formModel.id == $KG["__currentForm"].id) || formModel.wType == 'Popup')
        {
   			var formNode = $KU.getElementById(formModel.id);
			

            if(!formNode) 
				return;
			var screenlLevelWidgetModel = $KU.getScreenLevelWidgetModel(formModel);
			var screenlLevelWidgetNode = $KU.getNodeByModel(screenlLevelWidgetModel);
			if(screenlLevelWidgetNode)
				return;
            var htmlString = $KW.Form.generateWidget(formModel, formModel[widget.id]);

			// Add to DOM
			var outerDiv = document.createElement("div");
            outerDiv.innerHTML = htmlString;
			
			if(screenlLevelWidgetModel)
			{
				formNode.innerHTML = htmlString;
				$KW.Scroller.destroyFormScroller(formNode.id);
				$KW.Utils.initializeNewWidgets([widget]);
				return;
			}
			
			if((kony.appinit.isIE || ($KU.isWindowsPhone && $KU.isIE9)) && !formNode.children[index]){
				formNode.appendChild(outerDiv.childNodes[0]);
				return;
			}
			
            formNode.insertBefore(outerDiv.childNodes[0], formNode.children[index]);
			$KW.Utils.initializeNewWidgets([widget]);
        }
    },

    DOMremove : function(formModel,widgetref){
        if($KG["__currentForm"] && (formModel.id == $KG["__currentForm"].id || formModel.wType == 'Popup') && widgetref)
        {
            var node = document.getElementById(formModel.id + "_" + widgetref.id);
            if(node) {
                node = $KU.returnParentChildBloatAdjustedNode(formModel, widgetref, node);
                node.parentNode.removeChild(node);
            }
        }
    },
    
    DOMremoveAt : function(formModel,index){
        $KW.Form.DOMremove(formModel,formModel.ownchildrenref[index]);
    },

	//Form Methods
    add: function() {
        
        var formmodel = arguments[0];
        if("add" in formmodel) {           
            var widarray = [].slice.call(arguments,1);
            formmodel.add(widarray)
        } 
    },

    addAt: function(formModel, widgetref, index) {
        if(widgetref == null) return;
        formModel.addAt && formModel.addAt(widgetref, index);
    },

    remove: function(formModel, widgetref) {
        formModel.remove && formModel.remove(widgetref);
    },

    removeAt: function(formModel, index){
         if(formModel.removeAt)
            return  formModel.removeAt(index);
    },

    widgets: function(formModel) {
         return formModel.widgets && formModel.widgets();
    },

    scrollToBeginning : function(formModel){       
		var scrollerInstance = $KG[$KG["__currentForm"].id + '_scroller'];
		var top = ($KU.isWindowsPhone && $KU.isIE9) ? 0: 1;
		scrollerInstance ? scrollerInstance.scrollTo(0, scrollerInstance.minScrollY, 500) : $KW.Utils.scrollToElement(null, 500, null, top);
    },
    
    scrollToEnd : function(formModel){ 
        var scrollerInstance = $KG[$KG["__currentForm"].id + '_scroller'];
		scrollerInstance ? scrollerInstance.scrollTo(0, scrollerInstance.maxScrollY, 500) :$KW.Utils.scrollToElement(null, 500, null, document.body.scrollHeight - (!($KU.isWindowsPhone && $KU.isIE9) ? (window.innerHeight || document.body.clientHeight) : 0));
    },
    
    scrollToWidget: function(formref, widgetref){
       $KW.Widget.setfocus(widgetref);
    },

    destroy : function(formID) {
        if(formID && "destroy" in formID) formID.destroy();
    },

    getCurrentForm: function(){
        return $KG["__currentForm"];
    },

    getPreviousForm: function(){
        return $KG["__previousForm"];
    },
	
    //Native Mapping Function
    handleshow : function(formModel) {
        if("show" in formModel) 
            formModel.show();
    }, 
	
	//
	generateWidget: function(formModel, childModel)
	{
		var context = new $KW.WidgetGenerationContext(formModel.id);
		var childType = childModel.wType;
		var htmlString = "";
		
		//Line widget is rendered directly on to a form without any extra table structure if it is a top level element 
		if (childType == "Line" || childType == "HBox" || childType == "ScrollBox" || childType == "TabPane") 
		{
			context.setTopLevelBox(true);
			htmlString += $KW[childType] && $KW[childType].render(childModel, context);
		}
		else 
		{
			htmlString += "<div class = 'ktable kwt100' style='table-layout:fixed;'>";
			htmlString += "<div class = 'krow kwt100' >";
			// ??
			if(childType == "Image")
				childModel.containerweight = 100;
			var layoutDirection = $KW.skins.getWidgetAlignmentSkin(childModel);
			htmlString += "<div class = 'kcell kwt100 " + layoutDirection + "' " + (formModel.wType == "Popup" ? style="'" + $KW.skins.getChildMarginAsPaddingSkin(childModel) + "'" : "") + ">";
			htmlString += $KW[childType] && $KW[childType].render(childModel, context);
			htmlString += "</div></div></div>";
		}
		return htmlString;
	},
/*************************************-----SPA-----***************************************************************/
    render: function(formModel)
    {
        var htmlString = "";
        var formId = formModel.id.trim();
        this.createFormSkeleton(formModel);
		var isForm = formModel.wType == "Form" ? true: false;
		
        var header_wrapper, form_wrapper, footer_wrapper, appmenu_wrapper;
        
        if($KG.transitAll)
        {
            header_wrapper = $KU.getElementById(formId + "_header");
            footer_wrapper = $KU.getElementById(formId + "_footer");
        }
        else
        {
            header_wrapper = $KU.getElementById("header_container");
            footer_wrapper = $KU.getElementById("footer_container");
        }

        form_wrapper = $KU.getElementById(formId);
        isForm && (appmenu_wrapper = $KU.getElementById("appmenu_container"));

        //Header
        var headerStr = this.generateHeader(formModel, "header");
        //header_wrapper.innerHTML = headerStr; // Moving it to below. TODO: Need to investigate the actual root cause for the support ticket #3242.    

        //removing previous form A11y hint property.
        if($KG["__previousForm"]) {
            var prevformhintid = $KG["__previousForm"].id+"_hint";           
             var hintwraper = document.getElementById(prevformhintid);
            if(hintwraper) {
                document.body.removeChild(hintwraper);
            }
        }   
        // Form
        var formStr = this.generateForm(formModel);
        form_wrapper.innerHTML = formStr;
        // Footer
        var footerStr = this.generateHeader(formModel, "footer");
        footer_wrapper.innerHTML = footerStr;
        // Appmenu
		if(isForm)
		{
			var appmenuStr = this.generateAppmenu(formModel);
			appmenu_wrapper.innerHTML = appmenuStr;
			var appmenuNode = $KU.getElementById("konyappmenudiv");
			if(appmenuNode && !$KG["relativeScroll"] && $KU.isIOS7)
				appmenuNode.style.position = "fixed";
		}
        if($KW.Map && $KW.Map.isMainContaineraVailable == false)
			$KW.Map.loadMapScripts();
	

        header_wrapper.innerHTML = headerStr;  
        // Initialize touch widgets in header n footer
        (headerStr && formModel.header && !$KG.transitAll) && this.initializeTouchWidgets(formModel.header);
        (footerStr && formModel.footer && !$KG.transitAll) && this.initializeTouchWidgets(formModel.footer);
        
		if(isForm)		
		{
			// title
			document.title = ($KI.i18n && $KI.i18n.getI18nTitle(formModel)) || $KG.apptitle || $KG.appid;
			
			if(!$KG.needScroller && !$KU.isBlackBerryNTH)
			{
				document.body.className = formModel.skin || "";
			}
		
			if(($KU.isWindowsPhone || $KU.isWindowsTablet) && !$KU.nativeScroll)
				document.documentElement.style.msTouchAction = "none";
			else
				document.documentElement.style.msTouchAction = "auto";
		}

    },
    
    createFormSkeleton: function(formModel)
    {
        // TODO: Currently transitions are not supported in native mode
        
        var htmlString = "";
		var style = "";
        var formId = formModel.id;
        var mainContainer = document.getElementById("__MainContainer");
		var isForm;
		var isForm = formModel.wType == "Form" ? true: false;		
		var className;
		if($KU.isBlackBerryNTH)
			className = formModel.skin || "";
		else
			className = "absoluteContainer";
		className += " hidden " + (!isForm ? "popupcontainer popupmain" : "");

		
		if(!isForm)
		{
			// center header / footer / popup
			var height = parseInt(formModel.containerheight, 10);
			var width = $KW.skins.getMarPadAdjustedContainerWeightSkin(formModel).substr(3);
			//style = "z-index:8;";
			if(width != 100)
			{
				var marginLeft = (window.innerWidth || document.body.clientWidth) * width / (2 * 100);
				style += "left:50%;margin-left:-" + marginLeft + "px;width:" + width + "% !important;";
			}	
			if(height != 100)
			{
				var marginTop = (window.innerHeight || document.body.clientHeight) * height / (2 * 100);
				style += "top:50%;margin-top:-" + marginTop + "px;height:" + height + "% !important";
			}
		}
	
        // formContainer
        if ($KG.transitAll) 
        {
			htmlString += "<div id='" + formModel.id + "_container' class='" + className + "'" + (!isForm && !formModel.ismodal ? "style='" + style + "'" : "") + ">";
		
			if(!isForm)
			{			
				var opacity = 1 - (formModel.transparencybehindthepopup/100);
				var bgcolor = (formModel.ismodal == true && formModel.popupbgcolor) ? "background-color:"+ formModel.popupbgcolor : "";
				htmlString += "<div id='__popuplayer' style='" /*+ style */ + "opacity:" +  opacity + ";" + bgcolor + "'" + (formModel.ismodal == false && !(formModel.ptran || formModel.ptranOut) && formModel.context ? "" : " class='absoluteContainer popuplayer'") +  "></div>"
				
				if(!formModel.ismodal)
					style = "z-index:8";
					
				htmlString += "<div id='" + formModel.id + "_group' class='absoluteContainer' style='" + style + "'></div>";
			}
			
			htmlString += "</div>";
			
            var div = document.createElement('div');
            div.innerHTML = htmlString;
            mainContainer.appendChild(div.childNodes[0]);
        }
        
        // Required to be created before all to get scroller n scrollee
        if(!formModel.dockableheader && !$KG.relativeScroll)
            this.generateScroller(formModel);

        //this.generateFormWrapper(formModel);

        this.generateHeaderWrapper(formModel, "header");
        if(formModel.dockableheader == true && !$KG.relativeScroll)
-            this.generateScroller(formModel);
        this.generateFormWrapper(formModel);
        this.generateHeaderWrapper(formModel, "footer");
        isForm && this.generateAppmenuWrapper(formModel);
    },
    
    generateHeaderWrapper: function(formModel, type)
    {
        var isForm = formModel.wType == "Form" ? true: false;
		
		 if($KG.relativeScroll || $KG.useMixedScroll)
        {
            var container = $KU.getElementById(type + "_container");
            if(container)
            {
                if(!$KG.useMixedScroll)
                    return;
                // Delete existing rel header n footer in case of mixedScroll. TODO: can be optimized
                else
                    container.parentNode.removeChild(container);
            }
        }
        
        // TODO: Reuse header n footer if already present and in the same docked mode
        var formId = formModel.id;
        var dockable = true;
        if((type == "header" && !formModel.dockableheader) || (type == "footer" && !formModel.dockablefooter))
            dockable = false;
    
        var className = type + "_scroller";
        if($KG.stickyScroll || $KG.relativeScroll || !dockable || $KG["nativeScroll"])
            className += " relativePos";    
        else
            className += " absolutePos";

        var div = document.createElement('div');
        div.setAttribute('id', $KG.transitAll ? formId + "_" + type : type + "_container");
		// ??
		div.setAttribute("kformname", formId);
		div.className = className;

        var formContainer;
           
        if(!isForm)
			formContainer = document.getElementById(formId + "_group");
		else if(dockable)
            formContainer = document.getElementById($KG.transitAll ? formId + "_container" : "__MainContainer");
        else
            formContainer = document.getElementById(formId + "_scrollee");
        
        if($KG.relativeScroll)
            formContainer = document.getElementById("__MainContainer");
        
        formContainer.appendChild(div);
    },
    
    generateScroller: function(formModel)
    {
        var htmlString = style = "";
        var formId = formModel.id;
        var skin = formModel.skin || "";
        var isForm = formModel.wType == "Form" ? true: false;

        if(!$KG.transitAll)
            skin = ($KG.needScroller) ? (skin + " hidden") : "";
        else
            htmlString += "<div  id='" + formId + "_wrapper'>";

        // TODO: HACK for contnet not vsiisble on droid mixed mode
        if($KU.isAndroid && ($KG["appmode"] == constants.APPLICATION_MODE_HYBRID || $KG["appmode"] == constants.APPLICATION_MODE_WRAPPER))
        {
            style = "style='overflow:visible;'";
        }
        
        if($KG.needScroller)
        {
            htmlString += "<div  id='" + formId + "_scroller' class='form_scroller " + skin + "' kwidgettype='KFormScroller' name='touchcontainer_KScroller' widgetType='form' swipeDirection ='vertical'" + style + (!isForm ? " kformname='" + formId +  "'" : "") + ">" + 
                            "<div id='" + formId + "_scrollee' class='form_scrollee' kwidgettype='KTouchscrollee'>" +
                            "</div>" +
                        "</div>";
        }
        
        if ($KG.transitAll)
            htmlString += "</div>";
        
        var div = document.createElement('div');
        div.innerHTML = htmlString;
        
        var formContainer;
        if(!$KG.transitAll)
        if($KG.needScroller)
            formContainer = document.getElementById(formId + "_scrollee");
        
        if(!isForm)
			formContainer = document.getElementById(formId + "_group");
		else
			formContainer = document.getElementById($KG.transitAll ? formId + "_container" : "__MainContainer");

        formContainer.appendChild(div.childNodes[0]);
    },
    
    generateFormWrapper: function(formModel)
    {
        var htmlString = "";
        var formId = formModel.id;
		var isForm = formModel.wType == "Form" ? true: false;
        
        // Set position: absolute to enable transitions
        var style = "style='border:none;"+ $KW.skins.getPaddingSkin(formModel)+";'";
        var layoutClass = "";
        if(!$KG.needScroller)
            layoutClass = "absolutePos";
        if($KG.nativeScroll || $KG.relativeScroll)
            layoutClass = "form_nativeScroller";

        var fClass = "class='" + "kwt100 " + layoutClass + "'";
        
		if(isForm)
			htmlString += "<form id='" + formId + "' action='javascript:;' " + fClass + " " + style + "></form>";
		else
		{
			htmlString += "<form id='" + formId + "' action='javascript:;'" + " class='kwt100' style='z-index:9;" + $KW.skins.getPaddingSkin(formModel) + ((!formModel.context || !formModel.context.dockable) ? "xmax-height:80%;xoverflow:auto;xposition: absolute;" : "overflow-x:hidden;overflow-y:auto;xposition:relative;") + "" + (!formModel.skin ? "background-color:white" : "") + "'>";
        }
		
        var div = document.createElement('div');
        div.innerHTML = htmlString;
        
        if($KG.needScroller)
            formContainer = document.getElementById(formId + "_scrollee");
        else
            formContainer = document.getElementById($KG.transitAll ? formId + "_wrapper" : "__MainContainer");
        
        // If there's an existing form, add beneath it
        var form = document.getElementsByTagName("form");
         if($KG.relativeScroll && form[0])
        {
            formContainer = form[0];
            formContainer.insertAdjacentElement("afterEnd", div.childNodes[0]);
        }
        else
            formContainer.appendChild(div.childNodes[0]);
    },
    
    generateAppmenuWrapper: function(formModel)
    {
        // Delete existing appmenu_container. TODO: Can be optimized by not removing in case of custom n native scroll
        var appmenu_container = document.getElementById("appmenu_container");
        if(appmenu_container)
            appmenu_container.parentNode.removeChild(appmenu_container);
        var more_container = document.getElementById('appmenumore_container');
		if(more_container)
			more_container.parentNode.removeChild(more_container);
			
        var div = document.createElement("div");
        div.id = "appmenu_container";
        var parentContainer;
        if(!formModel.dockableappmenu && !$KG.relativeScroll)
            parentContainer = document.getElementById(formModel.id + "_scrollee")
        else
            parentContainer = document.getElementById("__MainContainer");
        parentContainer.appendChild(div);
    },
	
	generateForm: function(formModel)
	{
		var htmlString = "";		

        // Iterate through each child widget
        if(formModel.children) 
		{
			var screenlLevelWidgetModel = $KU.getScreenLevelWidgetModel(formModel);
           for(var i=0; i<formModel.children.length; i++) {
				//Show first SLW if SLW is present in the form model.
				if(screenlLevelWidgetModel)
				{
					htmlString = $KW.Form.generateWidget(formModel, screenlLevelWidgetModel);					
					break;
				}
				if(formModel[formModel.children[i]]) htmlString += $KW.Form.generateWidget(formModel, formModel[formModel.children[i]]);
			}
        }
		return htmlString;	 
	},
	
	generateHeader: function(formModel, type){		
		
		var htmlString = "";
        var headerID = formModel[type];
        
        if(headerID)
            return this.generateTemplate(headerID, type);
        else
            return "";
	},

	// Get the context when rendering datagrid template
    generateTemplate: function(headerID, type, context)
    {
        var headerModel = kony.model.getWidgetModel(headerID) || headerID;
		var htmlString = "",context = context || new $KW.WidgetGenerationContext(headerModel.id),childModel;
		if(headerModel.children){
			if (context && context.template_generator && typeof context.template_generator == "object") {
				return $KW[context.template_generator.wType].render(headerModel,context);
			}
			//htmlString = "<div " + $KW.Utils.getBaseHtml(headerModel, context , type) + ">";
			for (var i = IndexJL; i < headerModel.children.length; i++) 
			{
				childModel = headerModel[headerModel.children[i]];
				context.setTopLevelBox(true);
				htmlString += $KW[childModel.wType].render(childModel, context);
			}
			//htmlString += "</div>" 
		}
        return htmlString;
    },  
	
	checkBackwardCompatibility: function(formModel)
	{
		var isForm = formModel.wType;
		
		// Backward compatibility
		if((formModel.dockableheader == undefined && formModel.header) || $KG.nativeScroll)
			formModel.dockableheader = true;
		if((formModel.dockablefooter == undefined && formModel.footer) || $KG.nativeScroll)
			formModel.dockablefooter = true;
		if(isForm && ((formModel.dockableappmenu == undefined && formModel.needappmenu) || $KG.nativeScroll))
			formModel.dockableappmenu = true;
		if(($KG.useMixedScroll && formModel.renderinnative == undefined) || $KG.nativeScroll)
			formModel.renderinnative = true;
	},
	
	
	show: function(formModel)
	{
		if($KG["localization"] && !$KG["i18nInitialized"])
			$KI.i18n.setdefaultlocale($KG["defaultlocale"], null, null, $KW.Form.extendShow(formModel));
		else	
			$KW.Form.extendShow(formModel)();
	},
	
	extendShow: function(formModel)
    {		
		return function(){
		
			//Invoke the native show form function to enter
			//into native mode in case form type is kony rich client.
			//form.id is a string as expected by native platform

			function checkformmode(form) {         			  
			  //APPMODE: 1 - native (only SPA mode) 2 - hybrid  3 - wrapper
			  if ($KG["appmode"] == constants.APPLICATION_MODE_HYBRID) {
					//FORMTYPE "1" - SPA , "2" - TC,  NULL - RC
				  if (internal &&  (form.type == constants.FORM_TYPE_NATIVE)) {
					kony.print("checkformmode: nativeformid : " + form.id);			  
					internal.shownativeform(form.id);
					return false;
				  }
				  else {
						if( internal &&  (form.type == constants.FORM_TYPE_DYNAMIC)) {
							kony.print("checkformmode: dynamicformid : " + form.id);	
							internal.showdynamicform(form.id)
							return false;
							
						} else if (form.type == constants.FORM_TYPE_STATIC) {										  
                            kony.print("------shell status: " + internal.isshellinbackground());	

							if(internal && internal.isshellinbackground && internal.isshellinbackground()) {
								kony.print("checkformmode: shellinbackground for form : " + form.id);	
								form.callspaform=true; 
                                //To prevent invoking showspaform in case of backkey event flow in Android
								if(form.isfromBrowserBack) {
                                	form.callspaform=false;
                                }                                                               
 							}
							kony.print("checkformmode: shellinforeground for form : " + form.id);
							return true;
						}
						kony.print("checkformmode: Invalid Form Type");
						return false;
				  }
			  }
			  else
				  return true;           
			};   
			
			if(checkformmode(formModel)) 
            {
                // Backward compatibility
				$KW.Form.checkBackwardCompatibility(formModel);
				
				$KU.createa11yDynamicElement();
				
				//Check for idletimeout cb expiry. If expired invoked the callback & return
				if(formModel.enabledforidletimeout && $KG["__idletimeout"] && $KG["__idletimeout"].expired && $KG["__idletimeout"].enabled) {
					$KG["__idletimeout"].cb && $KG["__idletimeout"].cb(formModel);
		            $KG["__idletimeout"].cb= null;
					$KG["__idletimeout"].expired = false;
                    $KG["__idletimeout"].enabled = false;
					return;
				}
				
				// Dismiss popup, loadingscreen and calendar, if any
				 if($KG["__currentForm"])
				 {
					$KW.Popup && $KW.Popup.dismiss(null,true);
					// shall not be dimissed automatically
					//$KI.window.dismissLoadingScreen();
					$KW.unLoadWidget();
					var calObj = $KW.Calendar && $KW.Calendar.Popupview.calObj;
					if(calObj){ 
						calObj.closeCalendar(null, true);
					}
				}
				
				if($KG["localization"]&& !formModel.initialized)
				{
					/*
					var formInitHandler = $KU.returnEventReference(formModel.init);
					if(formInitHandler) {
						formInitHandler.call(formModel, formModel);
					} else {
						var transactionaldataload = $KU.returnEventReference(formModel.transactionaldataload);
						var masterdataload = $KU.returnEventReference(formModel.masterdataload);
						formModel.transactionaldataload && transactionaldataload.call(formModel,formModel);	
						formModel.masterdataload && masterdataload.call(formModel,formModel);              	
					}
					*/
					//$KI.i18n && $KI.i18n.saveFormModel(formModel);
				}
				
				var curForm = $KG["__currentForm"];
				if (curForm && curForm.onhide && curForm.id != formModel.id) 
				{
					var curref = $KU.returnEventReference(curForm.onhide);
					curref && curref.call(formModel,formModel);
				}
				
				if (formModel.preshow) {
					var preref = $KU.returnEventReference(formModel.preshow);
					preref && preref.call(formModel,formModel);
				}
				
				if ($KG["__currentForm"]) 
					$KG["__previousForm"]= $KG["__currentForm"];
				
				var rendered = false;
				$KG["__currentForm"]= formModel;
				
				var prevForm = $KG["__previousForm"];
				if (prevForm && prevForm.id == formModel.id) {
					rendered = true;	
				}
				
				//If form.show is called on the same form, just execute only pre show and post events.			
				if (!rendered) 
				{ 
					if($KG["localization"])
					{
						$KI.i18n.translateFormModel(formModel);
						var header = formModel.header;
						if(header)
							$KI.i18n.translateFormModel(window[header]);
						var footer = formModel.footer;
						if(footer)
							$KI.i18n.translateFormModel(window[footer]);
					}

                    // Destroy previous form scrollers
					if(prevForm) 
					{
                        if(prevForm.retainscrollposition) 
						{
                            var prevFormScroller = $KG[prevForm.id + "_scroller"];
                            // Remember coods
							if(prevFormScroller)
                                prevForm.__y = prevFormScroller.y;
							else
							    prevForm.__y = document.body.scrollTop || document.documentElement.scrollTop;
                        }
                        $KW.Form.destroyTouchWidgets($KG["transitAll"] ? (prevForm.id + "_container") : ($KG.needScroller ? prevForm.id + "_scroller" : prevForm.id));
                    }
					// END of old
                    
                    // TODO:
                    // Override needScroller in case of mixedscroll mode
                    if($KG.useMixedScroll)
                    {
                        if(formModel.renderinnative && ((!formModel.dockableheader && !formModel.dockablefooter && !(formModel.needappmenu && formModel.dockableappmenu)) || (!formModel.header && !formModel.footer && !($KG.__appmenu && formModel.needappmenu))))
                        {
                            $KG.needScroller = false;
                            $KG.relativeScroll = true;
                            //$KG.disableTransition = false;
                            $KG.transitAll = false;
                            //formModel.__scroller = false;
                        }
                        else
                        {
                            $KG.needScroller = true;
                            $KG.relativeScroll = false;
                            $KG.transitAll = true;
                            //formModel.__scroller = true;
                        }
                    }
                        
                    // new form
                    var formId = $KG.transitAll ? (formModel.id + "_container") : ($KG.needScroller ? formModel.id + "_scroller" : formModel.id);
                    
                    $KW.Form.render(formModel);	
					$KW.Form.formRendered(formModel.id);
					
					// Initialize current form scrollers
					$KW.Scroller.initializeFormScroller(formId);
					
                    $KW.Utils.initializeGestures(formModel);
					$KW.Utils.initializeTemplateGestures();
					$KW.Form.applyTransition($KG["__previousForm"], formModel);
					
                    
                    if (!kony.system.activity.hasActivity()) {
                        $KW.Utils.removeBlockUISkin();
                        $KW.unLoadWidget();
                    }               
                    if (kony.constants.APPSTATE == 0) {
						kony.constants.APPSTATE = 1;
                        // !! Registering events alone doesn''t help?
						kony.events.registerDocumentEvents();
					}
				}
				else
				{
                    var formId = $KG.transitAll ? (formModel.id + "_container") : ($KG.needScroller ? formModel.id + "_scroller" : formModel.id);
                    // To reset forms scroll to top
                    $KW.Scroller.destroyFormScroller(formId);
                    $KW.Scroller.initializeFormScroller(formId);
      
                    if($KU.isWindowsPhone && $KU.isIE9)
						window.scrollTo(0, 0);
					else if($KG.relativeScroll)
						window.scrollTo(0, 1);
					
					if (formModel.postshow) {
						var postref = $KU.returnEventReference(formModel.postshow);
						postref && postref.call(formModel,formModel);
					}
				}
				
				$KW.Form.accessibilityTitleCall(formModel);

                //Registering PickerView Events
                var pvs = document.querySelectorAll('[kwidgettype="PickerView"]');
                for(var pi=0; pi<pvs.length; pi++) {
                    var pickerModel = $KU.getModelByNode(pvs[pi]);
                    var picker = pickerModel[pvs[pi].id];
                    if(picker && picker.registerEvents) {
                        picker.picker = document.getElementById(pvs[pi].id);
                        picker.picker && picker.registerEvents(picker);
                        if(pickerModel.selectedkeys) {
                            picker.setSelectedKeys(pickerModel.selectedkeys);
                            pickerModel.selectedkeyvalues = picker.getSelectedKeyValues();

                        }
                    }
                }

				$KW.TPW.renderWidget(formModel.id);
				
				/*
				if (formModel.postshow) {
					var postref = $KU.returnEventReference(formModel.postshow);
					postref && postref.call(formModel,formModel);
				}
				*/
                
				if(formModel.callspaform) {
                    kony.print("@@@@ invoking internal.showspaform : " + formModel.id);
                	internal.showspaform(formModel.id);
               		formModel.isfromBrowserBack=false;
					formModel.callspaform = false;
                }    

				formModel.initialized = true;
			}	
		}
    },
	
	accessibilityTitleCall : function(formModel, isPopup)
	{
		var accessObj  = formModel.accessibilityConfig;
		var title = accessObj ? accessObj.a11yLabel : "";
		title && $KU.changea11yDynamicElement(title);
	},
	
	applyTransition: function(previousForm, currentForm)
	{
		var src, dest;
		/*
		var curScroller = currentForm.__scroller || $KG.needScroller;
		var preScroller = previousForm && (previousForm.__scroller || $KG.needScroller);
		*/
		
        var curScroller = $KG.needScroller;
        var preScroller = $KG.needScroller && previousForm;

        if($KG.useMixedScroll)
        {
            previousForm && (src = $KU.getElementById(previousForm.id + "_container") || $KU.getElementById(previousForm.id));
            dest = $KU.getElementById(currentForm.id + "_container") || $KU.getElementById(currentForm.id);
            curScroller = currentForm.__scroller;
            preScroller = previousForm && previousForm.__scroller;
        }
        else
        {			
    		if(!$KG["transitAll"])
    		{
    			src = previousForm && $KU.getElementById(previousForm.id);
    			dest = $KU.getElementById(currentForm.id);
    		
    			src && (src = preScroller ? src.parentNode.parentNode : src);
				dest = curScroller ? dest.parentNode.parentNode : dest;
    		}
    		else
    		{
    			src = previousForm && $KU.getElementById(previousForm.id + "_container");
    			dest = $KU.getElementById(currentForm.id + "_container");
    		}
        }
		
		var outTrans, inTrans;
		outTrans = (previousForm && previousForm.outtransitionconfig) ? previousForm.outtransitionconfig.formTransition || previousForm.outtransitionconfig.formtransition : '';
		inTrans = (currentForm.intransitionconfig) ? currentForm.intransitionconfig.formTransition || currentForm.intransitionconfig.formtransition : '';
	
        if (!$KG["disableTransition"] && ((inTrans && inTrans.toLowerCase()!=="none") || (outTrans && outTrans.toLowerCase()!=="none"))) 
		{
			var outTransAnimation, inTransAnimation;
			if(!inTrans || inTrans.toLowerCase()=="none")
				inTransAnimation = $KW.formTransitionsMatrix[outTrans];
			else
				inTransAnimation = $KW.formTransitionsMatrix[inTrans];
			if(!outTrans || outTrans.toLowerCase()=="none")
				outTransAnimation = $KW.formEndTransitionsMatrix[inTrans];
			else
				outTransAnimation = $KW.formEndTransitionsMatrix[outTrans];

			if (src) 
			{
                src.style.zIndex = 1;
            }
            if (dest) 
			{
                dest.style.zIndex = 2;
				var ev = (kony.appinit.isFirefox || kony.appinit.isIE10) ? "animationend" : (vendor + "AnimationEnd");	
				currentForm.__ev = function(srcForm, destForm, currForm, prevForm, ev){                    
                    return function(event){
                        if(!event)
							event = window.event;
						currForm.__ev = "";
                        if(event.type == ev)
						{
							kony.events.removeEventListener(destForm, event.type, arguments.callee);
							this.style[vendor + 'AnimationName'] = "";
						}
						$KW.Form.endTransition(srcForm, destForm, currForm, prevForm);
                    }
                }(src, dest, currentForm, previousForm, ev);
				
				kony.events.addEventListener(dest, ev, currentForm.__ev);
				
				
                // TODO: Add provision for animation duration from IDE
				// src
				if(src)
				{
					src.style[vendor + 'AnimationDuration'] = "0.5s";
					src.style[vendor + 'AnimationName'] = outTransAnimation; 
				}
				// dest
				dest.style[vendor + 'AnimationDuration'] = "0.5s";
				dest.style[vendor + 'AnimationName'] = inTransAnimation;
                
				$KU.removeClassName(dest, "hidden");
                dest.style.display = "";
            }
        }
        else 
		{
            $KU.removeClassName(dest, "hidden");
            dest.style.display = "";
            this.endTransition(src, dest,currentForm, previousForm);
        }
	},
	
	endTransition: function(src, dest, currentForm, previousForm){
		
    	/*
		var imgTags = document.getElementsByTagName("img");
		for(var i=0; i<imgTags.length; i++)
		{
			var _src = img.getAttribute("_src");
			_src && (img.src = _src);
		}
		*/
		
		
        if(src) 
		{
			if(previousForm.__ev)
			{			
				//console.warn("emptying __ev");
				previousForm.__ev();
			
			}
			src.style.display = "none";
            clearInterval(previousForm.scrollerTimer);
            
            var main = $KU.getElementById("__MainContainer");
            main.removeChild(src);
        }
		
		var formId = $KG["transitAll"] ? (currentForm.id + "_container") : ($KG.needScroller ? currentForm.id + "_scroller" : currentForm.id);
		$KW.Form.initializeTouchWidgets(formId, true);
        
        var mapCanvasElement = document.getElementsByName("map_canvas")[0];
        var scriptloaded = $KG["mapScriptLoaded"];
        if (mapCanvasElement && scriptloaded) 
            $KW.Map.setUpInteractiveCanvasMap();
		
		//Retaining scroll position
		if(currentForm.retainscrollposition) 
		{
			var currentFormScroller = $KG[currentForm.id + "_scroller"];
			if(currentFormScroller)
				currentFormScroller.scrollTo(0, currentForm.__y || 1);
			else if($KU.isWindowsPhone && $KU.isIE9)
				window.scrollTo(0, currentForm.__y || 0);			// no anim
			else
				window.scrollTo(0, currentForm.__y || 1);			// no anim
		}
		else if($KG["nativeScroll"]){
			window.scrollTo(0, 0);
		}

		if (currentForm.postshow) {
			var postref = $KU.returnEventReference(currentForm.postshow);
			postref && postref.call(currentForm, currentForm);
		}
	},   
	/* - END OF SPA */

/******************************************------------DESKTOP---------************************************************/
	

/*********************************************-----TC--------**************************************************/	
	
};

