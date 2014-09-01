/* 
 * Widget : Line
 */
$KW.Line =
{

	initialize: function(){		    
		kony.events.addEvent("onorientationchange", "Line", this.resizeVLines);
    },
	
    initializeView: function(formId){
        $KW.Line.resizeVLines(formId);
    },

    updateView: function(widgetModel, propertyName, propertyValue, oldPropertyValue){
        var element = $KU.getNodeByModel(widgetModel);
		if(!element)
			return;
        
		switch(propertyName) 
		{
            case "thickness": 
                if(element.getAttribute("direction") != "V")
					element.style.borderTopWidth = propertyValue + "px";
				else
					element.style.width = propertyValue + "px";
				break;
        }
    },

    render: function(lineModel, context){
	
		var skins = $KW.skins.getWidgetSkinList(lineModel, context);
		//var bgColor = $KU.getCSSPropertyFromRule(lineModel.skin, 'color') || "black"; Reading all css rules is a performance issue
		var bgColor =  (lineModel.skin && this.getColor(lineModel.skin)) || 'black';
		
		var htmlString;		
		if(!context.vLine)
			htmlString = "<div" + $KW.Utils.getBaseHtml(lineModel, context) + "class='" + skins + "' style='border-top:" + lineModel.thickness + "px solid " + bgColor + ";" + $KW.skins.getMarginSkin(lineModel, context) + $KW.skins.getPaddingSkin(lineModel) + "'></div>";
		else
		{
			htmlString = "<div" + $KW.Utils.getBaseHtml(lineModel, context) + "class='" + skins + "' direction='V' style='background-color:" + bgColor + ";width:" + lineModel.thickness + "px;height:1px;margin:auto;" + /*$KW.skins.getMarginSkin(lineModel, context) +*/ $KW.skins.getPaddingSkin(lineModel)+ (context.ispercent === false ?  "display:inline-block" : "") + "'></div>"
		}
		
        return htmlString;
    },
	
	resizeVLines: function(formId)
	{
		// TODO: Dynamic sibling resizing
		var	vLineNodes = document.querySelectorAll("#" + formId + " div[kwidgettype='Line'][direction='V']");
		for (var i = 0; i < vLineNodes.length; i++){
			var vLineNode = vLineNodes[i];
			vLineNode.style.height = vLineNode.parentNode.clientHeight + "px";
		}
	},
	
	applySkin: function(element, skin)
	{
		var bgColor = (skin && this.getColor(skin)) || "black";
		if(element.getAttribute("direction") != "V")
			element.style.borderTopColor = bgColor;
		else
			element.style.backgroundColor = bgColor;
	},
	
	getColor:function(skin){
		if(!$KG['line' + skin]){ 
			var temp = document.createElement("div");
			temp.className = skin;		
			document.body.appendChild(temp);
			$KG['line' + skin] = $KU.getStyle(temp, "color");
			document.body.removeChild(temp);
		}
		return $KG['line' + skin];
	}
}