kony.model = {
    /**
     *  Updates the Model & DOM
     *  a.  formid.widgetid.widgetprop  - For all the normal widgets with flattened hierarchy
     *  b.  formid.tabpaneid.widgetid.widgetprop - For all the widgets in the tab
     *  c.  app.headers.topbox.widgetid.widgetprop - For widgets in the headers & footers.
     */
    update: function(model, prop, value){
    
        if (model == undefined || model == null) {
            kony.print("kony.model.update:Error in Model,value is undefined or null");
            return;
        }
        if (model["wType"] == undefined || (model[prop] && model[prop]["wType"])) {
            model[prop] = value;
        }
        else {
            var widgetModel = model;
			var wType = widgetModel.wType;
			if(wType == "TPW")
			{
				var nsArr = widgetModel.widgetName.split('.');
				var namespace = window;
				for(var j=0; j<nsArr.length; j++) {
					namespace = namespace[nsArr[j]];
				}
				namespace["modelChange"] && namespace["modelChange"](model, prop, value);
			}
			else
			{		
				var oldValue = widgetModel[prop];            
				$KI.i18n && $KI.i18n.checkI18nStatus(widgetModel, prop);
				widgetModel[prop] = value; 
				this.updateView(widgetModel, prop, value, oldValue);
			}
        }
    },
	
	updateView: function(widgetModel, propertyName, propertyValue, oldPropertyValue){
	
		var element;
		if(widgetModel.wType == "Form")
			element = document.getElementById(widgetModel.id);	
		else if(widgetModel.wType == "ScrollBox")
			element = document.getElementById(widgetModel.pf + "_" + widgetModel.id + "_parent");			
		else
			element = $KU.getNodeByModel(widgetModel);
		
		if(!element )
			element = document.getElementById(widgetModel.pf + "_" + widgetModel.id+"_Body"); //for tabview Tabpane.
	
		switch (propertyName) 
		{
            case "skin":
				if(widgetModel.wType == "Form")
				{
					var formNode;
					if(!$KG.needScroller && !$KU.isBlackBerryNTH)
						document.body.className = propertyValue || "";
					else if($KU.isBlackBerryNTH)
						formNode = document.getElementById(widgetModel.id + "_container");
					else
						formNode = document.getElementById(widgetModel.id + "_scroller");

					if(formNode)
					{
						$KU.removeClassName(formNode, oldPropertyValue);
						$KU.addClassName(formNode, propertyValue);
					}
				}
				else if(widgetModel.wType == "Tab")
					element = $KU.getElementById(widgetModel.pf + '_' + widgetModel.id + '_Body');

				if (element)
				{
					$KU.removeClassName(element, oldPropertyValue);
					$KU.addClassName(element, propertyValue);
											
					if(widgetModel.wType == "Line")
						$KW.Line.applySkin(element, propertyValue);
				}			
				else					
					$KW.Utils.updateDOMSkin(widgetModel, propertyValue, oldPropertyValue);

                break;

			case "focusskin":
			case "rowfocusskin":
			case "activefocusskin":
                $KW.Utils.updateFocusSkin(widgetModel, widgetModel.rowfocusskin ? "rowfocusskin" : "focusskin");
                break;	 
			

            case "isvisible":
                $KW.Widget.setvisibility(widgetModel, propertyValue);
                break;

			case "margin":
				if(element){
					$KW.skins.setMarginPadding(element, propertyName, widgetModel, propertyValue);
					if(widgetModel.wType == "ScrollBox"){
						var scrollerInstance = $KG[widgetModel.pf + "_" + widgetModel.id + "_scroller"];
						scrollerInstance && scrollerInstance.refresh();		
					}					
				}	
				break;
			
            case "padding":				
				if(widgetModel.wType == "Image")
					element = element.parentNode;
				if(element){
					element.style[propertyName] = $KU.joinArray(propertyValue, "% ") + "%";
					if(widgetModel.wType == "ScrollBox"){  //hack for setting padding for overflow:hidden div
						$KW.Utils.setScrollWidth(widgetModel, element);	
					}
					if(widgetModel.wType == "VBox" || widgetModel.wType == "HBox" ){  //hack for setting padding for Tab
						var currentMargin = element.style["margin"];
						//var currentMargin = getComputedStyle(element, null).margin;
						element.style["margin"] = "1px";
						setTimeout(function(){
							element.style["margin"] = currentMargin;
						},10);
						
					}
				}
            break;

            case "containerweight":               
                if(element)
				{	
					element = element.parentNode;
					if(widgetModel.wType == "Image")
					{
						element = element.parentNode; //<div class='kcell'><span><img></img><span></div>
					}      
					if(widgetModel.wType == "Slider")
					{
						element = element.parentNode.parentNode; //<div class='kcell'><div><div><img></img></div></div></div>
					}                                             
                    if(widgetModel.wType=="HStrip") 
                    {
                        if(element.parentNode.parentNode.parentNode && element.parentNode.parentNode.parentNode.className.indexOf("kcell")!=-1)
                        element=element.parentNode.parentNode.parentNode;
                    }                    
					$KU.removeClassName(element, "kwt"+oldPropertyValue);
					$KU.addClassName(element, "kwt"+propertyValue);
					
					//BUG: JSPFQA9065: added strictpercentage behaviour in 5.5, if it is true, when there is change in cwt we have to change width to dummy node.
					if($KG.appbehaviors.adherePercentageStrictly == true) {
						var parentmodel = kony.model.getWidgetModel(widgetModel.pf, widgetModel.parent);
						if(parentmodel && parentmodel.wType =="HBox") {
							$KU.removeClassName(element.parentNode.lastChild, "kwt"+parentmodel.dummyNodeWidth);
							parentmodel.dummyNodeWidth = $KW.HBox.getExtraNodeWidth(parentmodel);
							$KU.addClassName(element.parentNode.lastChild, "kwt"+parentmodel.dummyNodeWidth);
								
						}
					}					
					if(widgetModel.wType == "HStrip")
					{
						var row = element.parentNode; 
						if(row.childNodes.length == 1) 
							cell.style.display = "inline-block"; //changing display to occupy the allocated width.		
					}	
					else if(widgetModel.wType == "Switch")
					{
						(function(parentForm) {
							var delay = window.setTimeout(function() {
								$KW.Switch.adjustSwitchWidth(parentForm);
								$KW.Switch.adjustSwitchHeight(parentForm);
								window.clearTimeout(delay); delete delay;
							}, 0);
						})(widgetModel.pf);
					}
					else if(widgetModel.wType == "ScrollBox")
					{
						var parentId = element.childNodes[0].id;
						var scrollboxId = parentId.substring(0, parentId.lastIndexOf("_"));
						$KW.ScrollBox.adjustArrowPosition(scrollboxId);
					}
					else if(widgetModel.wType == "Slider") {						
						$KW[widgetModel.wType]["updateView"](widgetModel, "containerweight");						
					}										
				}
                var formModel = $KG.allforms[widgetModel.pf];
                // if template
                if(!formModel)
                    return;
                var parentModel = formModel[widgetModel.parent];
                if(parentModel && parentModel.wType == "ScrollBox")
                {
                    $KW.ScrollBox.recalculateScrollBoxWidth(parentModel);
                }
				break;
							
			case "backgroundimage":
				$KW.Utils.updateNormalImage(widgetModel);
				break;	
            
            case "contentalignment":
			    var cAlign = $KW.skins.getContentAlignment(widgetModel);
                if(element){
					element.style.textAlign = cAlign;
					if(widgetModel.wType == "Calendar" && $KU.isIE10 && element.firstChild){
						element.firstChild.style.textAlign = cAlign;
						var padd = element.firstChild.style.paddingRight;
						element.firstChild.className += " updateTextAlignment";
						window.setTimeout(function(){
							$KU.removeClassName(element.firstChild, 'updateTextAlignment');
							element.firstChild.style.paddingRight = padd;
						},100);					
					}
					if(widgetModel.wType == "Calendar" && $KU.isIE9 && element.firstChild){
					 	element.firstChild.value += "";
					}
				}			
                break;
				
				
				case "accessibilityConfig":
						if(element && widgetModel.wType == 'Link' || widgetModel.wType == 'Label')
							element = element.firstChild;
					if(!element || widgetModel.wType == "RadioButtonGroup" || widgetModel.wType == "CheckBoxGroup")	 return;
					
					$KU.addAriatoElement(element, propertyValue, widgetModel);
					
				break;
				
			default:	
				var wType = (widgetModel.wType == "Tab") ? "TabPane" : widgetModel.wType;
				var widget = $KW[wType];
				widget["updateView"] && widget["updateView"](widgetModel, propertyName, propertyValue, oldPropertyValue);
        }			
	
	}, 
    
    /**
     *  Retrieves the widget model for a given widget
     *  TODO - Provide only widget specific model and no child models.
     *
     */
	 
	 
	 getWidgetModel: function(formID, widgetID, immediateParentID){
        if (!formID) 
            return null;
        
        var formModel = kony.model.getWidgetRef(formID);         //this.appModel[formID];
        if (immediateParentID && formModel){
            if (widgetID) {
                var widgetModel = formModel[immediateParentID];
                return widgetModel[widgetID];
            }
        }
        
        if (widgetID && formID != widgetID) {
            var widgetModel = formModel[widgetID];
            return widgetModel;
        }
        
        return formModel;        
    },
    
	 

    
    getWidgetRef: function(widgetID) {

       var obj = $KG.allforms[widgetID];             
       if (obj && ["Form","Form2"].contains(obj.wType))
          return obj;
       else
          return ($KG[widgetID] || window[widgetID]);
       
    }
}