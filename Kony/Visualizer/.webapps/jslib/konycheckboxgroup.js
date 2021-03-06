/*
 * Widget : CheckBoxGroup
 */
 
$KW.CheckBoxGroup = {
   
   	initialize: function(){
    	kony.events.addEvent("change", "CheckBoxGroup", this.eventHandler);
    },

    updateView: function(widgetModel, propertyName, propertyValue, oldPropertyValue){
	
		var element = $KU.getNodeByModel(widgetModel);
        switch (propertyName) {
            case "masterdatamap":
            case "masterdata":
                var data = $KW.Utils.getMasterData(widgetModel);
                widgetModel.selectedkeys && $KW.Utils.setSelectedValueProperty(widgetModel, data, "selectedkeys");
                if (element) {
                    element.innerHTML = this.generateList(widgetModel, data, widgetModel.context);
                    $KU.toggleVisibilty(element, data, widgetModel);
                }
            break;
                
            case "selectedkeys":
				var choices = document.querySelectorAll("#" + widgetModel.pf + " input[name='" + widgetModel.id + "']");
				 if (choices.length > 0) {
					for (var i = 0; i < choices.length; i++) {
						if ($KU.inArray(widgetModel.selectedkeys, choices[i].value)[0]) 
							choices[i].checked = true;
						else 
							choices[i].checked = false;
					}
					$KW.Utils.setSelectedValueProperty(widgetModel, $KW.Utils.getMasterData(widgetModel), "selectedkeys");
                }
            break;  

			case "viewtype":
					widgetModel.propertyName = propertyValue;
					var data = $KW.Utils.getMasterData(widgetModel);									
					if (element) {
						element.innerHTML = this.generateList(widgetModel, data, widgetModel.context);
						$KU.toggleVisibilty(element, data, widgetModel);
					}	
			break; 		

			case "checkedimage":
                var data = $KW.Utils.getMasterData(widgetModel);               			
                if (element) {
                    element.innerHTML = this.generateList(widgetModel, data, widgetModel.context);
                    $KU.toggleVisibilty(element, data, widgetModel);
                }				
			break; 	

			case "uncheckedimage":
                var data = $KW.Utils.getMasterData(widgetModel);               			
                if (element) {
                    element.innerHTML = this.generateList(widgetModel, data, widgetModel.context);
                    $KU.toggleVisibilty(element, data, widgetModel);
                }				
			break; 	    
			case "size":
                var data = $KW.Utils.getMasterData(widgetModel);               			
                if (element) {
                    element.innerHTML = this.generateList(widgetModel, data, widgetModel.context);
                    $KU.toggleVisibilty(element, data, widgetModel);
                }				
			break; 				                 	
        }
              
    },
    
    render: function(checkBoxModel, context){
		if(checkBoxModel.itemorientation) checkBoxModel.orientation = checkBoxModel.itemorientation;

        var data = $KW.Utils.getMasterData(checkBoxModel);        
        var skinArray = $KW.skins.getSplitSkinsBetweenWidgetAndParentDivForCBRB(checkBoxModel, context);
		var css = (context.ispercent === false ?  "" : skinArray[2]) + ((!$KW.Utils.isWidgetVisible(checkBoxModel, context) || data.length <= 0) ? " hide" : ""); 
		var widgetSkin = checkBoxModel.skin || "";
        var htmlString = "<div" + $KW.Utils.getBaseHtml(checkBoxModel, context) + "class = '" + css + " " + widgetSkin + "' style='" + $KW.skins.getMarginSkin(checkBoxModel, context) + $KW.skins.getPaddingSkin(checkBoxModel) + (context.ispercent === false ?  "display:inline-block" : "") + "'>";

        //if (checkBoxModel.itemorientation != constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL)
         // htmlString += "<p mode='wrap' class=\"" + skinArray[0] + "\">";
        checkBoxModel.context = context;

		if((checkBoxModel.viewtype == "tableview" || checkBoxModel.viewtype == "toggleview") && !kony.appinit.isIE8) {
			 htmlString += this.renderViews(checkBoxModel, data, context);
		}	
		else {
			htmlString += this.generateList(checkBoxModel, data, context);
		}

        
        
        //if (checkBoxModel.itemorientation != constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL) 
            //htmlString += "</p>";
        
        htmlString += "</div>";
        return htmlString;
    },

	renderViews : function (checkBoxModel, data, context) {
		var htmlString = "";
		if (data.length > IndexJL) {
			checkBoxModel.selectedkeys && $KW.Utils.setSelectedValueProperty(checkBoxModel, data, "selectedkeys");

			if(checkBoxModel.viewtype =="toggleview")
				htmlString+="<div class='ktable kwt100' style='border: 1px solid gray; border-radius: 10px; overflow: hidden; '>"
			
			for (var i = IndexJL; i < (data.length); i++) {
			if (data[i][IndexJL] != null && data[i][1+IndexJL] != null) {
					var selected = (checkBoxModel.selectedkeys && $KU.inArray(checkBoxModel.selectedkeys, data[i][IndexJL])[0]) ? "checked" : "";
					var skinArray = $KW.skins.getSplitSkinsBetweenWidgetAndParentDivForCBRB(checkBoxModel, context);
					var alignment="middleleftalign"; //added for checkbox alignment	
				if(checkBoxModel.viewtype =="tableview")
				{
					htmlString += "<div style = 'background: red; border: none; height: auto;' class =' kwt100 middleleftalign "+checkBoxModel.skin+"' >";
					var imgsrc;
					if(selected =="checked")
					{
						imgsrc="url(" + $KU.getImageURL(checkBoxModel.checkedimage) + ")"
					}
					else 
					{
						imgsrc="url(" + $KU.getImageURL(checkBoxModel.uncheckedimage) + ")"
					};		

					htmlString += "<input style='display : none;' id ='"+checkBoxModel.id+"_label"+i+"' class='"+alignment+"' kformname='" + checkBoxModel.pf + "' kwidgettype='" + checkBoxModel.wType + "' type='checkbox' " + selected + ($KW.Utils.isWidgetDisabled(checkBoxModel, context) ? " disabled='true'" : "") + " value='" + data[i][IndexJL] + "' name='" + checkBoxModel.id + "' style='  margin-right:3px;' />";

					htmlString += "<label class='kwt90'  name = '"+checkBoxModel.id+"_label' style=' position: relative; padding-left: 5px; vertical-align: middle; display: inline-block;'>"
					htmlString += data[i][1+IndexJL];		
					htmlString+= "</label>"
					
					htmlString += "<label class='kwt10 middlecenteralign' selected ='"+ selected +"'  for ='"+checkBoxModel.id+"_label"+i+"'  name = '"+checkBoxModel.id+"_label' style=' background-image: "+imgsrc+"; width: "+checkBoxModel.size+"px; height: "+checkBoxModel.size+"px; -webkit-background-size: 100%; background-size:100%; margin-right: 3px; margin-botom: 2px; vertical-align: middle; display: inline-block; '></label>"					
					htmlString += "</div>";	
					htmlString += "<div style='border-top: 1px solid gray'></div>";
				}
				else if(checkBoxModel.viewtype =="toggleview")
				{
					htmlString += "<div style = '  margin-right: 2px; border-right: 1px solid gray; height: auto;' class =' kcell  middlecenteralign "+checkBoxModel.skin+"' >";
					
					htmlString += "<input style='display : none;' id ='"+checkBoxModel.id+"_label"+i+"' class='"+alignment+"' kformname='" + checkBoxModel.pf + "' kwidgettype='" + checkBoxModel.wType + "' type='checkbox' " + selected + ($KW.Utils.isWidgetDisabled(checkBoxModel, context) ? " disabled='true'" : "") + " value='" + data[i][IndexJL] + "' name='" + checkBoxModel.id + "' style='  margin-right:3px;' />";

					htmlString += "<label class='' for ='"+checkBoxModel.id+"_label"+i+"'   name = '"+checkBoxModel.id+"_label' style=' position: relative; padding-left: 5px; vertical-align: middle; display: inline-block;'>"
					htmlString += data[i][1+IndexJL];		
					htmlString+= "</label>"		
					
					htmlString += "</div>";						
				
				}
			}					
			}
			if(checkBoxModel.viewtype =="toggleview")
			htmlString+="</div>"
		}
		return htmlString;
						
	},    
    
    generateList: function(checkBoxModel, data, context){
    	
		var htmlString = "";
		if (data.length > IndexJL) {
			checkBoxModel.selectedkeys && $KW.Utils.setSelectedValueProperty(checkBoxModel, data, "selectedkeys");
			
			for (var i = IndexJL; i < (data.length); i++) {
				if (data[i][IndexJL] != null && data[i][1+IndexJL] != null) {
					var selected = (checkBoxModel.selectedkeys && $KU.inArray(checkBoxModel.selectedkeys, data[i][IndexJL])[0]) ? "checked" : "";
					var skinArray = $KW.skins.getSplitSkinsBetweenWidgetAndParentDivForCBRB(checkBoxModel, context);
					var alignment="middlecenteralign"; //added for checkbox alignment
					if($KU.isAndroid && !$KU.isTablet)
					{
					 alignment="";   
					}
					if(checkBoxModel.viewtype == "customview" && !kony.appinit.isIE8)
					{
						if (checkBoxModel.itemorientation == constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL) {
							htmlString += "<div style = 'height: auto;" + (context.ispercent === false ?  "display:inline'" : "' class='" + skinArray[0] + "'") + ">";
						}
						else {
							htmlString += "<div style = ' display: inline-block; height: auto;' >";
						}
						
						var imgsrc;
						if(selected =="checked")
						{
							imgsrc="url(" + $KU.getImageURL(checkBoxModel.checkedimage) + ")"
						}
						else 
						{
							imgsrc="url(" + $KU.getImageURL(checkBoxModel.uncheckedimage) + ")"
						};
						
	                    htmlString += "<input style='display : none;' id ='"+checkBoxModel.id+"_label"+i+"' class='"+alignment+"' kformname='" + checkBoxModel.pf + "' kwidgettype='" + checkBoxModel.wType + "' type='checkbox' " + selected + ($KW.Utils.isWidgetDisabled(checkBoxModel, context) ? " disabled='true'" : "") + " value='" + data[i][IndexJL] + "' name='" + checkBoxModel.id + "' style='  margin-right:3px;' />";
						htmlString += "<label  selected ='"+ selected +"'  for ='"+checkBoxModel.id+"_label"+i+"'  name = '"+checkBoxModel.id+"_label' style=' background-image: "+imgsrc+"; width: "+checkBoxModel.size+"px; height: "+checkBoxModel.size+"px; -webkit-background-size: 100%; background-size:100%; margin-right: 3px; margin-botom: 2px; vertical-align: middle; display: inline-block; '></label>"
						htmlString += "<label   name = '"+checkBoxModel.id+"_label' style=' position: relative; padding-left: 5px; vertical-align: middle; display: inline-block;'>"
						htmlString += data[i][1+IndexJL];
						htmlString += (checkBoxModel.itemorientation == constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL) ? "</label><br/></div>" : "</div></label>&nbsp;";
					}
					else
					{
						var ariaString	= $KU.getAccessibilityValues(checkBoxModel, data[i][2+IndexJL], data[i][IndexJL]);
						var preventTextReadOut = "";
						if (ariaString.indexOf('aria-hidden')>0 )
						    preventTextReadOut = " aria-Hidden='true' ";

						if (checkBoxModel.itemorientation == constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL) {
							htmlString += "<div " + preventTextReadOut + " style = 'height: auto;" + (context.ispercent === false ?  "display:inline'" : "' class='" + skinArray[0] + "'") + ">";
						}
						else {
							htmlString += "<div " + preventTextReadOut + "style = ' display: inline-block; height: auto; text-decoration: inherit;' >";
						}						
						
						htmlString += "<input class='"+alignment+"' kformname='" + checkBoxModel.pf + "' kwidgettype='" + checkBoxModel.wType + "' type='checkbox' " + selected + ($KW.Utils.isWidgetDisabled(checkBoxModel, context) ? " disabled='true'" : "") + ariaString +  " value='" + data[i][IndexJL] + "' name='" + checkBoxModel.id + "' style='margin-right:3px;' />";
						htmlString += data[i][1+IndexJL];
						htmlString += (checkBoxModel.itemorientation == constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL) ? "<br/></div>" : "</div>&nbsp;";					
					
					}
				}
			}
		}
        return htmlString;

    },

	changeImage: function (target, checkBoxModel )  {
		
		var checksrc = "url(" + $KU.getImageURL(checkBoxModel.checkedimage) + ")";
		if(target.getAttribute("selected") == "checked") {		
			target.style.backgroundImage = "url(" + $KU.getImageURL(checkBoxModel.uncheckedimage) + ")";
			target.setAttribute("selected","");
		}else {
			target.style.backgroundImage =  "url(" + $KU.getImageURL(checkBoxModel.checkedimage) + ")";
			target.setAttribute("selected", "checked");		
		}
	},    
    
    eventHandler: function(eventObject, target){
    
        var checkGrp = target.parentNode.parentNode;
		var checkBoxModel = $KU.getModelByNode(checkGrp);

		if(target.getAttribute("checked")==="")
			target.removeAttribute("checked");
		else
			target.setAttribute("checked","");
		
        if (checkBoxModel) {
		
			if(!kony.appinit.isIE8 && eventObject.type == "click" &&  checkBoxModel.viewtype == "defaultview")
				return;
			if(checkBoxModel.viewtype=="customview" && !kony.appinit.isIE8 )
			{
				$KW.CheckBoxGroup.changeImage($KU.getNextSibling(target),checkBoxModel);
			}  
			if(checkBoxModel.viewtype=="tableview"  && !kony.appinit.isIE8) {
				$KW.CheckBoxGroup.changeImage($KU.getNextSibling($KU.getNextSibling(target)),checkBoxModel);
			}     
			if(checkGrp.getAttribute("kcontainerID")) 
				$KW.Utils.updateContainerData(checkBoxModel, target, false);
			else{
				var keys = checkBoxModel.selectedkeys || (IndexJL == 1 ? [null] : []);
				$KW.Utils.setSelectedKeys(checkBoxModel, target.checked, keys, target.value);			
				$KW.Utils.setSelectedValueProperty(checkBoxModel, $KW.Utils.getMasterData(checkBoxModel), "selectedkeys");
				var checkBoxHandlr = $KU.returnEventReference(checkBoxModel.onselection);
                checkBoxHandlr && checkBoxHandlr.call(checkBoxModel,checkBoxModel);

			}
        }
    }
}
