/* konywidgets. js */

// Form transitions IDE-CSS mapping
$KW.formTransitionsMatrix = {"topCenter":"slidetopin", "bottomCenter":"slidebottomin", "rightCenter":"sliderightin", "leftCenter":"slideleftin", "fadeAnimation":"fadein"};
$KW.formEndTransitionsMatrix = {"rightCenter":"sliderightout", "leftCenter":"slideleftout", "topCenter":"slidetopout", "bottomCenter":"slidebottomout", "fadeAnimation":"fadeout"};
$KW.stringifyScrolldirection = {1:"horizontal", 2:"vertical", 3:"both", 4:"none"};
	
$KW.Widget = {

	/*	$KW.Widget.setvisibility($KG.frmLabel.segvisible1,true);
	 * 
	 * */
  setvisibility: function(widgetModel, value){    
        
        if (widgetModel) 
		{
            widgetModel.isvisible = value;
            var element,element2,tabpaneWidgetModel;
			if (widgetModel.wType == "ScrollBox") 

                element = $KU.getElementById(widgetModel.pf + "_" + widgetModel.id + "_parent");
			else if (widgetModel.wType == "Tab") {
				tabpaneWidgetModel = kony.model.getWidgetModel(widgetModel.pf, widgetModel.parent);
				if(tabpaneWidgetModel.view === 'tabview'){
					element = $KU.getElementById(widgetModel.pf + "_" + widgetModel.id + "_Li");
					element2 = $KU.getElementById(widgetModel.pf + "_" + widgetModel.id + "_Body");
				}
				else
					element = $KU.getNodeByModel(widgetModel);
			}
            else 
                element = $KU.getNodeByModel(widgetModel);
				
            if (element) 
			{
				if(widgetModel.wType == "Slider" || widgetModel.wType == "Image") 
				{
					element = element.parentNode;
				}
			
                if (value.toString() == "false") 
                {
					if(widgetModel.screenLevelWidget && widgetModel.wType == "Segment"){
						element = element.parentNode.parentNode;
					}
                    $KU.addClassName(element, "hide");
                }
                else {
					if(widgetModel.screenLevelWidget && widgetModel.wType == "Segment"){
						element = element.parentNode.parentNode;
					}
                    $KU.removeClassName(element, "hide");
                    //element.style.display = "";
					
                    if (widgetModel.wType == "Tab" && tabpaneWidgetModel.view === 'tabview') {
                        element.style.display = "inline";
                    }
                }
                if (widgetModel.viewtype && widgetModel.viewtype == "pageview") {
                    //Hide footer div for seg pageview and imagestrip
                    widgetModel.isvisible && $KW.touch.computeWidths(element, widgetModel);
                    element.nextSibling && $KU.toggleVisibilty(element.nextSibling, widgetModel.data || widgetModel.masterdata, widgetModel);
                }
				if(value && widgetModel.viewtype == "stripview"){ //HStrip
					$KW.HStrip.refreshScroller(widgetModel, element);
				}
				
				if(value && widgetModel.wType === "Calendar"){ //Calendar
					$KW.Calendar.setCalElementStyle(element.childNodes[0],true);
					value && $KW.Calendar.adjustCalendars(widgetModel);
				}
				
				value && widgetModel.ownchildrenref && $KW.Utils.reinitializeWidgets(widgetModel);
				if(typeof google != "undefined")
				$KW.Utils.resizeMap(widgetModel);
				//When a SLW is hidden then show other SLW, if a SLW is shown then remove other non-SLW widgets in the form.
				if(widgetModel.screenLevelWidget){
					var formModel = $KG.allforms[widgetModel.pf];
					$KW.Form.addChild(formModel, formModel.ownchildrenref, true);
				}
                /* Resize header / footer
                var parentType = $KG.allforms[widgetModel.pf].wType;
                var form = $KG["__currentForm"].id;
                if (parentType == "header") 
                    $KW.Scroller.checkDOMChanges(form + "_scroller", widgetModel.pf, null);
                if (parentType == "footer") 
                    $KW.Scroller.checkDOMChanges(form + "_scroller", null, widgetModel.pf);*/
					
            }else{
				tabpaneWidgetModel = kony.model.getWidgetModel(widgetModel.pf, widgetModel.parent);
				if(tabpaneWidgetModel && tabpaneWidgetModel.viewtype === 'tabview'){
					element = $KU.getElementById(widgetModel.pf + "_" + widgetModel.id + "_Li");
					element2 = $KU.getElementById(widgetModel.pf + "_" + widgetModel.id + "_Body");
					
					if (value.toString() == "false") 
						//element.style.display = "none";
						$KU.addClassName(element, "hide");
					else {
						$KU.removeClassName(element, "hide");
						//element.style.display = "";
						if (tabpaneWidgetModel.viewtype === 'tabview') {
							element.style.display = "inline";
						}
					}
					
				}
				else
					element = $KU.getNodeByModel(widgetModel);				
			}
			
			if(element2) {
				var index = element.getAttribute("index");
				
				if (value == false || value == "false") 
					//element2.style.display = "none";
					$KU.addClassName(element2, "hide");
				else {
					if(tabpaneWidgetModel && ((tabpaneWidgetModel.activetab - IndexJL) == parseInt(index ))){
						$KU.removeClassName(element2, "hide");
					}
					//element2.style.display = "";
				}
			}
			/* DEF5921 fix
			*/

			if(value){
				if(widgetModel.id){
					var currentFormId = widgetModel.pf || "";
					var widgetElement = $KU.getElementById(currentFormId + "_" + widgetModel.id);
					var lineNodes = widgetElement && widgetElement.querySelectorAll("#" + currentFormId + " div[kwidgettype='Line'][direction='V']");
					if(lineNodes && lineNodes.length > 0){
						$KW.Line.initializeView(currentFormId);		
					}			
				}
			}
        }
    },

	
  	setenabled: function(widgetModel, value)
	{
        if(!widgetModel || typeof value != "boolean")
			return;
		
		widgetModel.disabled = !value;
		var id = widgetModel.pf + "_" + widgetModel.id;
		if((widgetModel.wType == "Tab" || widgetModel.name == "kony.ui.Tab")){
			if($KG.allforms[widgetModel.pf][widgetModel.parent].viewtype == "tabview"){
				var tabHeader = $KU.getElementById(id + "_A");
				if(tabHeader){
					tabHeader.disabled = !value;
					tabHeader.setAttribute("kdisabled", !value);
					var tabBody = $KU.getElementById(id + "_Body");
					tabBody.setAttribute("kdisabled", !value);
					id = id + "_Body";
				}
			}
			if($KG.allforms[widgetModel.pf][widgetModel.parent].viewtype == "collapsibleview"){
				id = id + "_Tab";
			}	
		}		
		var children = document.querySelectorAll("#" + id + ", #" +  id + " [kwidgettype]");
		var node, widgettype, tpwidgettype;
		for( i=0; i<children.length; i++){
			node = children[i];
			widgettype = node.getAttribute("kwidgettype");
			tpwidgettype = node.getAttribute("tpwidgettype");
			/* For Windows Mango , adding disabled to select tag itself doesn't work
			Traversing through the select tag and disabling all option tags		*/
			if($KU.isWindowsPhone && $KU.isIE9 && node.tagName == 'SELECT'){			
				for(var j=0;j<node.childNodes.length;j++){
					node.children[j].disabled = !value;
				}				
			}
			if(widgettype != "Link" && widgettype != "Label" && widgettype != "HBox" && widgettype != "VBox") // Setting disabled to true to div makes gray look to all its children in ie.  			
				node.disabled = !value;	
				if(widgettype == "Link")
				node.childNodes[0].setAttribute("kdisabled", !value);
			//Replacing href(<a> inside richtext) path to javascript:void(0), when richtext is disabled
			if(widgettype == "RichText") 
				var aEle = document.querySelectorAll("#"+node.id+" a");
			if(widgettype == "RichText" && aEle && !value)
			{
				node.ishref = true;
				node.innerHTML = node.innerHTML.replace(/href=["'].*?["']/g,"href='javascript:void(0)'");
			}
			else if(node.ishref)
			{
				node.innerHTML = widgetModel.text;
			}
			if(widgettype == "Video"){
				
				if(value){	
					node.oncontextmenu = "";
					node.playing && node.paused && node.play();
					if(widgetModel.controls)
						node.setAttribute("controls","controls");
				}
				else{
					node.playing && node.pause();
					node.removeAttribute("controls");
					node.oncontextmenu = function(){return false};
				}
			}
			
			node.setAttribute("kdisabled", !value); //Setting this attribute to apply disabled skin and prevent click event
			
			// the condition check depends on and should be after node.setAttribute
			if(widgetModel.wType === "Map" && (node.getAttribute("kwidgettype") === "Map" || node.getAttribute("tpwidgettype") === "googlemap"))
			{
				widgetModel.disabled = !value;
				$KW.Map.setEnabledMap(widgetModel, node);
			}
		}
    },		
    
    setfocus: function(widgetModel, popupModel, element){
		// TODO: Check if element in a scrollable box is scrolled automatically

		if(!widgetModel.isvisible)
		  return;

		var widgetHTMLObj = (element) ? element : $KU.getNodeByModel(widgetModel);		
		if(!widgetHTMLObj)
			return;
		
		if(widgetModel.wType == 'ScrollBox'){	
			widgetHTMLObj = $KU.getElementById(widgetHTMLObj.id + "_parent");
		}		

		if(!$KG.relativeScroll && !$KG.nativeScroll)
		{
			var scrollerInstance 
			if(popupModel)
				scrollerInstance = $KG[popupModel.id + "_scroller"];
			else{
				var scrollBox = $KU.closestElement(widgetHTMLObj.parentNode, 'kwidgettype', 'ScrollBox');
				scrollerInstance = scrollBox ? $KG[scrollBox.id + "_scroller"] : ($KG["__currentForm"] ? $KG[$KG["__currentForm"].id + "_scroller"] : "");
			}	
			
			if(scrollerInstance)
				scrollerInstance.scrollToElement(widgetHTMLObj, 1000);	// 1s
		}
		else
		{
			// uses window.scrollTo
			$KW.Utils.scrollToElement(widgetHTMLObj, 1000); // 1s
		}
    },

	// Gesture APIs
	setgesturerecognizer: function(widgetModel, gestureType, gestureObj, callback)
	{
		if(!widgetModel)
			return null;
			
		$KW.Widget.removegesturerecognizer(widgetModel, gestureType);
		$KW.Utils.updateModelWithGesture(widgetModel, gestureType, gestureObj, callback);
		return (new $KW.touch.gesture(widgetModel, gestureType, gestureObj, callback)).gestureIdentifier;
	},

	removegesturerecognizer: function(widgetModel, gestureType)
	{
		if(typeof(gestureType) === "string") {
			var gestureIdentifier = ($KG.gestures && $KG.gestures[gestureType]) ? $KG.gestures[gestureType] : null;
			if(!gestureIdentifier) return;
			var identifier = gestureType;
			widgetModel = gestureIdentifier.widgetModel;
			gestureType = gestureIdentifier.gestureType;
			delete $KG.gestures[identifier];
		}

		if(!widgetModel)
			return;
		
		if(gestureType == 1)
		{
			// Remove both single tap and double tap gestures
			$KW.Utils.removegesture(widgetModel, 10);
			$KW.Utils.removegesture(widgetModel, 11);
		}
		else
			$KW.Utils.removegesture(widgetModel, gestureType);
	},

	addgesturerecognizerforallforms: function(gestureType, gestureObj, callback)
	{
		$KW.Widget.removegesturerecognizerforallforms(gestureType);
		$KW.Utils.updateModelWithGesture("", gestureType, gestureObj, callback);
		return (new $KW.touch.gesture("", gestureType, gestureObj, callback)).gestureIdentifier;
	},

	removegesturerecognizerforallforms: function(gestureType)
	{
		if(typeof gestureType == "string") {
			var gestureIdentifier = ($KG.gestures && $KG.gestures[gestureType]) ? $KG.gestures[gestureType] : null;
			if(!gestureIdentifier) return;
			var identifier = gestureType;
			gestureType = gestureIdentifier.gestureType;
			delete $KG.gestures[identifier];
		}
		$KW.Widget.removegesturerecognizer($KG, gestureType);
	}
}

/**
 * Holds a list of skin functions that provide the following information.
 *
 * 1. provide the margin skin class
 *
 * 2. provide the padding skin class
 *
 * 3. provide the container weight skin class (after deducting the margins/padding)
 *
 * 4. provide the combined skin list string.
 *
 */
$KW.skins =
{
	
	//Concatenates the margin information provided by the developer and create the margin class as kmg   
    getMarginSkin: function(widgetModel, context)
	{
        if(!context)
			context = {};
		var parentmodel;
		parentmodel = kony.model.getWidgetModel(widgetModel.pf, widgetModel.parent, context.tabpaneid);
		
		/*
			parentmodel = kony.model.getWidgetModel(widgetModel.pf, widgetModel.parent, context.tabpaneid);
		*/
		
		var margin = widgetModel.margin;
		
		if($KG.appbehaviors && $KG.appbehaviors["applyMarginPaddingInBCGMode"] == true)
        {	
			if($KU.isArray(margin))
				return "margin:" + $KU.joinArray(margin, "% ") + "%;";
			else
				return "margin:0;";		
        }
		else {	
			if(!parentmodel || parentmodel.wType !="HBox" || (parentmodel.wType=="HBox" && context.ispercent == false)) {
				if($KU.isArray(margin))
					return "margin:" + $KU.joinArray(margin, "% ") + "%;";
				else
					return "margin:0;";
			}
			else
				return "";
		}
    },
 
/**
 * 
 *  This is a special function that returns the child models margin as a padding which is added to the container widget's cell. 
 *	The reason for this conversion are two fold:
 *
 *   1. There are some widgets which do not apply margin when provided directly at the widget level.
 *   2. To maintain parity between the native platforms & SPA
 *   The problem with this approach is there is technical diffrence in the amount of margin that is applied to a widget 
 *
 */
 
    getChildMarginAsPaddingSkin: function(widgetModel){
        
        if(($KG.appbehaviors["applyMarginPaddingInBCGMode"]==true))
            return "";
        var margin = widgetModel.margin;
        if ($KU.isArray(margin))
            return "padding:" + $KU.joinArray(margin, "% ") + "%;";
        else
            return "";
    },
	
	
    /**
     * Concatenates the margin information provided by the developer and create the margin class as kmg
     */
    getPaddingSkin: function(widgetModel){

    		if(widgetModel.wType =='ListBox' || widgetModel.wType =='ComboBox' )
    			return "padding:0% ";

	
		var parentmodel = kony.model.getWidgetModel(widgetModel.pf, widgetModel.parent);
		var padding = widgetModel.padding;
		 var margin = widgetModel.margin;
		 /* 
		 	parentlevelpadging: if parentlevelpadding is true, we calculate widget padding w.r.t to parent width other wise we return widget padding
		 */
		if((typeof ($KG.appbehaviors["parentLevelPadding"]) == 'undefined' || $KG.appbehaviors["parentLevelPadding"]==true) && $KG.appbehaviors["applyMarginPaddingInBCGMode"]==false && parentmodel != null && parentmodel.wType=="HBox"&& parentmodel.percent == true )
		{			
			if(padding && $KU.isArray(padding) && margin && $KU.isArray(margin)) {
			
				var excesspadding = 100/(widgetModel.containerweight-(parseInt(margin[0 + IndexJL]) + parseInt(margin[2 + IndexJL])));
				var x=[];
				var y=widgetModel.padding;
				for(var i=0;i<y.length;i++)
				{
					x[i]=y[i]*excesspadding;
				}
				
				return "padding:" + $KU.joinArray(x, "% ") + "%;";			
			}				
		}		
		else 
		{
	        if($KU.isArray(padding))
	            return "padding:" + $KU.joinArray(padding, "% ") + "%;";
	        else
	            return "padding:0%;";	        
		}
    },
	
	setMarginPadding: function(element, propertyName, widgetModel, propertyValue, referenceCWt) {
		if(element) {
			if(typeof referenceCWt != "number") var referenceCWt = 100;
			var kwidth = $KW.skins.getMarPadAdjustedContainerWeightSkin(widgetModel, referenceCWt);
			element.className = element.className.replace(/\kwt/g, '_');

			$KU.addClassName(element, kwidth);
            if(widgetModel.wType=="Image")
			element.parentNode.style[propertyName] = $KU.joinArray(propertyValue, "% ") + "%";
            else if(widgetModel.wType=="Slider") {
                        element.parentNode.parentNode.style[propertyName] = $KU.joinArray(propertyValue, "% ") + "%";
            }                    
			else
			element.style[propertyName] = $KU.joinArray(propertyValue, "% ") + "%";
		}
	},

    /**
     * Provides the container weight skin. This skin depending on the widgets reduces the margin and paddings
     * from the over all container wieght assigned to the widget.
     *
     */
    getMarAdjustedContainerWeightSkin: function(widgetModel, referenceCWt){

        var cwt = referenceCWt || ((widgetModel.wType == "HBox") ? "100" : widgetModel.containerweight);		
        if (cwt) {
            var margin = widgetModel.margin;
            if (margin) {
                cwt -= (parseInt(margin[0 + IndexJL]) + parseInt(margin[2 + IndexJL]));                
            }
            if(cwt>100 && $KG["cwtexists"].indexOf(cwt)==-1)
			{
                $KG["cwtexists"].push(cwt);                
                var styleSheetObjs = window.document.styleSheets;
                var konyStyleSheetIndex = $KW.Utils.getKonyStyleSheetIndex(styleSheetObjs);
                if (konyStyleSheetIndex != -1) {
                    var styleSheetObj = styleSheetObjs[konyStyleSheetIndex];
                    var rules = styleSheetObj.cssRules || styleSheetObj.rules;
                    if(styleSheetObj.insertRule)
                        styleSheetObj.insertRule(".kwt"+cwt+"{width:"+cwt+"%;}", rules.length);
                    else
                        styleSheetObj.addRule(".kwt"+cwt,"width:"+cwt+"%;");
                }     
                //window.document.styleSheets[$KW.Utils.getKonyStyleSheetIndex(window.document.styleSheets)].addRule(".kwt"+cwt,"width:"+cwt+"%;");
            }
            return "kwt" + cwt;
            
        }
        else 
            return "kwt100";
    },


    /**
     * Provides the container weight skin. This skin depending on the widgets reduces the margin and paddings
     * from the over all container wieght assigned to the widget.
     *
     */
    getMarPadAdjustedContainerWeightSkin: function(widgetModel, referenceCWt){

        var cwt = referenceCWt || widgetModel.containerweight;

        if (cwt) {
			try{
				var margin = widgetModel.margin;
				if (margin) {
					cwt -= (parseInt(margin[0 + IndexJL]) + parseInt(margin[2 + IndexJL]));
				}
				return "kwt" + cwt;
			}
			catch(e){
				console.error("Error occured in getting container weight " + e);
			}
        }
        else 
            return "kwt100";
        
    },
	
     /**
     * Provides the container weight skin. This skin depending on the widgets reduces the margin and paddings
     * from the over all container weight assigned to the widget.
     *
     */
    getWidgetSkin: function(widgetModel, context){
		var skin;
		if(context && context.container){
			var data = context.container.widgetsData;
			var wData = data[widgetModel.id];			
			if(wData && wData.skin)
				skin =  wData.skin;
		}
        return skin || widgetModel.skin || "";
    },
	
    /**
     * Get the list of widget skins
     *
     */
     getWidgetSkinList: function(widgetModel, context, data){
	 
        var skins = [];
        if(!context)
			context = {};
		var parentmodel;
			parentmodel = kony.model.getWidgetModel(widgetModel.pf, widgetModel.parent, context.tabpaneid);        
        //skins.push(this.getMarginSkin(widgetModel));
        //skins.push(this.getPaddingSkin(widgetModel));
		if($KG.appbehaviors && $KG.appbehaviors["applyMarginPaddingInBCGMode"] == false &&( parentmodel!= null && parentmodel.wType =="HBox") )
        {	
			if (!(context && context.ispercent === false)) 
				skins.push("kwt100");
		
		}else {
			if (widgetModel.wType == "TextField" || widgetModel.wType == "HBox" || widgetModel.wType == "VBox" || widgetModel.wType == "Label" || widgetModel.wType == "Link" || widgetModel.wType == "TextArea") {
				if (!((widgetModel.wType == "TextField" || widgetModel.wType == "TextArea" || widgetModel.wType == "Label" || widgetModel.wType == "Link") && context && context.ispercent === false)) 
					skins.push(this.getMarPadAdjustedContainerWeightSkin(widgetModel, 100));
			}
			else {
				if (!(context && context.ispercent === false)) 
					skins.push(this.getMarAdjustedContainerWeightSkin(widgetModel, 100));
			}
		
		}
            skins.push(this.getWidgetSkin(widgetModel, context));
        if (!$KW.Utils.isWidgetVisible(widgetModel, context) || (data && data.length <= IndexJL)) //Hide the entire widget (i.e. checkbox, radio etc) if there is no data
            skins.push("hide");
        return skins.join(" ");
    },

    getSplitSkinsBetweenWidgetAndParentDiv : function(widgetModel, context)
    {

        var splitSkins = new Array();
        var marginSkin = "";//this.getMarginSkin(widgetModel);
        var paddingSkin = "";//this.getPaddingSkin(widgetModel);
        var weightSkin = "";
        if (widgetModel.wType=="HBox"||widgetModel.wType=="VBox")
        {
            weightSkin =this.getMarPadAdjustedContainerWeightSkin(widgetModel, 100)
        }
        else
        {
            weightSkin = this.getMarAdjustedContainerWeightSkin(widgetModel, 100);
        }
        var widgetSkin = this.getWidgetSkin(widgetModel, context);        
        splitSkins[0] = marginSkin + " " + paddingSkin + " " + " " + widgetSkin + " ";        
        splitSkins[1] = weightSkin;        
        splitSkins[2] = marginSkin + " " + paddingSkin + " " + " " + widgetSkin + " " + weightSkin;
		        
        return splitSkins;
    },

    getSplitSkinsBetweenWidgetAndParentDivForCBRB : function(widgetModel, context)
    {
        var splitSkins = new Array();
        var marginSkin = "";// this.getMarginSkin(widgetModel);
        var paddingSkin ="";// this.getPaddingSkin(widgetModel);
        var weightSkin = "";
        weightSkin = this.getMarPadAdjustedContainerWeightSkin(widgetModel, 100);
        var widgetSkin = this.getWidgetSkin(widgetModel, context);
        
        splitSkins[0] = "kwt100 " + paddingSkin + " " + " " + widgetSkin + " ";
        splitSkins[0] = "kwt100 " + paddingSkin + " " + " ";
        splitSkins[1] = weightSkin;
        splitSkins[2] = marginSkin + " " + weightSkin + " ";
        
        return splitSkins;
    },

    getWidgetAlignmentSkin : function(widgetModel){	
        var alignment = (widgetModel.wType == "IGallery" ? "middleleftalign" : "middlecenteralign");
        if (widgetModel.wType == "HBox"||  widgetModel.wType == "ScrollBox") {
            return this.getBoxAlignment(widgetModel);
        }
        return this.getAlignment(widgetModel.widgetalign || widgetModel.widgetalignment) || alignment;
    },
	
	getAlignment: function(align){
		switch (parseInt(align)) {
			case 1:
				return "topleftalign";
			
			case 2:
				return "topcenteralign";
				
			case 3:
				return "toprightalign";
			
			case 4:
				return "middleleftalign";
			
			case 5:
				return "middlecenteralign";
				
			case 6:
				return "middlerightalign";
			
			case 7:
				return "bottomleftalign";
			
			case 8:
				return "bottomcenteralign";
			
			case 9:
				return "bottomrightalign";
        }
		return "";
	},
	
	getContentAlignment: function(widgetModel, align){
		var align = align || widgetModel.contentalignment;
		if(widgetModel.wType == "DataGrid"){
			return this.getAlignment(align);
		}
		switch (parseInt(align)) {
			case 1:
			case 4:
			case 7:
				return "left";
			
			case 2:
			case 5:
			case 8:
				return "center";
				
			case 3:
			case 6:
			case 9:
				return "right";
        }
		return "left"; //default
	},
   
    getBoxAlignment: function(widgetModel){
        var widgetlayoutdirection = "middlecenteralign";
        //added below snippet for JSPFQA9069, default alignment for scrollbox is left.
		/*if(widgetModel.wType == "ScrollBox")
			widgetlayoutdirection = "middleleftalign";        
		*/
		if(widgetModel.wType == "VBox"){
		    switch (parseInt(widgetModel.widgetdirection)) {
				case 0:
			   	    widgetlayoutdirection = "topcenteralign";
				    break;
				case 1:
				    widgetlayoutdirection = "middlecenteralign";
				    break;
				case 2:
				    widgetlayoutdirection = "bottomcenteralign";
				    break;
			 }
		} else {
	          switch (parseInt(widgetModel.widgetdirection)) {
		     	case constants.BOX_LAYOUT_ALIGN_FROM_LEFT:
	                widgetlayoutdirection = "middleleftalign";
	                break;
		     	case constants.BOX_LAYOUT_ALIGN_FROM_CENTER:
	                widgetlayoutdirection = "middlecenteralign";
	                break;
		     	case constants.BOX_LAYOUT_ALIGN_FROM_RIGHT:
	                widgetlayoutdirection = "middlerightalign";
	                break;
	          }
		}
        return widgetlayoutdirection;
    }
}


$KW.Utils = {
    getBaseHtml: function(widgetModel, context, type, accessObj) {
		
		var id = type ? widgetModel.id : (widgetModel.pf + "_" + widgetModel.id);
		
        
        var tabpaneID = context.tabpaneID || "";
        var containerID = (context.container && context.container.id) || "";
        var toolTip = widgetModel.tooltip || "";
        var isDisabled = this.isWidgetDisabled(widgetModel, context) || false;
        if(containerID && (widgetModel.wType == 'Calendar')){
            id = id + "_" + context.container.counter;
        }
        if(tabpaneID) 
			widgetModel.tabpaneId = tabpaneID;
        if(containerID) 
			widgetModel.containerId = containerID;
        var disable = isDisabled ? (" kdisabled='true' " + ((widgetModel.wType != "Image" && widgetModel.wType != "HBox" && widgetModel.wType != "VBox" && widgetModel.wType != "Link" && widgetModel.wType != "Label") ? "disabled=" + isDisabled : "")) : "";
        var contextmenu = widgetModel.contextmenu || "";
		
		
		//Adding aria-label attribute to customize the content during voice over.
		
		
		var accessAttr = "";
		if(widgetModel.wType != "Link" && widgetModel.wType != "Label" && widgetModel.wType != "ScrollBox" && widgetModel.wType != "RadioButtonGroup" && widgetModel.wType != "CheckBoxGroup")
			accessAttr = $KU.getAccessibilityValues(widgetModel, accessObj);
		
		//Removing accessibility for containerWidgets parent level, when hidden is set. This is to make child elements accessible when hidden is set true for parent(only for containerWidgets).	
		if((widgetModel.wType=="HBox" || widgetModel.wType=="Segment" || widgetModel.wType=="VBox" || widgetModel.wType=="HStrip") && (accessAttr.indexOf("aria-hidden"))>0){
			accessAttr = "";
		}	
		
		return accessAttr + " id='" + id   + "' kwidgettype='" + widgetModel.wType + "' kformname='" + widgetModel.pf + "'" + (tabpaneID && " ktabpaneid='" + tabpaneID + "'") + (containerID && " kcontainerID = '" + containerID + "'") +  disable + (toolTip ? " title= '" +  toolTip + "'": "") + " ";
		
    },

    isWidgetDisabled: function(wModel, context){		
		if(context && context.container && context.container.widgetsData)
			return this.isContainerWidgetDisabled(wModel, context);
		if(wModel.disabled)
			return true;
		var formId = wModel.pf;
		var pModel = wModel.parent && $KG.allforms[formId] && $KG.allforms[formId][wModel.parent];
		while(pModel) {
				if (pModel.disabled || (formId == pModel.parent)) {
						return pModel.disabled;
				}
				pModel = $KG.allforms[formId][pModel.parent];
		}
	},
	
	isContainerWidgetDisabled: function(wModel, context){
	
		var data = context.container.widgetsData;
		var wData = data[wModel.id];			
		if(wData && wData.enable != undefined && wData.enable == false)
			return true;
		var formId = wModel.pf;
		var pData, pDisabled;
		var pModel = wModel.parent && window[formId] && window[formId][wModel.parent];
		while(pModel) {
			pData = data[pModel.id];
			pDisabled = (pData && pData.enable != undefined && pData.enable == false);
			if (pDisabled || (context.container.id == pModel.parent)) {
					return pDisabled;
			}
			pModel = window[formId][pModel.parent];
		}
	},	    
	
	isWidgetVisible: function(wModel, context){
		if( context && context.container && context.container.widgetsData){
			var data = context.container.widgetsData;
			var wData = data[wModel.id];
			if(wData)
				return (wData.visible != undefined ? wData.visible : wModel.isvisible);
		}
		return wModel.isvisible;
	},
	
	//initialize new widgets which are added to a container (like form, box , scrollbox, tab..) after form is rendered.
	initializeNewWidgets: function(wArray){
	
		/*var pf = wArray.length > 0 && wArray[0].pf;
		var topContainer = pf && window[pf];
		var popup = pf && $KU.getElementById(pf);
		var cForm = $KG["__currentForm"];
		if(pf && cForm && ((topContainer.wType == "Form" && cForm.id == topContainer.id) || 
						   (topContainer.isheader && ($KU.inArray(cForm.headers, topContainer) || $KU.inArray(cForm.foooters, topContainer))) || 
						   (topContainer.wType == "Popup" && popup))){*/
		
		if(wArray && wArray.length > 0){		
			for(var i=0; i < wArray.length; i++) {
				var widgetModel = wArray[i];				
				var wType = widgetModel.wType;				
				switch(wType) {        
					case "Segment":
						var segment = $KU.getNodeByModel(widgetModel);
						if(segment){
							if(widgetModel.viewtype == constants.SEGUI_VIEW_TYPE_PAGEVIEW){
								$KG[segment.id] = new $KW.touch.pageviewScroller(segment, {widgetModel : widgetModel});
								$KW.touch.computeWidths(segment, widgetModel);
							}
							if(widgetModel.screenLevelWidget){
								var pNode = segment.parentNode.parentNode;
								$KW.Scroller.initialize([pNode], "Segment");								
							}
						}
						break;
						
					case "HStrip":
						var strip = $KU.getNodeByModel(widgetModel);
						if(widgetModel.viewtype == constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_STRIPVIEW){						
							$KW.HStrip.initializeStripView(strip);
						}
						if(widgetModel.viewtype == constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_PAGEVIEW){						
							$KG[strip.id] = new $KW.touch.pageviewScroller(strip, {widgetModel : widgetModel});
							$KW.HStrip.initializePageView(widgetModel, false, strip);
							$KW.touch.computeWidths(strip, widgetModel);
						}
						if(widgetModel.viewtype == constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_SLOTVIEW){						
							$KW.HStrip.initializeSlotView(widgetModel);
						}
						break;
						
					case "ScrollBox":
						var scrollBox = $KU.getNodeByModel(widgetModel);
						var pNode = scrollBox.parentNode.parentNode;
						$KW.Scroller.initialize([pNode], "ScrollBox");
						$KW.ScrollBox.adjustDimensionsByNode(widgetModel, scrollBox);
						break;
						
					case "Slider":
						var slider = $KU.getNodeByModel(widgetModel);
						$KW.Slider.attachSliderEvents(slider.childNodes[0]);
						kony.events.addEventListener(slider.parentNode, "click", $KW.Slider.slideClick);
						break;
						
					case "Switch":
						var switchNode = $KU.getNodeByModel(widgetModel);
						$KW.Switch.adjustWidth(widgetModel, switchNode, true);
						$KW.Switch.adjustHeight(widgetModel, switchNode);
						break;	
					
					/*case "TextField":
						if($KU.isAndroid && (widgetModel.mode == constants.TEXTBOX_INPUT_MODE_PASSWORD || widgetModel.securetextentry) && !$KG.relativeScroll){
							new MaskedPassword($KU.getNodeByModel(widgetModel), '\u25CF');
						} 
						break; */
					
					case "Video":					
						if($KU.isAndroid){
							var video = $KU.getNodeByModel(widgetModel);
							kony.events.addEventListener(video, 'click', function(event){
								event = event || window.event;
								event.srcElement.play();
							}, false);
						}
						break
						
					case "TabPane":
						var tabPane = $KU.getNodeByModel(widgetModel);
						tabPane && $KW.TabPane.setTabsHeight(tabPane.id);
						break

                    case "Map":
                        $KW.Map.loadMapScripts();
                        $KW.Map.setUpInteractiveCanvasMap();
                        break
                }
				
				if(widgetModel.ownchildrenref){
					this.initializeNewWidgets(widgetModel.ownchildrenref);					
				}				
			}
		}
		//}	
	},
	
	//reinitialize widgets in a container if the container widget is made visible thru code.
	reinitializeWidgets: function(containerModel){
	
		var wArray = containerModel.ownchildrenref;
		for(var i=0; i < wArray.length; i++) {
			var widgetModel = wArray[i];				
			var wType = widgetModel.wType;				
			switch(wType) {        
				case "ScrollBox":
					var scrollBox = $KU.getNodeByModel(widgetModel);
					$KW["ScrollBox"]["updateView"](widgetModel,  "totalWt" , widgetModel.totalWt);				
					$KW.ScrollBox.adjustDimensionsByNode(widgetModel, scrollBox);
					break;
					
				case "Slider":
					var slider = $KU.getNodeByModel(widgetModel);
					$KW.Slider.imgLoad(slider.childNodes[0]);
					//$KW.Slider && $KW.Slider.initializeView(widgetModel.pf);
					break;
					
				case "Calendar":
					var calendar = $KU.getNodeByModel(widgetModel);
					$KW.Calendar.setCalElementStyle(calendar.childNodes[0], true);
					break;
				
			}
			
			if(widgetModel.ownchildrenref){
				this.reinitializeWidgets(widgetModel);					
			}				
		}
	},

	//resize the map whenever the setvisibility property is changed dynamically
	resizeMap: function(wModel){					
		var map = document.querySelector("#" + wModel.pf + " div[tpwidgettype='googlemap']");
		if(map){
 				var mapModel = $KU.getModelByNode(map);
 				if(mapModel.mapSource == "non-native")
 				google.maps.event.trigger($KW.Map.map, 'resize'); 
			} 				
  	},
		
	updateContent: function(widgetModel, property, dataArray, action, index, secIndex) {
		//Segment with sections
		var widgetData = widgetModel[property];

        if (widgetModel.wType == "Segment" && widgetModel.hasSections && widgetData && !["setdata","removeall"].contains(action)){
        	$KW.Segment.updateSectionContent(widgetData, dataArray, action, index, secIndex);
			return;
        }
		
        switch (action) {
            case "setdata":
                widgetModel.canUpdateUI = false;
                widgetModel[property] = dataArray;
                widgetModel.canUpdateUI = true;
                break;
                
            case "setdataat":
                 widgetModel[property] && widgetModel[property].length > index && widgetModel[property].splice(index, 1, dataArray);
                break;
                
            case "addall":
                var fillarray = IndexJL ? [null] : [];
				var newDataArray;
                widgetModel.canUpdateUI = false
				widgetModel[property] = widgetModel[property] || fillarray;
				
				// lua dataArray comes with a leading null
				// can't clone a template
				if(IndexJL && !dataArray[0] && (dataArray[1] && !dataArray[1].template))
				{
					newDataArray = $KU.cloneObj(dataArray);
					newDataArray.shift();
				}
                widgetModel.canUpdateUI = true
				$KU.addArray(widgetModel[property], newDataArray || dataArray);
                break;
                
            case "addat":
			case "adddataat":
				if(widgetModel[property]){
					var noOfRows = widgetModel[property].length - IndexJL;
					index = (index <= IndexJL) ? IndexJL : (index > noOfRows ? noOfRows + 1 : index);					
					if($KU.isArray(dataArray)){
						for(var i = IndexJL; i < dataArray.length; i++ ){
						  widgetModel[property].splice(index++, 0, dataArray[i]);
						}  
					}
					else {
						if(!widgetModel[property] || widgetModel[property].length <= IndexJL) {
							widgetModel[property] = (IndexJL) ? [null] : [];
							widgetModel[property].push(dataArray);
						} else {
							widgetModel[property].splice(index, 0, dataArray);
						}
					}
				}
                break;
			                
            case "removeall":
                widgetModel.canUpdateUI = false;
                widgetModel[property] = dataArray;
                widgetModel.canUpdateUI = true;
				if (widgetModel.wType == "Segment" && widgetModel.behavior  != "default")
					widgetModel.selectedindices = null;	
                break;
                
            case "removeat":
                (widgetModel[property] && widgetModel[property].length >= index && widgetModel[property][index]) && widgetModel[property].splice(index, 1);
                break;
        }
    },
	
	updateContainerData: function(childModel, childNode, canExecute){
		var row = $KU.getParentByAttribute(childNode, "index");
		if(row){
			var container = row.parentNode.parentNode;
			var containerModel = $KU.getModelByNode(container);	
			$KW[containerModel.wType].updateData(childModel, childNode, containerModel, row, canExecute);			
		}
		else{
			$KW.MenuContainer && $KW.MenuContainer.eventHandler(childModel, childNode);
		}			
	},
	

	getSegProperty: function(prop)
	{
		var key = $KU.segmentKeyMap[prop];
		return key || prop;
	},
	
    /* data : {text:"Label1", skin:"sk1", focusSkin: "sk2", I18Nkey : "I18NValue"},
     * or
     * data : "Label1" 
     **/
    updateChildModel: function(childModel, data) {
        childModel.canUpdateUI = false;

        if (data instanceof Object) {
			for (var prop in data) 
			{
				var key =  $KW.Utils.getSegProperty(prop).toLowerCase();
				if(key == "disabled")
					childModel[key] = !data[prop];
				else
					childModel[key] = data[prop];
					
                if(childModel.wType == "Image") 
				{
                    if(prop == "base64")
                        childModel.srcType = 2;
                    else if(prop == "src")
                        childModel.srcType = 1;
                }
				if(childModel.wType == "HBox" || childModel.wType == "VBox" ) 
				{
					if(data.isVisible != undefined)
						childModel.isvisible = data.isVisible;
                }
            }
        } else if(childModel.wType != "Image") {//TODO: Maintain widget property map and use it
            childModel.text = data;
        } else {//Image
            childModel.src = data;
            childModel.srcType = 1;
        }
        childModel.canUpdateUI = true;
    },

    /* widgetData : {text:"Label1", skin:"sk1", focusSkin: "sk2", I18Nkey : "I18NValue"},
     * or
     * widgetData : "Label1"
     **/
    updateLayoutData: function(container, layoutModel, data) {
        if(data instanceof Object) {
            for(var ele in data){
                if(ele != 'template' && ele != 'children' && ele != 'metaInfo') {
                    var mapkey = ele;
                    if(container.widgetdatamap) mapkey = kony.utils.getKey(container.widgetdatamap, ele);
                    var tempModel = window[layoutModel.parent]; //In case of lua, refer to the template instead of hbox.  
                    var eleModel = tempModel ? tempModel[mapkey] : layoutModel[mapkey];
                    if(eleModel) {
                        this.updateChildModel(eleModel, data[ele]);
                    }
                }
            }
        }
    },

	setSelectedKeys: function(widgetModel, checked, keys, value){
    
	    var result = $KU.inArray(keys, value);
	    if (checked && !result[0]) {
	        keys.push(value);
	    }
	    else if (result[0]) {
	            keys.splice(result[1], 1);
	    }
	    widgetModel.selectedkeys = keys.length > IndexJL ? keys : null;

	},
	
	/** Masterdata : [["1", "Checkbox1"], ["2", "Checkbox2"], ["3", "Checkbox3"]]
	 *  selectedkeyvalues : [["1", "Checkbox1"], ["2", "Checkbox2"]]
	 *  selectedkeyvalue : ["1", "Radio1"]
	 */
	
    setSelectedValueProperty: function(widgetModel, choices, property, value){
		        
         switch (property) {

            case "selectedkey":                
				var selectedKey = value || widgetModel.selectedkey;
                for (var i = IndexJL; i < (choices.length); i++) {
                    var key = choices[i][IndexJL];  
                    if (selectedKey == key) {
						widgetModel["selectedkeyvalue"] = choices[i]; 
                        break;
                    }
                }
                break;
                
            case "selectedkeys":
                var retVal = [];
				var selectedKeys = value || widgetModel.selectedkeys;
                var flag = false;
                if(IndexJL == 1)   retVal = [null];   //For lua  Array Semantics
                
                for (i = IndexJL; i < (choices.length); i++) {
                    var key = choices[i][IndexJL];
                    if ($KU.inArray(selectedKeys, key)[0]) {
                        retVal.push(choices[i]);
                        flag = true
                    }
                }
                widgetModel["selectedkeyvalues"] = flag ? retVal : null;
                break;
        }
    },
	
	getMasterData: function(widgetModel){
		                  
        var choices = $KU.cloneObj(widgetModel.masterdata);
        if (!choices) {
            var map = widgetModel.masterdatamap;
            if (map) 
                choices = this.convertmap(widgetModel.masterdatamap);
        }
        if (choices) {
            var data;
            if(widgetModel.needsectionheaders){
                var innerChoices;
                for (var i = IndexJL; i < choices.length ; i++) {
                    innerChoices = choices[i][1+IndexJL];
                    for (var j = IndexJL; j < innerChoices.length; j++)
					{
                        if(choices[i][1+IndexJL] && typeof(data) != "number" && choices[i][1+IndexJL].toLowerCase().indexOf("i18n.getlocalizedstring") != -1) 
                            choices[i][1+IndexJL] = eval(choices[i][1+IndexJL]);
                    }
                }
            }
            else{
                for (var i = IndexJL; i < choices.length ; i++) 
				{
                    if (choices[i][1+IndexJL] && typeof(choices[i][1+IndexJL]) != "number" && choices[i][1+IndexJL].toLowerCase().indexOf("i18n.getlocalizedstring") != -1)
                        choices[i][1+IndexJL] = eval(choices[i][1+IndexJL]);
                }
             }
        }
            return choices || [];
	},
	
	/** map : [[{Abbr:"A",Conti:"Asia"},{Abbr:"E",Conti:"Europe"},{Abbr:"NA",Conti:"North America"}],"Abbr","Conti" ]
	 *  choices : [["A","Asia"],["E","Europe"],["NA","North America"]]
	 */
	convertmap: function(map){
		
        var len = map.length;
        var key = map[len-2];
        var value = map[len-1];
        var innerMap = map[IndexJL]; 
        var choices = [];

        if(IndexJL == 1) //For lua  Array Semantics
            choices = [null];
		
        for (var i = IndexJL; i < (innerMap.length); i++) {
            var key1 = innerMap[i][key];
            var displayValue1 = innerMap[i][value];		
			var accessConfig = innerMap[i]['accessibilityConfig'];
            if (displayValue1 != "" && key1 != ""){ 
                if(IndexJL == 1) //For lua  Array Semantics
                    choices.push([null, key1, displayValue1]);
		else
                    choices.push(accessConfig ? [key1, displayValue1, accessConfig] : [key1, displayValue1]);
            }
        }
		return choices;
	},
	   
    // skin
    updateDOMSkin: function(widgetModel, newSkin, oldSkin)
	{
		var element = $KU.getNodeByModel(widgetModel);
		if(!element)	// element not rendered yet
			return;

		if(widgetModel.wType == "Phone" ){
			var childElement = element.childNodes[0];
			$KU.removeClassName(childElement, oldSkin);
			$KU.addClassName(childElement, newSkin);
		}
		if(widgetModel.wType == "Switch"){
			var switchOnElement = element.childNodes[0];
			var switchOffElement = element.childNodes[2];
			$KU.removeClassName(switchOnElement, oldSkin + 'on');
			$KU.removeClassName(switchOffElement, oldSkin + 'off');
			$KU.addClassName(switchOnElement, newSkin + 'on');
			$KU.addClassName(switchOffElement, newSkin + 'off');
		}
		// ?? Is this required?
		if(widgetModel.wType == "ScrollBox"){
			while(element.parentNode.id != widgetModel.pf +"_" + widgetModel.id + "_parent") {
				element = element.parentNode;
			}
		}
		$KU.removeClassName(element, oldSkin);
		$KU.addClassName(element, newSkin);	
    },
	
	// focusskin
    updateFocusSkin: function(widgetModel, type)
	{
		
        var focusskin = widgetModel[type];
		var focusskin2;
		if(widgetModel.wType === "TabPane")
			focusskin = widgetModel.activefocusskin;
        var classSelector,classSelector2;
		var wID = "#" + widgetModel.pf + "_" + widgetModel.id;
		
        switch (widgetModel.wType) {
            case "TextArea":
            case "RichText":
            case "TextField":
                classSelector = wID;
                break;
            case "RadioButtonGroup":
            case "CheckBoxGroup":
                classSelector = wID + ">div";
                break;
            case "DataGrid":
                classSelector = wID + " tbody tr";
                break;
            case "Segment":
                classSelector = wID + " [index]";
                break;
            case "Calendar":
                classSelector = wID;
                break;
			case "HStrip":
			case "IGallery":
				classSelector = wID + "_img";
				break
			case "TabPane":
				if(widgetModel.viewtype && (widgetModel.viewtype === 'tabview')){
					focusskin = focusskin + "lia";
					focusskin2 = widgetModel.activefocusskin + "li";
					classSelector = wID + "_Header li a";
					classSelector2 = wID + "_Header li";
				}else{
					 classSelector = wID + " div[active]";
				}
                break;
			case "MenuContainer":
				classSelector = wID + " .KMenu li > div";
				break;
			case "Link":
				if(kony.appinit.isIE10) { classSelector = wID + " a" };
				break;
            default:
                classSelector = wID;
        }
		var pseudo = (type == "focusskin" || type == "rowfocusskin") ? ":active" : ":hover";
	
	if( (!$KU.isBlackBerryNTH ) && ( widgetModel.wType == "TextArea"  || widgetModel.wType == "RichText" || widgetModel.wType == "TextField"))
			pseudo = ":hover";
                    
		classSelector += pseudo;
        this.applyStyle(focusskin, classSelector,widgetModel.wType);

		if(widgetModel.wType == 'MenuContainer') {
		    this.applyStyle(focusskin, wID + " .KMenu li td > div:hover",widgetModel.wType);
			
		}
		if(widgetModel.viewtype && (widgetModel.viewtype == 'tabview')){
			classSelector2 += pseudo;
			this.applyStyle(focusskin2, classSelector2);
		}
		
    },
	
    applyStyle: function(skin, classSelector, wType){
		
        var styleSheetObjs = window.document.styleSheets;
        var konyStyleSheetIndex = this.getKonyStyleSheetIndex(styleSheetObjs);
        if (konyStyleSheetIndex != -1) {
			var styleSheetObj = styleSheetObjs[konyStyleSheetIndex];
            var skinRuleIndex = this.getClassIndex(styleSheetObj, skin, wType);
			this.removeCSSRule(styleSheetObj, classSelector, wType);
            if (skinRuleIndex != -1) { 
				var rules = styleSheetObj.cssRules || styleSheetObj.rules;
                if(styleSheetObj.insertRule)
					styleSheetObj.insertRule(classSelector + "{" + rules.item(skinRuleIndex).style.cssText + "}", rules.length);
				else
					styleSheetObj.addRule(classSelector, rules.item(skinRuleIndex).style.cssText);
            }
            else {
                kony.print("Specified skin: " + skin + " is  not defined in kony.css");
            }
        }
        else {
            kony.print("Style class not found!");
        }
    },
	
	removeCSSRule: function(styleSheetObj, classSelector){
		var elementFocusRuleIndex = this.getClassIndex(styleSheetObj, classSelector);
		// If el rule already present remove it add focus rule, else add (new) focus rule
		if (elementFocusRuleIndex != -1){ 
			if(styleSheetObj.deleteRule)
				styleSheetObj.deleteRule(elementFocusRuleIndex);
			else	
				styleSheetObj.removeRule(elementFocusRuleIndex);
		}
		
	},
	
	getKonyStyleSheetIndex: function(styleObjs){
		var category = $KG["imagecat"];	
        for (var k = 0; k < styleObjs.length; k++) 
		{
            var hrefObj = styleObjs[k].href;
			if (hrefObj && hrefObj.indexOf("kony") != -1 && hrefObj.indexOf("konyspaiphoneretina") == -1) 
			{
				if(category)
				{
					if(hrefObj.match(category.substring(0,  category.length-1) + ".css"))
						return k;
				}
				else
					return k;
            }
        }
        console.warn("SPA Stylesheet could not be loaded");
        return -1;
    },
	
    getClassIndex: function(styleObj, className){
		
        if (className.indexOf("#") == -1) // ID selectors don't begin with .
            className = "." + className;
		var rules = styleObj.cssRules || styleObj.rules;	
        for (var k = 0; k < rules.length; k++) {
            if (rules[k].selectorText == className) {
                return k;
            }
        }
        return -1;
    },
  
    /**
     * Calculates the page height scrolled by the user with respect to the current view port.
     */
    getScrolledHeight : function()
    {
        var isNetScape = (navigator.appName.indexOf("Netscape") != -1);
        var scrolledHeight  = isNetScape ? pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
        return scrolledHeight;
    },

    /**
     * Retrieve the current view port height.
     */
    getViewPortHeight : function()
    {
        var isNetScape = (navigator.appName.indexOf("Netscape") != -1);
        var viewportHeight=isNetScape ? innerHeight : document.documentElement && document.documentElement.clientHeight ?document.documentElement.clientHeight : document.body.clientHeight;
        return viewportHeight;
    },

    /**
     *  Retrieve the current view port width.
     */
    getViewPortWidth : function()
    {
        var isNetScape = (navigator.appName.indexOf("Netscape") != -1);
        var viewportWidth = isNetScape ? innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
        return viewportWidth;
    },

    /**
     *  This function creates a Blocking UI using the skins specified against the selected element. i.e. the User clicked/selected
     *  widget ID.
     *
     */
    applyBlockUISkin:function(model)
    {
        
        var scrolledHeight = this.getScrolledHeight();
        var viewPortHeight = this.getViewPortHeight();
        var currentViewPortPosition = viewPortHeight + scrolledHeight - 15;
        viewPortHeight = viewPortHeight / 2 + scrolledHeight;
        
        var viewPortWidth = this.getViewPortWidth();
        viewPortWidth = viewPortWidth / 2;
        
        // Creating the block Div Placeholder. This will be added to the Body element so that the user can not perform
        // Any other action.

        var blockUIDivElement = document.createElement("div");
        blockUIDivElement.id = "blurDiv";
        blockUIDivElement.className = model.blockeduiskin;
        
        var height = window.innerHeight;
        var tempHeight = screen.availHeight;
        blockUIDivElement.style.backgroundImage = "none";
        
        // Adding the blocking UI Div placeholder as a child to the body element.
        document.body.appendChild(blockUIDivElement);
        
        var el = $KU.getElementById("blurDiv");
        
        blockUIDivElement.style.backgroundImage = "";
        var progressindicatorposition = $KU.getStyle(el,"font-family");
        var heightofimage = $KU.getStyle(el,"height");
        var widthofimage = $KU.getStyle(el,"width");
        heightofimage = heightofimage.replace("px", "");
        widthofimage = widthofimage.replace("px", "");
        blockUIDivElement.style.width = "100%";
		
		/*
        if (height > tempHeight) // Covering the entire screen for appmenu if the form height is less than view port height
        {
            blockUIDivElement.style.height = height + "px";
        }
        else {
            blockUIDivElement.style.height = tempHeight + "px";
        }
		*/
		
		var scrimHeight;
		if($KG["relativeScroll"])
		{
			// cover the entire portion
			var mainContainerHeight = document.getElementById("__MainContainer").clientHeight;
			if(mainContainerHeight < (window.innerHeight || document.body.clientHeight))
				scrimHeight = (window.innerHeight || document.body.clientHeight) + "px";
			else
				scrimHeight = mainContainerHeight + "px";
		}
		else
			scrimHeight = "100%";
		blockUIDivElement.style.height = scrimHeight;
		
        if (progressindicatorposition == "Helvetica") //For Centering the BlockUI image on top... top center
        {
            el.style.backgroundImage = "";
            if(widthofimage != "auto")
                el.style.backgroundPosition = (viewPortWidth - (widthofimage / 2)) + "px " + (scrolledHeight) + "px";
        }
        else if (progressindicatorposition == "Verdana") //For Centering the BlockUI image on middle... middle center
        {
            if(widthofimage != "auto")
                el.style.backgroundPosition = (viewPortWidth - (widthofimage / 2)) + "px " + (viewPortHeight - (heightofimage / 2)) + "px";
        }
        else //For Centering the BlockUI image on bottom... bottom center
        {
                // viewPortHeight=viewPortHeight*2;
            var yoffsetforbottom = this.getViewPortHeight() + scrolledHeight;
            if(widthofimage != "auto")
                el.style.backgroundPosition = (viewPortWidth - (widthofimage / 2)) + "px " + (yoffsetforbottom - heightofimage) + "px";
        }

    },

    /**
     * Remove the Block UI Skin element if it is placed on the form.
     */
    removeBlockUISkin: function(){
		
        var blockingPlaceHolder = $KU.getElementById("blurDiv");
        blockingPlaceHolder && blockingPlaceHolder.parentNode.removeChild(blockingPlaceHolder);
    },

    setProgressIndicator: function(node, model) {
		var progressdivcontainer = $KU.getElementById("__progressdiv");
    	if(progressdivcontainer)
    	    progressdivcontainer.parentNode.removeChild(progressdivcontainer);
		var konymodel = $KU.getModelByNode(node);
		var skin = (model && model.skin) || (konymodel && konymodel.skin);
    	var progressdiv = document.createElement('div');
		progressdiv.setAttribute('id', '__progressdiv');
		progressdiv.setAttribute("progressindicator", "true");
		progressdiv.setAttribute("progressskin", skin);
    	progressdiv.setAttribute('style','width:'+node.clientWidth+'px'+';height:'+node.clientHeight+'px'+';position:absolute;opacity:0.6;');
    	return progressdiv;
    },

	updateNormalImage: function(model) 
	{
		var node = $KU.getNodeByModel(model);
		if(!node || !model.backgroundimage)
			return;
		
		// get bg style
		var backgroundimage = model.backgroundimage;
		var style = $KW.Utils.getNormalImageStyle(model);
		// lua index starts from 1
		if(backgroundimage.index)
			node = document.querySelectorAll("#" + node.id)[backgroundimage.index-1];
		
		var imagesrc = $KU.getImageURL(backgroundimage.imageurl);
		$KU.imagePreloader(imagesrc,function(node,style) 
		{
			return function(event) 
			{
				event = event || window.event;
				var srcElement = event.target || event.srcElement;
				
				var model = $KU.getModelByNode(node);
				var backgroundimage = model.backgroundimage;
				
				if(event.type == "error")
				{
					if(backgroundimage.imagewhenfailed)
					{
						var imagesrc = $KU.getImageURL(backgroundimage.imagewhenfailed);
						var heightwidth = backgroundimage.heightwidth;
						node.style.background = "url(" + imagesrc + ") no-repeat center center";
						
						if(heightwidth)
						{
							//node.style.width = heightwidth[2] + 'px';
							node.style.height = heightwidth[1] + 'px';
						}
						return;
					}
				}

				node.setAttribute('style', style);
				// Restore display state
				node.style.display = (model.isvisible ? "" : "none");
				
				if(backgroundimage && backgroundimage.maintainaspectratio)
				{
					var naturalHeight = srcElement.naturalHeight || srcElement.height;
					var naturalWidth = srcElement.naturalWidth || srcElement.width;
					var aspectratio = naturalWidth / naturalHeight;
					if(!isNaN(aspectratio))
					{
						node.setAttribute('aspect-ratio', aspectratio);
						var width = node.clientWidth;
						var newHeight = Math.round(1 / aspectratio * width);
						node.style.height = newHeight + 'px';
					}
				}
			}
		}(node,style));
    },

	/*
		- If landscape image is provided, image will scale "without" distortion in portrait mode.		
		- If portrait image is provided, image will scale "with" distortion in landscape mode (aspect ratio is maintained).
		- In case of retina (2x portrait image), 2x effect will be produced in portrait mode. In landscape mode, 1.3x effect can be seen.
		- If maintainaspectratio is not specified, the image remains fixed in size in portrait and landscape modes and will not be scaled.
	*/
    getNormalImageStyle: function(model) 
	{
		var style = '';
		var backgroundimage = model.backgroundimage;
        if(backgroundimage){
		var maintainaspectratio = backgroundimage.maintainaspectratio;
		var heightwidth = backgroundimage.heightwidth;
		var imagesrc = $KU.getImageURL(backgroundimage.imageurl);
		style += 'background-image: url('+imagesrc+'); background-repeat: no-repeat; ';
        }
		if(maintainaspectratio)
			style += 'background-size:contain; ';
		
		if(heightwidth) 
			style += (maintainaspectratio ? '' : ' width:' + heightwidth[2] + 'px;') + 'height:' + heightwidth[1] + 'px;';
		return style;
    },
	
    convertPhoneAlphabetToNumber:function(input){
        var inputlength = input.length;
        input = input.toLowerCase();
        var phonenumber = "";
        for (var i = 0; i < inputlength; i++) {
            var character = input.charAt(i);
            if(phonenumber.length > 10)
                break;
            switch(character) {
                case '0':
                    phonenumber+="0";
                    break;
                case '1':
                    phonenumber+="1";
                    break;
                case '2':
                    phonenumber+="2";
                    break;
                case '3':
                    phonenumber+="3";
                    break;
                case '4':
                    phonenumber+="4";
                    break;
                case '5':
                    phonenumber+="5";
                    break;
                case '6':
                    phonenumber+="6";
                    break;
                case '7':
                    phonenumber+="7";
                    break;
                case '8':
                    phonenumber+="8";
                    break;
                case '9':
                    phonenumber+="9";
                    break;
                /*case '-':
                    phonenumber+="-";
                    break;*/
                case  'a': case 'b': case 'c':
                    phonenumber+="2";
                    break;
                case  'd': case 'e': case 'f':
                    phonenumber+="3";
                    break;
                case  'g': case 'h': case 'i':
                    phonenumber+="4";
                    break;
                case  'j': case 'k': case 'l':
                    phonenumber+="5";
                    break;
                case  'm': case 'n': case 'o':
                    phonenumber+="6";
                    break;
                case  'p': case 'q': case 'r': case 's':
                    phonenumber+="7";
                    break;
                case  't': case 'u': case 'v':
                    phonenumber+="8";
                    break;
                case  'w': case 'x': case 'y': case 'z':
                    phonenumber+="9";
                    break;
            }
        }
        return phonenumber;
    },
	
	// non-scrollable 
	scrollToElement: function(el, duration, startY, stopY)
	{			
		if(stopY == undefined && (el && (el.tagName == "INPUT" || el.tagName == "SELECT" || el.tagName == "TEXTAREA"))){
			try
			{
				el.focus();
			}
			catch(e){}
			return;
		}
		var elemDim = el && el.getBoundingClientRect();	/* Scroll only if the element is not present in the viewport. */		
		if(!(elemDim && elemDim.top >= 0 && elemDim.bottom <= (window.innerHeight || document.documentElement.clientHeight))){
		
			var displacement, start, end, delta, isForward = true;		
			if(!duration) 
				duration = 1000; // 1s
			if(!startY)
				startY = document.body.scrollTop;
			if(!stopY)
				stopY = (el && $KW.Utils.getOffset(el).top) || 0;
		
			start = startY;
			end = stopY;
			displacement = stopY - startY;
			
			if(Math.abs(displacement) < 50)
			{
				window.scrollTo(0, end);
				try
				{
					el && el.focus();
				}
				catch(e){}
				return;
			}
		
			// calculate delta
			delta = Math.round((displacement * 100) / duration);
			if(startY >= stopY)
				isForward = false;
			
			var timerId = setInterval(function(isForward, start, end, delta){
					return function()
					{
						start = start + delta;
							
						// Reached dest
						if((!isForward && start <= end) || (isForward && start >= end))
						{
							window.scrollTo(0, end);
							try
							{
								el && el.focus();
							}
							catch(e){}
							clearInterval(timerId);
							return;
						}
						window.scrollTo(0, start);
					}
			}(isForward, start, end, delta), 100);
		}
	},
	
	
	getOffset: function(el) {
	
		var left = el.offsetLeft,
			top = el.offsetTop;
			
		while (el = el.offsetParent) 
		{
			left += el.offsetLeft;
			top += el.offsetTop;
		}

		return { left: left, top: top };
	},
	
	initializeTemplateGestures: function(){
		if($KG.gestureTemplates){
			for(var i = IndexJL; i < $KG.gestureTemplates.length; i++) {
				window[$KG.gestureTemplates[i]] && $KW.Utils.initializeGestures(window[$KG.gestureTemplates[i]]);
			}
		}
	},
	
	// Gesture helper funtions
	// widgetModel.gesture = {TAP: {instance: "", params:{}, closure:{}}, SWIPE: {}, LONGPRESS:{}}
	initializeGestures: function(formModel)
	{
		for(var child in formModel)
		{
			var widgetModel = formModel[child];
			if(!widgetModel || typeof widgetModel != "object" || $KU.isArray(widgetModel) || widgetModel.id == formModel.id)
				continue;
			
			// Loop through each child model of the form and add gesture again
			var gestures = widgetModel.gestures;
			if(gestures)
			{
				for(var k in gestures)
				{
					var gesture = gestures[k];
					if(gesture){
						$KW.Utils.removegesture(widgetModel, gesture.gestureType, false);
						new $KW.touch.gesture(widgetModel, gesture.gestureType, gesture.gestureObj, gesture.callback);
					}
				}
			}
		}
		var formGestures = formModel.gestures;
		if(formGestures)
		{
			for(var k in formGestures)
			{
				var gesture = formGestures[k];
				if(gesture){
					$KW.Utils.removegesture(formModel, gesture.gestureType, false);
					new $KW.touch.gesture(formModel, gesture.gestureType, gesture.gestureObj, gesture.callback);
				}
			}
		}
	},
	
	updateModelWithGesture: function(widgetModel, gestureType, gestureObj, callback)
	{
		// update model
		if(!widgetModel)
			widgetModel = $KG;
		if(!widgetModel.gestures)
			widgetModel.gestures = {};
		var _gestureType = (gestureType == 1 ? (gestureObj.taps == 1 ? 10: 11) : gestureType);
		widgetModel.gestures[_gestureType] = {gestureObj:gestureObj, callback:callback, gestureType:gestureType};
	},
	
	removegesture: function(widgetModel, gestureType, updateModel)
	{
		if(widgetModel.gestures && widgetModel.gestures[gestureType] && widgetModel.gestures[gestureType]["instance"])
			widgetModel.gestures[gestureType]["instance"].removeGesture(gestureType, updateModel);
	},


    scrollInterface : (function(){
        var global = this;
        var notSetUp = true;
        var readScroll = {
            scrollLeft:NaN,
            scrollTop:NaN,
            clientHeight:NaN,
            clientWidth:NaN
        };
        var readScrollX = 'scrollLeft';
        var readScrollY = 'scrollTop';
        var readClientH = 'clientHeight';
        var readClientW = 'clientWidth';

        var itrface = {
            getScrollX:function(){
                return readScroll[readScrollX];
            },
            getScrollY:function(){
                return readScroll[readScrollY];
            },
            getClientH:function(){
                return readScroll[readClientH];
            },
            getClientW:function(){
                return readScroll[readClientW];
            }
        };

        function setUp(){
            if(typeof global.pageXOffset == 'number'){
                readScroll = global;
                readScrollY = 'pageYOffset';
                readScrollX = 'pageXOffset';
                readClientH = 'innerHeight';
                readClientW = 'innerWidth';
            }else{
                if((typeof document.compatMode == 'string')&&
                    (document.compatMode.indexOf('CSS') >= 0)&&
                    (document.documentElement)&&
                    (typeof document.documentElement.scrollLeft=='number')){
                    readScroll =  document.documentElement;
                }else if((document.body)&&
                    (typeof document.body.scrollLeft == 'number')){
                    readScroll =  document.body;
                }
            }
            notSetUp = false; //No need to repeat configuration.
        }
        return (function(){
            if(notSetUp){ //If the - notSetUp - variable is still true.
                setUp();  //Execute the - setUp - function.
            }
            return itrface; //returns a reference to - itrface
        });
    })()(),

    handleLayout: function(container, boxModel, layoutData) {
        var context = container.context;
        var tabpaneID = context.tabpaneID; //Save tabpaneID and set back to context once the template is rendered since tabpaneID shouldn't be passed
        context.container = container;
        context.template_generator = boxModel;
        context.tabpaneID = "";
        if(!boxModel.pf) {
            _konyConstNS.Form2.addHeaderorFooter.call(boxModel, boxModel);
        }
        boxModel.isTemplate = true; //This gets used in HBox render method
        var clonedBoxModel = owl.deepCopy(boxModel);
        $KW.Utils.updateLayoutData(container, clonedBoxModel, layoutData);
        context.setTopLevelBox(true);
        var htmlString = $KW[clonedBoxModel.wType].render(clonedBoxModel, context);
        context.setTopLevelBox(false);
        context.tabpaneID = tabpaneID;
        context.container = "";
        context.template_generator = "";
        return htmlString;
    },


    belongsToSegment: function(element) {
        var checkSegment = document.getElementById([element.getAttribute('kformname'),element.getAttribute('kcontainerID')].join('_'));
        return checkSegment && (checkSegment.getAttribute('kwidgettype') == 'Segment');
    },
	
	setScrollWidth: function(widgetModel, element){
		var scroller = (widgetModel.scrollbar == "arrows") ? element.childNodes[1] : element.childNodes[0];

		scroller.style.width = (scroller.clientWidth - parseInt($KU.getStyle(element, "padding-right").replace("px", ""), 10) - parseInt($KU.getStyle(element, "padding-left").replace("px", ""), 10)) + "px";	
		var scrollerInstance = $KG[widgetModel.pf + "_" + widgetModel.id + "_scroller"];
		scrollerInstance && scrollerInstance.refresh();			
	},

    getTemplateByContainerModelAndRowData: function(model, rowdata, isSection, index) {
        if(model.wType == "MenuContainer") {
            return rowdata.template || model.menutemplate;
        } else if(model.wType == "Segment") {
		    if(isSection) {
			    return model.sectionheadertemplate;
			} else {
                return rowdata.template || model.rowtemplate;
			}
        } else if(model.wType == "DataGrid") {
            if(model.selectedIndex >= IndexJL){
				var colConfig = model.columnheadersconfig[model.selectedcellindex[0]];				
				if(index == '0'){
					return colConfig.columnheadertemplate.template;
				}
				return colConfig.columndatatemplate;
			}
        }
    },

    getRowDataByContainerModelAndIndex: function(model, index) { //index is an array
        if(model.wType === "MenuContainer") {
            return $KW.MenuContainer.getDetails(model, index, 'item');
        } else if(model.wType === "Segment") {
            return $KW.Segment.getRowDataByIndex(model, index);
        } else if(model.wType === "DataGrid") {
            //TODO::
        }
    },

    getIndexAttrNameByContainerModel: function(model) {
        if(model.wType === "MenuContainer") {
            return 'menuindex';
        } else if(model.wType === "Segment") {
            return 'index';
        } else if(model.wType === "DataGrid") {
            return 'index';
        }
    }
}

/**
 * This Context will be needed to pass widget specific information that is required while rendering the widget.
 * 
 */
$KW.WidgetGenerationContext = function(formID)
{
    this.formID = formID;
    this.topLevelBox = null;    
}

$KW.WidgetGenerationContext.prototype.setTopLevelBox = function(topLevel)
{
    this.topLevelBox = topLevel;

};

$KW.unLoadWidget = function() {
    
        /**
         *  This calls the unload event on the selected widget.
         */
        var progressnode=document.querySelector('[selected="progress"]') || document.querySelector('[selected="progressindtr"]');
        if(progressnode)
        	progressnode.removeAttribute("selected");
        progressnode=document.querySelector('[progressindicator="true"]');
        if(progressnode)
        	progressnode.parentNode.removeChild(progressnode);
        $KW.Utils.removeBlockUISkin()
        var selectedItem = $KG[kony.constants.SELECTED_ITEM];        
        if (selectedItem) {
            var selectedWidget = $KU.getElementById(selectedItem.kWidgetID);
            var widgetEventHandler = selectedItem.kEventHandler;            
             widgetEventHandler && widgetEventHandler(selectedWidget)
        }      
        // Remove the selected Item from globals.
        delete $KG[kony.constants.SELECTED_ITEM];
};

/*
 * Widget : Dummy Implementations for widgets which are not supported
 */
$KW.Camera =
{	
    render : function(widgetID, context)
    {
        return "";
    }
}
$KW.Advertisement =
{	
    render : function(widgetID, context)
    {
        return "";
    }
}
/* Slider is implemented from 5.0
$KW.Slider =
{	
    render : function(widgetID, context)
    {
        return;
    }
}
*/
$KW.SeatMap =
{	
    render : function(widgetID, context)
    {
        return "";
    }
}
$KW.MenuItem =
{	
    render : function(widgetID, context)
    {
        return "";
    }
}

$KW.TPW = {
	render : function(widgetModel, context) {
        var html = "";
		if(typeof widgetModel == 'object')
		{
			$KU.addThirdPartyMeta({id:widgetModel.pf+'-'+widgetModel.id+'_tpwPlaceHolder', tpwModel:widgetModel});
			var tpwidgettype = $KU.getWidgetTypeByNameSapce(widgetModel.widgetName);
			var computedSkin = $KW.skins.getWidgetSkin(widgetModel, context) + " " + $KW.skins.getMarPadAdjustedContainerWeightSkin(widgetModel, 100);
            var marginpaddingvisible = "";
            marginpaddingvisible += $KW.skins.getMarginSkin(widgetModel,context)+" "+$KW.skins.getPaddingSkin(widgetModel);
			//html += "<div class='kwt"+widgetModel.containerweight+" ktable'>";
			//html += "<div class='krow'>";
			if(widgetModel.isvisible == false || !widgetModel.isvisible == "false" || widgetModel.isVisible == false || !widgetModel.isVisible == "false")
                marginpaddingvisible += "display:none;";
            html += "<div id='"+widgetModel.pf+"-"+widgetModel.id+"_tpwPlaceHolder' class='"+computedSkin+"' tpwidgettype='"+tpwidgettype+"' style='"+marginpaddingvisible+"'></div>";
			//html += "</div></div>";
			return html;
		}
	},
	
	renderWidget : function(formOrPopup) {
		if($KG.thirdPartyWidgetsMeta)
		{
			for(var key in $KG.thirdPartyWidgetsMeta) {
				var placeholder = document.getElementById($KG.thirdPartyWidgetsMeta[key].id);
				//Checking for third party widgets related to the current form
				if(placeholder && $KG.thirdPartyWidgetsMeta[key].tpwModel.pf == formOrPopup)
				{
					var tpwModel = $KG.thirdPartyWidgetsMeta[key].tpwModel;
					var nsArr = tpwModel.widgetName.split('.');
					var namespace = window;
					for(var j=0; j<nsArr.length; j++) {
						namespace = namespace[nsArr[j]];
					}
					if(namespace && typeof namespace['initializeWidget'] == 'function') {
						namespace['initializeWidget'](placeholder, tpwModel);
					} else {
						//console.log('*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$* --  '+'Function '+tpwModel.widgetName+' not found.'+'  -- *$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*');
					}
				}
			}
		}
	}
};

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (obj, fromIndex) {
    if (fromIndex == null) {
        fromIndex = 0;
    } else if (fromIndex < 0) {
        fromIndex = Math.max(0, this.length + fromIndex);
    }
    for (var i = fromIndex, j = this.length; i < j; i++) {
        if (this[i] === obj)
            return i;
    }
    return -1;
  };
}