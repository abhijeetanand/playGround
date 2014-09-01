$KW.CheckBoxGroupViews = {

	  render: function(checkBoxModel, context){
		if(checkBoxModel.itemorientation) checkBoxModel.orientation = checkBoxModel.itemorientation;

        var data = $KW.Utils.getMasterData(checkBoxModel);        
        var skinArray = $KW.skins.getSplitSkinsBetweenWidgetAndParentDivForCBRB(checkBoxModel, context);
		var css = (context.ispercent === false ?  "" : skinArray[2]) + ((!$KW.Utils.isWidgetVisible(checkBoxModel, context) || data.length <= 0) ? " hide" : ""); 
		var widgetSkin = checkBoxModel.skin || "";
        var htmlString = "<div" + $KW.Utils.getBaseHtml(checkBoxModel, context) + "class = '" + css + " " + widgetSkin + "' style='" + $KW.skins.getMarginSkin(checkBoxModel, context) + $KW.skins.getPaddingSkin(checkBoxModel) + (context.ispercent === false ?  "display:inline-block" : "") + "'>";

        checkBoxModel.context = context;

		if((checkBoxModel.viewtype == "tableview" || checkBoxModel.viewtype == "toggleview") && !kony.appinit.isIE8) {
			 htmlString += this.renderViews(checkBoxModel, data, context);
		}	
		else {
			htmlString += this.generateList(checkBoxModel, data, context);
		}
        
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
						htmlString += "<div style ='border:none;height:auto;' class='kwt100 middleleftalign kheight' index='"+ data[i][IndexJL]+"' >";
						var imgsrc;
						if(selected =="checked")
						{
							imgsrc =  $KU.getImageURL(checkBoxModel.checkedimage)
						}
						else 
						{
							imgsrc =  $KU.getImageURL(checkBoxModel.uncheckedimage)						
						};		

						htmlString += "<label class='kwt90'  name = '"+checkBoxModel.id+"_label' kformname='" + checkBoxModel.pf + "' kwidgettype='" + checkBoxModel.wType + "'  style=' position: relative; padding-left: 5px; vertical-align: middle; display: inline-block;'>"
						htmlString += data[i][1+IndexJL];		
						htmlString += "</label>"
						htmlString += "<img  kformname='" + checkBoxModel.pf + "' kwidgettype='" + checkBoxModel.wType + "'  src= '"+imgsrc +"' style='float: right; margin-right: 10px' >"						
						htmlString += "</div>";	
						htmlString += "<div style='border-top: 1px solid gray'></div>";
					}
					else if(checkBoxModel.viewtype =="toggleview")
					{
						htmlString += "<div style ='margin-right:2px; border-right:1px solid gray;' class =' kcell kheight middlecenteralign' >";
						htmlString += "<div class='' kformname='" + checkBoxModel.pf + "' kwidgettype='" + checkBoxModel.wType + "'    style='  padding-left: 5px; vertical-align: middle; display: inline-block;'>"
						htmlString += data[i][1+IndexJL];		
						htmlString += "</div></div>"	
					}
				}					
			}
			if(checkBoxModel.viewtype =="toggleview")
			htmlString+="</div>"
		}
		return htmlString;
						
	}, 

	changeImage: function (target, widgetModel )  {
				
		if(target.getAttribute("checked") == "true") {		
			target.childNodes[1].src =  $KU.getImageURL(widgetModel.uncheckedimage);
			target.setAttribute("checked","false");
		}else {
			target.childNodes[1].src = $KU.getImageURL(widgetModel.checkedimage);
			target.setAttribute("checked", "true");		
		}

	},
	
	changeSkin : function(target, widgetModel ) {
	
		if(target.getAttribute("checked") == "true") {					
			target.setAttribute("checked","false");
			$KU.removeClassName(target, widgetModel.focusskin);	
			$KU.addClassName(target, widgetModel.skin);			
		}else {			
			target.setAttribute("checked", "true");		
			$KU.removeClassName(target, widgetModel.skin);				
			$KU.addClassName(target, widgetModel.focusskin);
	
		}	
	
	},

	eventHandlerViews : function(eventObject, target, widgetModel) {
		
        var checkGrp = target.parentNode.parentNode;		
		var checkedItem = target.parentNode;
		
        if (widgetModel) {

			if(widgetModel.viewtype=="tableview"  && !kony.appinit.isIE8) {
				$KW.CheckBoxGroupViews.changeImage(checkedItem ,widgetModel);
			}
			else {
				$KW.CheckBoxGroupViews.changeSkin(checkedItem ,widgetModel);
			
			}
			
			if(checkGrp.getAttribute("kcontainerID")) 
				$KW.Utils.updateContainerData(widgetModel, target, false);
			else{

				
				var keys = widgetModel.selectedkeys || (IndexJL == 1 ? [null] : []);
				$KW.Utils.setSelectedKeys(widgetModel, checkedItem.getAttribute("checked"), keys, checkedItem.getAttribute("index"));
				$KW.Utils.setSelectedValueProperty(widgetModel, $KW.Utils.getMasterData(widgetModel), "selectedkeys");				
				
				var checkBoxHandlr = $KU.returnEventReference(widgetModel.onselection);
                checkBoxHandlr && checkBoxHandlr.call(widgetModel,widgetModel);
			}
        }
	
	}	
}

// Utility Functions
function accessorDescriptor(field, fun) {
  var desc = { enumerable: true, configurable: true };
  desc[field] = fun;
  return desc;
}

function defineGetter(obj, prop, get) {
	if (Object.defineProperty)
		return Object.defineProperty(obj, prop, accessorDescriptor("get", get));
	if (Object.prototype.__defineGetter__)
		return obj.__defineGetter__(prop, get);

	throw new Error("browser does not support getters");
}

function defineSetter(obj, prop, set) {
	if (Object.defineProperty)
		return Object.defineProperty(obj, prop, accessorDescriptor("set", set));
	if (Object.prototype.__defineSetter__)
		return obj.__defineSetter__(prop, set);

	throw new Error("browser does not support setters");
}


// Globals
var vendor = (/webkit/i).test(navigator.userAgent) ? 'webkit' : (/firefox/i).test(navigator.userAgent) ? 'Moz' : 'opera' in window ? 'o' :( (/msie/i).test(navigator.userAgent) ||(/rv:([1][0-9])/i).test(navigator.userAgent) ) ? 'ms' : '' ;
var nextFrame =  window[vendor + 'RequestAnimationFrame'] || function(callback) {
				    return setTimeout(callback, 1);
				 };
var cancelFrame = window[vendor + 'CancelRequestAnimationFrame'] || clearTimeout;
$KU = kony.utils = {
	equals: function(arg1, arg2) {
		if(Object.prototype.toString.call(arg1) !== Object.prototype.toString.call(arg2)) {
			return false;
		} else if(Object.prototype.toString.call(arg1) === '[object Array]') {
			if(arg1.length !== arg2.length) {
				return false;
			}
			for(var i=0; i<arg2.length; i++) {
				if(!$KU.equals(arg1[i], arg2[i])) {
					return false;
				}
			}
			return true;
		} else if(Object.prototype.toString.call(arg1) === '[object Object]') {
			for(var k in arg2) {
				if(Object.prototype.toString.call(arg2[k]) !== '[object Function]') {
					if(!$KU.equals(arg1[k], arg2[k])) {
						return false;
					}
				}
			}
			return true;
		} else if(Object.prototype.toString.call(arg2)!=='[object Function]') {
			return (arg1 === arg2);
		}
	},

    isArray: function(value){        
		return ( Object.prototype.toString.call(value) === '[object Array]' );
    },
    
    addArray: function(srcArray, targetArray){
    	srcArray.push.apply(srcArray, targetArray);	
		return srcArray;
    },

	arrayIndex: function(arr, val) {
		for(var i=0; i<arr.length; i++) {
			if($KU.equals(arr[i], val)) {
				return i;
			}
		}
		return -1;
	},

    inArray: function(array, elem, noindex) {
		var index = -1;
        if (array) {
			index = $KU.arrayIndex(array, elem);
        }
        if(noindex) {
            return (index == -1) ? false : true;
        } else {
            return (index == -1) ? [false, -1] : [true, index];
		}
    },
	
	removeArray: function(arr)
	{
		var what, a= arguments, L= a.length, ax;
		while(L> 1 && arr && arr.length)
		{
			what= a[--L];
			while((ax= arr.indexOf(what))!= -1)
			{
				arr.splice(ax, 1);
			}
		}
		return arr;
	},
	
	joinArray: function(arr, seperator){
		seperator = seperator || ",";
		return arr[1 + IndexJL] + seperator + arr[2 + IndexJL] + seperator + arr[3 + IndexJL] + seperator + arr[0 + IndexJL];
	},

	mergeObjects : function(target, source) {
		var target = target || {};
		var empty = {};
		if (source) {
			var name, s;
			for (name in source) {
				s = source[name];
				if (empty[name] !== s) {
					target[name] = s;
				}
			}
		}
		return target; 
	},	
	
	convertObjectToArray: function(obj)
	{		
        var arr = [];
		for(var key in obj)  
		{
			arr[key] = obj[key];
		}
		return arr;
	},
    
    getkeys: function(anobject){
        return (Object.keys && Object.keys(anobject))|| (function(){
			var keylist = [];
			for (var i in anobject) {
				keylist.push(i);
			}
			return keylist;
		}());
    },

    getKey: function(obj, value) {
        for (var key in obj) {
            if(obj[key] === value) return key;
        }
    },

    adjustNodeIndex: function(node, startIndex, attr) { //startIndex is language based
        var rows = node.childNodes;
        startIndex = startIndex - IndexJL;
        startIndex = (rows.length > startIndex) ? startIndex : (rows.length-1);
        if (rows && rows.length > 0) {
            for (var i = startIndex; i < rows.length; i++) {
                rows[i].setAttribute(attr, i+IndexJL);
            }
        }
    },
    
    toggleVisibilty: function(node, data, model){
        if (data && data.length > 0 && model.isvisible) {
           	this.removeClassName(node, "hide");
        }
        else 
            this.addClassName(node, "hide");
    },

	// className
	removeClassNames: function(elem, selector){
		if(!elem)
			return;
		if(elem.tagName)
            elem = [elem];
        if(!elem.length)
            return;
		
		for(var i=0; i<elem.length; i++)
            $KU.removeClassName(elem[i], selector);
	},

	addClassNames: function(elem, selector){
		if(!elem)
			return;
		if(elem.tagName)
            elem = [elem];
        if(!elem.length)
            return;
		
		for(var i=0; i<elem.length; i++)
            $KU.addClassName(elem[i], selector);
	},

    removeClassName: function(elem, selector){
		if (elem.classList && selector) {
			elem.classList.remove(selector);
		}
		else if ($KU.hasClassName(elem, selector)) {
			var className = elem.className;
			elem.className = className.replace(new RegExp("(^|\\s+)" + selector + "(\\s+|$)"), ' ');
		}
    },
    
    hasClassName: function(elem, className){
		return (elem.classList && className) ? elem.classList.contains(className) : (elem.className.length > 0 && (elem.className == className || new RegExp("(^|\\s)" + className + "(\\s|$)").test(elem.className)));
    },

    addClassName: function(elem, className){
		if (elem.classList && className) {
			elem.classList.add(className);
		}
        else if (!$KU.hasClassName(elem, className))
            elem.className += (elem.className ? ' ' : '') + className;
    },
    
    getElementById: function(id, doc){
       return (typeof id == "string") ? ((doc || document).getElementById(id) || null) : null; 
    },
	
	getPosition: function(el) {
        var left = 0, top = 0, box = el.getBoundingClientRect();

        if(box) {
            left = box.left; top = box.top;
        }

        if(window.pageYOffset) {
            left += window.pageXOffset;
            top  += window.pageYOffset;
        } else if(el.ownerDocument.documentElement.scrollTop) {
            left += el.ownerDocument.documentElement.scrollLeft;
            top  += el.ownerDocument.documentElement.scrollTop;
        } else if(document.body.scrollTop) {
            left += document.body.scrollLeft;
            top  += document.body.scrollTop;
        }

        if(el.ownerDocument.documentElement.clientTop) {
            left -= el.ownerDocument.documentElement.clientLeft;
            top  -= el.ownerDocument.documentElement.clientTop;
        } else if(document.body.clientTop) {
            left -= document.body.clientLeft;
            top  -= document.body.clientTop;
        }

        return {top:top, left:left, bottom:top+el.offsetHeight, right:left+el.offsetWidth, width:el.offsetWidth, height:el.offsetHeight};
	},
	
	getAnchorPosition: function(widgetModel,anchorElement){
	
		var widgetContext = widgetModel.context;
		var leftPos = 0,topPos = 0;
		var contextElementPosition = $KU.getPosition($KU.getNodeByModel(widgetContext.widget));
		var bodyWidth = 0;
		var bodyHeight = 0;
		
		var documentBody = document.body;
		var documentHeight;
		if(document.height != undefined){
			documentHeight = document.height;
		}else{
			if(documentBody.scrollHeight != undefined && documentBody.offsetHeight != undefined){
				documentHeight = Math.max(documentBody.scrollHeight , documentBody.offsetHeight);	
			}else{
				documentHeight = documentBody.scrollHeight || documentBody.offsetHeight;
			}
		}
		
		if($KU.isMobile() == true && window.orientation != undefined) {
			if (window.orientation === 90 || window.orientation === -90){ // landscape
				bodyWidth = screen.height;
				bodyHeight = documentHeight;//screen.width;
			}
			if (window.orientation === 0 || window.orientation === 180){ // portrait
				bodyWidth = screen.width;
				bodyHeight = documentHeight;//screen.height;
			}
		}else{
				bodyWidth = screen.width;
				bodyHeight = screen.height;
		}
		
		if(widgetContext.anchor == "bottom"){
			if(contextElementPosition.bottom +anchorElement.offsetHeight > bodyHeight)
				topPos = contextElementPosition.bottom - (contextElementPosition.bottom +anchorElement.offsetHeight - bodyHeight);
			else
				topPos = contextElementPosition.bottom;
			
			if(contextElementPosition.left + anchorElement.offsetWidth > bodyWidth)
				leftPos = 0;
			else
				leftPos = contextElementPosition.left;
		}
		
		if(widgetContext.anchor == "top"){
			if(contextElementPosition.top - anchorElement.offsetHeight < 0)
				topPos = 0;
			else
				topPos = contextElementPosition.top - anchorElement.offsetHeight;
			
			if(contextElementPosition.left + anchorElement.offsetWidth > bodyWidth)
				leftPos = 0;
			else
				leftPos = contextElementPosition.left;
		}
		
		if(widgetContext.anchor == "right"){
			if (contextElementPosition.top + anchorElement.offsetHeight > bodyHeight)
				topPos = contextElementPosition.top - (contextElementPosition.top + anchorElement.offsetHeight - bodyHeight);
			else
				topPos = contextElementPosition.top;
				
			if(contextElementPosition.left + contextElementPosition.width + anchorElement.offsetWidth > bodyWidth){
					leftPos = contextElementPosition.left + contextElementPosition.width - (contextElementPosition.left + contextElementPosition.width + anchorElement.offsetWidth - bodyWidth) ;
				}else{
					leftPos = contextElementPosition.left + contextElementPosition.width;
				}
		}
		
		if(widgetContext.anchor == "left"){
			if (contextElementPosition.top + anchorElement.offsetHeight > bodyHeight)
				topPos = contextElementPosition.top - (contextElementPosition.top + anchorElement.offsetHeight - bodyHeight);
			else
				topPos = contextElementPosition.top;
				
			if(contextElementPosition.left - anchorElement.offsetWidth < 0){
				leftPos = 0;
				
			}else{
				leftPos = contextElementPosition.left - anchorElement.offsetWidth;
			}
		}
		return {leftPos:leftPos, topPos:topPos};
		
	},
	
    getNodeByModel: function(model){
        return model ? document.getElementById(model.pf + "_" + model.id) : null;
    },
	
    getElementID: function(id){
        return (id && typeof id == "string") ? id.substring(id.indexOf("_") + 1, id.length) : null;
    },
	
	getModelByNode: function(target) {
	    if(target == null)
            return;
		var widgetID = this.getElementID(target.getAttribute("id")); // id: formId_widgetId
		var tabPaneID = target.getAttribute("ktabpaneid");
		var formID = target.getAttribute("kformname");
		return kony.model.getWidgetModel(formID, widgetID, tabPaneID);
	},
	
	getScreenLevelWidgetModel : function(formModel)
	{
		//Returns model of first visible SLW in a form model.
		var screenlLevelWidgetModel;
		if(formModel['screenLevelWidgets'])
		{
			for(var slw in formModel['screenLevelWidgets']){
				if(formModel['screenLevelWidgets'][slw].isvisible){
					screenlLevelWidgetModel = formModel['screenLevelWidgets'][slw];
					break;
				}
			}
		}
		return screenlLevelWidgetModel;
	},
	
	getPullString: function(scroller)
	{
		//return	"<div id='pullDown' class='kcell' style='-webkit-transform:rotate(270deg);background:blue;display:table-cell;'>
		return	"<div id='pullDown'>\
					<span class='pullDownIcon'></span>\
					<span class='pullDownLabel'>Pull down to refresh...</span>\
				</div>";
	},	
	
	getPushString: function(scroller)
	{
		//return "<div id='pullUp' class='kcell' style='-webkit-transform:rotate(90deg);background:blue;display:table-cell;'>
		return "<div id='pullUp'>\
					<span class='pullUpIcon'></span>\
					<span class='pullUpLabel'>Pull up to refresh...</span>\
				</div>";
	},
	
	getModelByScroller: function(_scroller)
	{
		var srollbox = _scroller.substring(0, _scroller.lastIndexOf("_"));
		var scrollboxNode = $KU.getElementById(srollbox);
		return $KU.getModelByNode(scrollboxNode);
	},

    getNextSibling: function(node){
    	var x=node.nextSibling;
    	while (x.nodeType!=1)
    	  {
    	  x = x.nextSibling;
    	  }
    	return x;
    },
	
	/*
	//We can manipulate the DOM content only in the current form or in the current form header/footer
	canUpdateDOM: function(fModel, topContainer){
		if(fModel.headers){
			for(var i=0; i < fModel.headers.length; i++){
				if(fModel.headers[i].id == topContainer.id)
					return true;
			}
		}
		if(fModel.footers){
			for(var i=0; i < fModel.footers.length; i++){
				if(fModel.footers[i].id == topContainer.id)
					return true;
			}
		}
		return false;		
    },
	*/
	
    applyFade: function(elem, trans, dur){		    
        elem.style[vendor + 'AnimationDuration'] = dur + "ms";
        elem.style[vendor + 'AnimationName'] = trans;
		if (trans == "fadeIn") 
			elem.style.display = "";
		else {
			setTimeout(function(){
				elem.style[vendor + 'AnimationName'] = "none";	
				elem.style.display = "none";
				
			}, dur);
		}	        
    },
	
	getParentByAttribute: function(node, attribute){
        var cur = node;
        while (cur) {			
			var type = cur.getAttribute && cur.getAttribute(attribute);
            if (type) {
                return cur;                
            }
            cur = cur.parentNode;
        }	
	},
	
    getParentByTagName: function(node, localName){
		
        while (node && (node.nodeType != 1 || node.nodeName.toLowerCase() != localName)) 
            node = node.parentNode;
        return node;
        
    },
	
	getContainerForm: function(node){
		var containerId = node.getAttribute("kcontainerid");
		if(containerId){
			var cur = node;
			var id;
			while (cur) {
				id = cur.id && cur.id.split("_")[1];
				if (id == containerId && cur.getAttribute("kformname")) {
					return cur.getAttribute("kformname");                
				}				
				cur = cur.parentNode;
			}
		}
		return "";
	},
	
    cloneObj: function(srcInstance){
    
        if (typeof(srcInstance) != "object" || srcInstance == null) 
            return srcInstance;
        var newInstance = srcInstance.constructor();
        for (var i in srcInstance) 
		{
            if(srcInstance.hasOwnProperty(i))
				newInstance[i] = this.cloneObj(srcInstance[i]);
		}
        return newInstance;
    },

    returnEventReference: function(eventObj) {
        return typeof(eventObj) == 'function' ? eventObj : (typeof(eventObj) == 'string' ? window[eventObj] : undefined);
    },

    returnObjectReference: function(obj) {
        return typeof(obj) == 'object' ? obj : (typeof(obj) == 'string' ? window[obj] : undefined);
    },
		
	getBase64: function ( data ) {
	    // http://kevin.vanzonneveld.net
	    // +   original by: Tyler Akins (http://rumkin.com)
	    // +   improved by: Bayron Guevara
	    // +   improved by: Thunder.m
	    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	    // +   bugfixed by: Pellentesque Malesuada
	    // +   support for btoa by Arjun Variar.
        if (!data) return data;
		
        if ('btoa' in window)
			return window.btoa(unescape(encodeURIComponent(data)));

	    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc="", tmp_arr = [];
	 
	    do { // pack three octets into four hexets
	        o1 = data.charCodeAt(i++) & 0xff;
	        o2 = data.charCodeAt(i++) & 0xff;
	        o3 = data.charCodeAt(i++) & 0xff;
	
	        bits = o1<<16 | o2<<8 | o3;
	 
	        h1 = bits>>18 & 0x3f;
	        h2 = bits>>12 & 0x3f;
	        h3 = bits>>6 & 0x3f;
	        h4 = bits & 0x3f;
	 
	        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	    } while (i < data.length);
	    
	    enc = tmp_arr.join('');
	    
	    switch( data.length % 3 ){
	        case 1: enc = enc.slice(0, -2) + '==';
	          break;
	        case 2: enc = enc.slice(0, -1) + '=';
	          break;
	    }
	 
	    return enc;
	},
    
    //Valid formats mm/dd/yy and mm/dd/yyyy and dd/mm/yyyy		
    isValidDate: function(dtStr, format){
        var dEY = {};
		dtStr = dtStr.split('/');
		format = format.split('/');
		for(var i = 0, l = format.length; i < l; i++) { dEY[format[i]] = dtStr[i]; }
		var date = new Date(dEY.yyyy || ((dEY.yy * 1) + 2000), dEY.mm - 1, dEY.dd);
		if (Object.prototype.toString.call(date) === "[object Date]" && (date.getFullYear() == (dEY.yyyy || ((dEY.yy * 1) + 2000)) && date.getFullYear() >= 1900 && date.getFullYear() <= 2100 && date.getMonth() + 1 == dEY.mm && date.getDate() == dEY.dd)){
            return true;
        }else {			
			return false;
		}
    },	
	
    daysArray : function (n) {
		var y = new Date().getFullYear();
		for (var i = 1; i <= n; i++) {
			this[i] = new Date(y, n, 0).getDate();                
		}
		return this;
    },
	
    daysInFebruary: function(year){
        return new Date(year, 2, 0).getDate();
    },
	
    isInteger: function(s){
        var i;
        for (i = 0; i < s.length; i++) {
            // Check that current character is number.
            var c = s.charAt(i);
            if (((c < "0") || (c > "9"))) 
                return false;
        }
        // All characters are numbers.
        return true;
    },
    
    getInt : function(i){
        var n = parseInt(i);            
        return n == null || isNaN(n) ? 0 : n;
    },
    
    getDate: function(date, format){
        var dateObj;
        if (typeof date === "string" && typeof format === "string") {
            var dateParts = date.split("/");
            var yr = new Date().getFullYear().toString().substr(0, 2);
            if (format.indexOf("yyyy") == -1 || dateParts[2].length == 2) 
                dateParts[2] = yr + dateParts[2];
            
            if (format == "mm/dd/yyyy" || format == "mm/dd/yy") 
                dateObj = new Date(dateParts[0] + "/" + dateParts[1] + "/" + dateParts[2]);
            else 
                dateObj = new Date(dateParts[1] + "/" + dateParts[0] + "/" + dateParts[2]);
            
            return dateObj;
        }
    },
    
    getDayOfYear: function(day, month, year){
        return (Math.ceil((new Date(year, month - 1, day) - new Date(year, 0, 1)) / 86400000)) + 1;
    },
    
	// gesture utils
	getIntegerDirection: function(strDirection)
	{
		switch(strDirection)
		{
			case "LEFT":
				return 1;
			case "RIGHT":
				return 2;
			case "UP":
				return 3;	
			case "DOWN":
				return 4;
		}
	},
	
	getSwipeDirection: function(deltaX, deltaY)
	{
		// Calcualte angle
		var radians = Math.atan2(-deltaY, -deltaX); //radians
		var angle = Math.round(radians*180/Math.PI); //degrees

		//ensure value is positive
		if (angle < 0)
			angle = 360 - Math.abs(angle);
		
		var direction;

		if ((angle <= 45) && (angle >= 0))
			direction = $KW.touch.TouchContext.LEFT;
		else if ((angle <= 360) && (angle >= 315))
			direction = $KW.touch.TouchContext.LEFT;
		else if ((angle >= 135) && (angle <= 225))
			direction = $KW.touch.TouchContext.RIGHT;
		else if ((angle > 45) && (angle < 135))
			direction = $KW.touch.TouchContext.UP;
		else
			direction = $KW.touch.TouchContext.DOWN;
		
		return direction;
	},
	
	getDistanceMoved: function(deltaX, deltaY)
	{
		var absDeltaX = Math.abs(deltaX);
		var absDeltaY = Math.abs(deltaY);
		return (Math.round(Math.sqrt(Math.pow(absDeltaX, 2) + Math.pow(absDeltaY,2))));
	},
	
	isMobile: function()
	{
		if(navigator.userAgent.match(/Mobile/i) && (navigator.userAgent.match(/AppleWebKit/i) || navigator.userAgent.match(/Phone/i)))
			return true;
	},
	
	getPlatform: function()
	{
		if(!$KU.platform)
		{
			var platform = {};
			platform.name = $KU.getPlatformName();
			platform.version = $KU.getPlatformVersion(platform.name);
			$KU.platform = platform
		}
		return $KU.platform;
	},
	
	
	getPlatformName: function()
	{
        if($KU.isAndroid && $KU.isTablet)
            return "androidtablet";                 
		if($KU.isAndroid)
			return "android";
		if($KU.isiPhone)
			return "iphone";
		if($KU.isiPad)
			return "ipad";
		if($KU.isBlackBerryNTH)
			return "blackberryNTH";
		if($KU.isBlackBerry || $KU.isPlaybook)
			return "blackberry";
		if($KU.isTouchPad)
			return "webos";		
		if($KU.isWindowsPhone)
			return "windowsphone";
		if($KU.isWindowsTablet)
			return "windowstablet";
		/*
        if($KU.isPlaybook)
			return "playbook";
		*/
		if(!navigator.userAgent.match(/Mobile/i))
			return "desktop";
		else
			return "";
	},
	
	getPlatformVersion: function(name)
	{
		var ver = "";
		var userAgent = navigator.userAgent;
		switch(name)
		{
			case "android":
			case "androidtablet":
				userAgent.match(/Android ([0-9.]+)/);
				ver = RegExp.$1;
				break;
			case "iphone":
				userAgent.match(/iPhone OS ([0-9_]+)/);
				ver = RegExp.$1.replace(/_/g, ".");
				break;			
			case "ipad":
				userAgent.match(/CPU OS ([0-9_]+)/);
				ver = RegExp.$1.replace(/_/g, ".");
				break;
			case "blackberryNTH":
			case "blackberry":
				userAgent.match(/Version\/([0-9.]+)/);
				ver = RegExp.$1;
				break;
			case "windowsphone":
				userAgent.match(/(Windows Phone OS|Windows Phone) ([0-9]{1,}[\.0-9]{0,})/);
                ver = RegExp.$2;
				break;
			case "windowstablet":	// no OS ver returned, use IE ver
				userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
				ver = RegExp.$1;
				break;
			default:
				ver = 0;
		}
		return ver;
	},
	
	
	detectDevice: function()
	{
		var platform = $KU.getPlatform();
		var platformName = platform.name;
		var platformVersion = platform.version;

		// Native scroll currently supported only for BB NTH, WP 7.5
		/*
		if(platformVersion >= $KU.nativeScrollMatrix[platformName])
		{
			$KG.highEndDevice = true;
			$KG.nativeScroll = true;
		}
		*/
		
		if(platformName == "iphone" || platformName == "ipad")
		{
			$KU.iOS = true;
			if(platformVersion < "5")
				$KU.iOS4 = true;
		}
		
		var delay = $KU.orientationDelayMatrix[platformName];
		if($KU.isAndroid)
		{
			if($KU.isAndroid_SonyXPeria)
				delay = $KU.orientationDelayMatrix["SonyXPeria"];
			else if($KU.isAndroid_Galaxy && $KU.isMob){				
				if(window.devicePixelRatio && window.devicePixelRatio > 1.5)				
				delay = 500; //Increased delay to get correct innerHeight (Galaxy S3 & S4).Revert for a better solution!  04/12/13
				else
				delay = $KU.orientationDelayMatrix["GT"];				
				}
			else if($KU.isAndroid_Nexus)
				delay = $KU.orientationDelayMatrix["Nexus"];
		}
		$KU.orientationDelay = delay || 100;
		
		// TODO: temp fix until IDE adds this property
		if($KG["transitAll"] !== false)
			$KG["transitAll"] = true;
		
		if(platformName == "blackberryNTH")
		{
			$KG["nativeScroll"] = true;
			$KG["disableTransition"] = true;
		}
		else if(platformName == "windowsphone" && $KU.isIE9)
		{
			$KG["relativeScroll"]=true;
			//$KG.stickyScroll = true;
			$KG["disableTransition"]=true;
			$KG["transitAll"]= false;
		}

		// Override with user scroll options
		if($KG["useNativeScroll"])
		{
			$KG["relativeScroll"] = true;
			$KG["disableTransition"] = false;
			$KG["transitAll"] = false;
		}
		
		if($KG["nativeScroll"] || $KG["relativeScroll"])
			$KG["needScroller"] = false;
		else
		{
			$KG["needScroller"] = true;
			document.body.style.overflowY = "hidden";
		}
		
		//For IOS4 iphone, scrolling along with textarea/textfield, viewport is also scrolling.
		if($KU.isiPhone && $KU.getPlatformVersion("iphone").startsWith("4") && !$KG["relativeScroll"]) 
			$KG.disableViewPortScroll = true;
	},
	
	detectOrientation: function()
	{
		var orientation = window.orientation;
		if(typeof orientation == "undefined" && window.matchMedia){ //For browsers that don't support window.orientation.	 
			if(window.matchMedia("(orientation: portrait)").matches)
				orientation = "portrait";
			else if(window.matchMedia("(orientation: landscape)").matches)
				orientation = "landscape";				
			else
			orientation = "";
		}
		else{		
			switch (orientation) 
			{
				case 0:
				case 180:
					orientation = ($KU.isAndroid && $KU.isTablet) ? "landscape" : "portrait";
					break;
				case 90:
				case -90:
					orientation = ($KU.isAndroid && $KU.isTablet) ?  "portrait" : "landscape";
					break;	
			}
		}
		return orientation;
	},

	getBrowserLanguage: function()
	{
		var language;
		var httpheaders = kony.globals["httpheaders"];
		if(httpheaders && httpheaders["Accept-Language"])
			language = httpheaders["Accept-Language"].split(",")[0];
		else
			language = navigator.language || navigator.userLanguage || $KG["defaultlocale"];
		
		return language;
	},

	domRefresh: function(element) {
		if(element){
			var currentMargin = element.style["margin"];					
			element.style["margin"] = "1px";
			setTimeout(function(){
				element.style["margin"] = currentMargin;
			},10);
		}
	},
	
	convertjsontoluaobject: function(jsonobj) {
		
		var jsonstr = jsonobj;
		if( typeof jsonobj == "object") {
			jsonstr = JSON.stringify(jsonobj);
		}
		
		if (typeof jsonstr == "string" ) {
			obj1 = JSON.parse(jsonstr, function(key, value){
				if (value instanceof Array) {
					value.splice(0, 0, null);
				}
				return value
			});
			return obj1;
		} else 
		 return jsonobj;
	},
	
	getWindowWidth : function() {
		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    },
	
	getWindowHeight : function() {
				return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	},
	
	// scrollbar width
	getScrollBarWidth: function() 
	{
		var inner = document.createElement('p');
		inner.style.width = "100%";
		inner.style.height = "200px";

		var outer = document.createElement('div');
		outer.style.position = "absolute";
		outer.style.top = "0px";
		outer.style.left = "0px";
		outer.style.visibility = "hidden";
		outer.style.width = "200px";
		outer.style.height = "150px";
		outer.style.overflow = "hidden";
		outer.appendChild(inner);

		document.body.appendChild (outer);
		var w1 = inner.offsetWidth;
		outer.style.overflow = 'scroll';
		var w2 = inner.offsetWidth;
		if (w1 == w2) 
		w2 = outer.clientWidth;

		document.body.removeChild (outer);

		return (w1 - w2);
	},
	
	convertluatojsonobject: function(luaobj) {
		if (typeof luaobj == "object") {
			luastr = JSON.stringify(luaobj);
			obj2 = JSON.parse(luastr, function(key, value){
				if (value instanceof Array) {
					value.splice(0, 1);
				}
				return value
			});
			return obj2;
		} else
			return luaobj;
	},

	setImgAspectRatio: function(widgetModel, img){
		if(!img) return;
		if(!widgetModel.isvisible){
			var thisNode = $KU.getNodeByModel(widgetModel);
			$KU.removeClassNames(thisNode , 'hide');
			var explicitlyMadeVisible = true;
		}
		
		var nWidth = img.naturalWidth || img.width;
		var nHeight = img.naturalHeight || img.height;

		if(explicitlyMadeVisible){
			explicitlyMadeVisible = false;
			$KU.addClassNames(thisNode , 'hide');
		}
		var aspectRatio = nWidth / nHeight;
		if (!isNaN(aspectRatio) && (widgetModel.referencewidth || widgetModel.referenceheight)) {
			if (nWidth > widgetModel.referencewidth || nHeight > widgetModel.referenceheight) {
				var width  = (widgetModel.referencewidth && (nWidth > widgetModel.referencewidth)) ? widgetModel.referencewidth : nWidth;
				var height = widgetModel.referenceheight;
				var imgdim = ((width / aspectRatio) < height || !height) ? (width / aspectRatio) : false;
				if (imgdim == false) 
					width = (height * aspectRatio <= widgetModel.referencewidth || !widgetModel.referencewidth) ? height * aspectRatio : width;
				else 
					height = imgdim;
				img.style.height = height + "px";
				img.style.width = width + "px";
			}
		}		
	},

   
    imgLoadHandler: function(event,img){
    
        event = event || window.event;
        
		if(!kony.appinit.isIE7 && !kony.appinit.isIE8){
			img = event.target ? event.target : event.srcElement;
		}
        
        if(!img) return;
        
        var tabPaneID = img.getAttribute("ktabpaneid");
        var type = img.getAttribute("kwidgettype");
        var targetWidgetID = (type == 'Image') ? $KU.getElementID(img.getAttribute("id")) : img.getAttribute("id");
		var src;
        if (type != "Image") { //Strip or Gallery
            targetWidgetID = targetWidgetID.split("_")[1];
			src = img.src;
			src && (src = src.substring(src.lastIndexOf("/") + 1, src.length));
        }
		
		var widgetModel = kony.model.getWidgetModel(img.getAttribute("kformname"), targetWidgetID, tabPaneID);
		

        
		if(type == "Image")
			src = widgetModel.src;
			
        if (event.type == "load") {
			var isWaitAllowed = true;
            if ($KU.inArray($KU.imgCache, src, true)) 
                isWaitAllowed = false;
            else 
                $KU.imgCache.push(src);
			    
			if (type == "HStrip" || type == "IGallery") {
               
				if (widgetModel.imagescalemode == constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO) {
					$KU.setImgAspectRatio(widgetModel, img);
				}
			}
			
			if ( type == "IGallery") {
				img.style.display = "";
			 }
			 img.style.visibility = "visible";
             img.style.opacity = 1;
                
            if (isWaitAllowed || (img && img.parentNode && img.parentNode.style.background.indexOf("url") != -1)) {
                img.parentNode && (img.parentNode.style.background = "none");
                //#ifndef SPA
               // img.style[vendor + 'Transition'] = "opacity 500ms ease-in-out";
				//#endif
               // img.style.opacity = 1; //commenting 
            }
            
			if(type == "Image"){
				//#ifndef SPA
                //  $KW.Image.setBase64Img(widgetModel);
				//#endif
                if(widgetModel.scrollBoxID){
                    var scrollerID = widgetModel.pf + "_" + widgetModel.scrollBoxID + "_scroller";
                    var scrollerNode = $KU.getElementById(scrollerID);
					if(scrollerNode){
						scrollerNode.children[0].style.width = scrollerNode.children[0].scrollWidth + "px";
						var scrollerInstance = $KG[scrollerID];
						scrollerInstance && scrollerInstance.refresh();
					}
                }

                var ondownloadcompleteref = $KU.returnEventReference(img.getAttribute("ondownloadcomplete"));
                ondownloadcompleteref  && ondownloadcompleteref.call(widgetModel,widgetModel, src, true);
            }
        }
        else {//error
            img.onerror = "";
            img.style.opacity = 1;
			var imgParentNode = img.parentNode;
            imgParentNode && (imgParentNode.style.background = "none");
            if (type == "Image") 
                widgetModel.base64 = null;
            if (widgetModel.imagewhenfailed ) 
                img.src = $KU.getImageURL(widgetModel.imagewhenfailed);
             var ondownloadcompleteref = $KU.returnEventReference(img.getAttribute("ondownloadcomplete"));
             ondownloadcompleteref  && ondownloadcompleteref.call(widgetModel,widgetModel, src, false);
        }
        if (type == "HStrip" && (widgetModel.viewtype == "stripview" || widgetModel.viewtype == "pageview" )) {
            widgetModel.count++;
            if (widgetModel.masterdata.length - IndexJL == widgetModel.count ) 
            {
                widgetModel.count = 0;
                if(widgetModel.viewtype == "stripview" &&  widgetModel.scrollInstance)
                {
                    var scrolleele=img.getAttribute("kformname")+"_"+ targetWidgetID +"_scrollee";
					scrolleele = document.getElementById(scrolleele);
                    if(scrolleele) scrolleele.style.width="auto";					
					$KW.HStrip.refreshScroller(widgetModel);                   
                }
                else if(widgetModel.view == "pageview")
                {
					var pageview=document.getElementById(img.getAttribute("kformname")+"_"+ targetWidgetID);
					pageview.style.height="auto";
					pageview.style.height=pageview.clientHeight+"px";
                }
                var imgelement=document.getElementById(img.getAttribute("kformname")+"_"+ targetWidgetID+"_scrollFades");
				imgelement && $KW.touch.setHeight(imgelement.childNodes[0].childNodes[0]);
				imgelement && $KW.touch.setHeight(imgelement.childNodes[1].childNodes[0]);
		     
            }
        } 
    },   
	
	 /**
     * Given an image source the function checks if it is a fully formed URL or a name
     * that has been given by the Developer. if it is not fully formed, it creates the URL with the
     * fully formed Structure.
     *
     */
    getImageURL: function(imageSrc){
    
        //Check if the image src given has http protocol - If it has then it is a fully formed URL.
        if (imageSrc) 
		{
            if (imageSrc.startsWith("http")) 
                return imageSrc;
            else 
			{
                var imageCat = "";
                var platformver = "";
                if ($KG["imagecat"]) 
                    imageCat = $KG["imagecat"];
                if ($KG["platformver"]) 
                    platformver = $KG["platformver"];
                return platformver + "images/" + $KG["retina"] + imageCat + imageSrc;
            }
        }
		return "";
    },
    
    getCSSPropertyFromRule: function(ruleName,propertyName) {
        var styleSheetIndex = $KW.Utils.getKonyStyleSheetIndex(document.styleSheets);
		var styleSheet = document.styleSheets[styleSheetIndex];
        var cssRuleObjects = styleSheet.rules || styleSheet.cssRules;
        
		for(var i=0; i<cssRuleObjects.length; i++) 
		{
			var rule = cssRuleObjects[i];
			if(rule.selectorText == ("." + ruleName))
				return ((rule.style.getPropertyValue && rule.style.getPropertyValue(propertyName)) || rule.style[propertyName]);
		}
        return null;
    },

    imagePreloader: function(imageSrc,callback) {
        var imagePreLoad = new Image();
        imagePreLoad.src = imageSrc;
        imagePreLoad.onload = callback;
				imagePreLoad.onerror = callback;
    },
	
	//Utility function to set device's innerHeight to a global variable (showLoadingScreen calculations - 20/11/13)
	getInnerHeight: function(timeInterval){	
		setTimeout(function(){
			$KG['__innerHeight'] =  window.innerHeight;
		},timeInterval);		
	},

    getgesturePosition: function(x,y,x2,y2,x1,y1) {
        var position;
        if (x <= (x2-x1)/3 && y <= (y2-y1)/3) {
            position = 1;
        } 
        else if (x > (x2-x1)/3 && x <= (x2-x1)*2/3 && y <= (y2-y1)/3) {
            position = 2;
        }
        else if (x > (x2-x1)*2/3 && y <= (y2-y1)/3) {
            position = 3;
        }
        else if (x <= (x2-x1)/3 && y > (y2-y1)/3 && y <= (y2-y1)*2/3) {
            position = 4;
        }
        else if (x > (x2-x1)/3 && x <= (x2-x1)*2/3 && y > (y2-y1)/3 && y <= (y2-y1)*2/3) {
            position = 5;
        }
        else if (x > (x2-x1)*2/3 && y > (y2-y1)/3 && y <= (y2-y1)*2/3) {
            position = 6;
        }
        else if (x <= (x2-x1)/3 && y > (y2-y1)*2/3) {
            position = 7;
        }
        else if (x > (x2-x1)/3 && x <= (x2-x1)*2/3 && y > (y2-y1)*2/3) {
            position = 8;
        }
        else if (x > (x2-x1)*2/3 && y > (y2-y1)*2/3) {
            position = 9;
        }
        else if (x == (x2-x1)/2 && y == (y2-y1)/2) {
            position = 10;
        }
        return position;
    },
	addThirdPartyMeta: function(meta) {
		if(meta && typeof meta == 'object') {
			if(!$KG['thirdPartyWidgetsMeta']) {
				$KG['thirdPartyWidgetsMeta'] = {};
			}
			$KG['thirdPartyWidgetsMeta'][meta.id] = meta;
		}
	},
	getWidgetTypeByNameSapce: function(namespace) {
		if(namespace && typeof namespace == 'string') {
			namespace = namespace.split('.');
			return namespace[namespace.length-1];
		} else {
			return "";
		}
	},

	getStyle:function(el, cssprop){
		var value = "";
		if(document.defaultView && document.defaultView.getComputedStyle){
			value = document.defaultView.getComputedStyle(el, "").getPropertyValue(cssprop);
		}
		else if(el.currentStyle){ //IE -- cssprop should be fontFamily instead of font-family
			cssprop = cssprop.replace(/\-(\w)/g, function (strMatch, p1){
				return p1.toUpperCase();
			});
			value = el.currentStyle[cssprop];
		}
		else //try and get inline style
			value = el.style[cssprop];
			
		return value;		
	},

    getContainerParentDivMappings: function(parentModel,childModel) {  
            return {Form : 3, Popup:3, ScrollBox: 3, HBox: 0 , VBox: 0 , Line: 0, TabPane: 0, Image: 4, Slider:5}; 
    },

    returnParentChildBloatAdjustedNode: function(parentModel,childModel,node) {
		var map = $KU.getContainerParentDivMappings(parentModel, childModel);
		for (var i = typeof map[childModel.wType] == 'undefined' ? 3 : map[childModel.wType]; i > 0; --i)
            node = node.parentNode;	
        return node;	

    },

    extend: function(sub, sup) {
        for(var k in sup) {
            if(typeof sub[k] == 'undefined') {
                sub[k] = sup[k];
            }
        }

        return sub;
    },

    fireEvent: function(el, type, data) {
        if(document.createEventObject) {
            var evt = document.createEventObject();
            evt.data = data;
            return el.fireEvent('on'+type, evt);
        } else {
            var evt = document.createEvent("HTMLEvents");
            evt.data = data;
            evt.initEvent(type, true, true );
            return !el.dispatchEvent(evt);
        }
    },

    elementIndex: function(el) {
        var index = 0;
        while(el && el.previousSibling) {
            el = el.previousSibling;
            index++;
        }
        return index;
    },

    closestElement: function(el, attrName, attrValue) {
        while(el && el.tagName) {
            var val = el.getAttribute(attrName);
            if(attrName === 'class') {
                if($KU.hasClassName(el, attrValue)) {
                    return el;
                }
            } else {
                if(arguments.length === 3) {
                    if(el.getAttribute(attrName) === attrValue) {
                        return el;
                    }
                } else if(arguments.length === 2) {
                    if(el.hasAttribute(attrName)) {
                        return el;
                    }
                }
            }
            el = el.parentNode;
        }
        return null;
    },

    filterElements: function(els, type) {
        var elms = [];
        if(els.length) {
            if(type === 'visible') {
                for(var i=0; i<els.length; i++) {
                    if(els[i].style.display !== 'none') {
                        elms.push(els[i]);
                    }
                }
            }
        }
        return elms;
    },
	
	
	mediaSupport: function (){
		var video = document.createElement('video');
		return{
			mpeg4 : "" !== video.canPlayType( 'video/mp4; codecs="mp4v.20.8"' ), 
			h264 : "" !== ( video.canPlayType( 'video/mp4; codecs="avc1.42E01E"' ) || video.canPlayType( 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' ) ), 
			ogg : "" !== video.canPlayType( 'video/ogg; codecs="theora"' ), 
			webm : "" !== video.canPlayType( 'video/webm; codecs="vp8, vorbis"' )
		}
	},
	
	
	loadJSSynchronously: function(file){
		var xhrObj = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject ("Microsoft.XMLHTTP");
		xhrObj.open('GET', file, false); //open and send a synchronous request
		xhrObj.send('');
		// add the returned content to a newly created script tag
		var script = document.createElement('script');
		script.type = "text/javascript";
		script.text = xhrObj.responseText;
		document.getElementsByTagName('head')[0].appendChild(script);	
	},	
	
	getFunctionName: function (func){
       return func.name ? func.name : func.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
    },
	
	// >=
	nativeScrollMatrix: {iphone: "5", ipad: "5", android: "2.3.6", blackberry: "7", desktop: "0"},
	isAndroid: (/android/gi).test(navigator.userAgent),
	isIDevice: (/iphone|ipad/gi).test(navigator.userAgent),
	isiPhone: (/iphone/gi).test(navigator.userAgent),
	isiPod: (/ipod/gi).test(navigator.userAgent),
	isiPad: (/ipad/gi).test(navigator.userAgent),
	isIOS7: (/(iPad|iPhone);.*CPU.*OS 7_\d/i).test(navigator.userAgent),
	isPlaybook: (/playbook/gi).test(navigator.userAgent),
	isBlackBerry: ((/blackberry/gi).test(navigator.userAgent) || (/BB10/gi).test(navigator.userAgent)) && typeof bbnth == "undefined",
	isBlackBerryNTH : (/blackberry/gi).test(navigator.userAgent) && typeof bbnth != "undefined" && bbnth,
	isTouchPad: (/hp-tablet/gi).test(navigator.userAgent),
	isWindowsPhone: (/Windows Phone/gi).test(navigator.userAgent),
	isWindowsTouch: (/Windows/gi).test(navigator.userAgent) && (/Touch/gi).test(navigator.userAgent),
	isWindowsTablet: (/Windows NT/gi).test(navigator.userAgent) && (/Touch/gi).test(navigator.userAgent),
	isIE: (/MSIE/gi).test(navigator.userAgent),
	isIE9: navigator.userAgent.match(/MSIE (\d+)/) != null && RegExp.$1 == "9",
	isIE10: navigator.userAgent.match(/MSIE (\d+)/) != null && RegExp.$1 == "10",
	isIE11 :  (/rv:([1][1-9])/i).test(navigator.userAgent),
	isMob: (/mobile/gi).test(navigator.userAgent),
	isTablet : (/hp-tablet|ipad|playbook/gi).test(navigator.userAgent) || (((/android/gi).test(navigator.userAgent) || (/Windows NT/gi).test(navigator.userAgent) && (/Touch/gi).test(navigator.userAgent)) && !(/mobile/gi).test(navigator.userAgent)),
	
	/* devices */
	isAndroid_SonyXPeria: (/android/gi).test(navigator.userAgent) && (/SonyEricsson/gi).test(navigator.userAgent),
	isAndroid_Galaxy: (/android/gi).test(navigator.userAgent) && (/GT/gi).test(navigator.userAgent),
	isAndroid_HTC: (/android/gi).test(navigator.userAgent) && (/HTC/gi).test(navigator.userAgent),
	isAndroid_Nexus: (/android/gi).test(navigator.userAgent) && (/Nexus/gi).test(navigator.userAgent),
	orientationDelayMatrix: {iphone: 100, ipad: 100, blackberry: 100, android: 250, GT: 150, SonyXPeria: 100, Nexus: 500, androidtablet: 300},
	isTouchSupported : (typeof Touch != "undefined" || "ontouchstart" in window) && typeof bbnth == "undefined",
	isPointerSupported : navigator.msPointerEnabled,
    isOrientationSupported : 'onorientationchange' in window,
	placeholderSupported : ("placeholder" in document.createElement('input')),
	vendor : ((/webkit/i).test(navigator.userAgent) ? 'webkit' : (/firefox/i).test(navigator.userAgent) ? 'moz' : 'opera' in window ? 'o' : (/msie/i).test(navigator.userAgent) ? 'ms' : ''),
	
	// TODO: Opera n FF
	has3d : 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix() || 'MSCSSMatrix' in window && 'm11' in new MSCSSMatrix(),
	hasTransform : 'webkitTransform' in document.documentElement.style || 'msTransform' in document.documentElement.style,
	hashChange : "onhashchange" in window,
	
	translatableWidgets: ["Button", "Label", "Link", "RichText", "TextArea", "TextField", "Phone"],
	segmentKeyMap: {visible: "isvisible", enable: "disabled"},
	
	dpi: window.devicePixelRatio || 1,
	minTouchMoveDisplacement: (window.devicePixelRatio || 1) * 6,
	swipeDuration: 500,
	imgCache: [],
	isAjaxUploadSupported: window.File && window.FileList && new XMLHttpRequest().upload,
	
	hideKeyboard: function(callback, scope) {
		var activeElement = document.activeElement;
        activeElement.setAttribute('readonly', 'readonly'); // Force keyboard to hide on input field.
        activeElement.setAttribute('disabled', 'true'); // Force keyboard to hide on textarea field.
        setTimeout(function() {
            activeElement.blur();
            // Remove readonly attribute after keyboard is hidden.
            activeElement.removeAttribute('readonly');
            activeElement.removeAttribute('disabled');
            if(callback) {
                callback(scope);
            }
        }, 100);
    },
	
	setActiveInput: function(target){
		if(document.activeElement){
			var wType = document.activeElement.getAttribute("kwidgettype");	
			if((wType == "TextField" || wType == "TextArea") && !$KU.isWindowsPhone){
				$KG.activeInput = document.activeElement;						
			}
		}
		
		if($KG.disableViewPortScroll && target){
			target.value = target.value;			
			setTimeout(function(){target.style.pointerEvents = 'none'}, 100);
		}
		
	},

	//Adjust scrollboxes once the viewport is resized in Android
	onHideKeypad: function(wModel){
		if(!$KG["relativeScroll"] && $KU.isIOS7){
			var formContainer = $KG["__currentForm"] && document.getElementById($KG["__currentForm"].id + "_container");
			formContainer && (formContainer.style.height = "100%");
		}
		$KG.activeInput = "";
		this.adjustScrollBoxesOnResize();	
	},
	
	adjustScrollBoxesOnResize: function(){
		if($KU.isTablet && $KG["__currentForm"]){
			setTimeout(function (){					
				$KW.ScrollBox.adjustBoxDimensions($KG["__currentForm"].id);				
				if($KU.isAndroid && document.activeElement){
					var inputModel = $KU.getModelByNode(document.activeElement);
					if(inputModel && (inputModel.wType == "TextField" || inputModel.wType == "TextArea")){
						var scrollBox = $KU.closestElement(document.activeElement.parentNode, 'kwidgettype', 'ScrollBox');
						var scrollerInstance = scrollBox ? $KG[scrollBox.id + "_scroller"] : ($KG["__currentForm"] ? $KG[$KG["__currentForm"].id + "_scroller"] : "");
						scrollerInstance && scrollerInstance.scrollToElement(document.activeElement, 200);
					}
				}	
			}, 300);
		}
	},  
	
	setPointerEvents: function(srcEle, val){
		srcEle = srcEle && srcEle.children && srcEle.children.length == 1 && srcEle.firstChild;
		if(srcEle && (srcEle.tagName == "INPUT" || srcEle.tagName == "TEXTAREA"))	
			srcEle.style.pointerEvents = val;
	},
	
	updateGestureTempList: function(model, data){
		var tempList = $KG.gestureTemplates || [];
		if(data && data.length > IndexJL){
			tempList = [model.rowtemplate.id];
			for(var i = IndexJL; i < data.length; i++) {
				var template = data[i].template;
				if(template && !tempList.contains(template.id))
					tempList.push(template.id);
					
			}
		}
		$KG.gestureTemplates = tempList;
	},
	setMainHeight: function(){
		var main = $KU.getElementById("__MainContainer");
		if(main){
			main.style.height = window.innerHeight + "px";
		}
	},
	
	//creates a span element and append to body.
	createa11yDynamicElement : function()
	{
		var ariaDiv = document.getElementById("ariaTag");
		if(!ariaDiv) 
		{
			var ariaText = "<span  id='ariaTag' style='opacity:0;display:inline-block;height:0;width:0'  aria-live='assertive'></span>";
			ariaDiv = ariaDiv || document.createElement('div');
			ariaDiv.innerHTML = ariaText;
			document.body.appendChild(ariaDiv.firstChild);
		}
	},
	
	//To call voice over during a dynamic content change in the live region
	changea11yDynamicElement : function(title)
	{
		var ariaEle = document.getElementById('ariaTag');
		window.setTimeout(function(){if(ariaEle){ ariaEle.removeAttribute('aria-hidden');ariaEle.innerHTML = title; window.setTimeout(function(){ariaEle.setAttribute('aria-hidden','true')},10);}
		},100);
		if(ariaEle) ariaEle.innerHTML = "title set";
	},	
	
	//Returns true for all the group and container widgets for iphone.
	isRoleRequired: function(widgetModel)
	{
		if($KU.isiPhone && (widgetModel.wType === "HBox" || widgetModel.wType === "Label"  || widgetModel.wType === "VBox" || widgetModel.wType == "Segment" || widgetModel.wType == "ScrollBox" || widgetModel.wType == "HStrip" || widgetModel.wType == "Slider" || widgetModel.wType == "RichText"))
			return true;
		else 
			return false;
	},
	
	
	addAriatoElement : function(element, propertyValue, widgetModel)
	{
		//Adding aria-label attribute to support 508 compliance.
		if(element && propertyValue)
		{				
			//propertyValue.hint is to support backward compatibility.
			//if label is present then value is appended to label else appended to hint if present
			var accessLabel = (propertyValue.a11yLabel || propertyValue.a11yLabel == "") ? propertyValue.a11yLabel : propertyValue.hint;

				var accessValue = propertyValue.a11yValue;
				
				if(accessLabel!=null && typeof accessLabel!=undefined && accessLabel.trim() == "")
				{
					accessLabel = " ";
				}
				
				if(accessValue!=null && typeof accessValue!=undefined && accessValue.trim() == "")
				{
					accessValue = " ";
				}
				
				if(widgetModel.wType != 'Calendar'){
				
					accessLabel = accessLabel  ? accessLabel + " "+ (accessValue ? accessValue : "") : (accessValue ? accessValue : null);
				}
				
				
				if(accessLabel)
				{
					if(widgetModel.wType == "Image")
					{
						element.setAttribute("alt", accessLabel);								
					}
					else	
					{
						element.setAttribute("aria-label", accessLabel);								
					}
					if($KU.isRoleRequired(widgetModel))
						element.setAttribute("role", "option");							
					if( widgetModel.wType == "Calendar")
						element.childNodes[1].alt = accessLabel;
				}
				else
				{
					if(widgetModel.wType == "Image")
					{
						element.removeAttribute("alt");								
					}
					else	
					{														
						element.removeAttribute("aria-label");								
					}
					if( widgetModel.wType == "Calendar")
						element.childNodes[1].alt = "Calendar";	
						
					if($KU.isRoleRequired(widgetModel))
						element.removeAttribute("role");
					if(!accessLabel && widgetModel.wType == "Switch" )
                                            $KW.Switch.addA11YAttribute( widgetModel, element, true );
				}
			
			var accessHint = propertyValue.a11yHint || "" ;
			if(accessHint.trim() != "")
			{				
				if(!($KU.isBlackBerryNTH || $KU.isBlackBerry)) {
					var hintID = widgetModel.pf + "_" + widgetModel.id + "_hint";					
					element.setAttribute("aria-describedby", hintID);							
					$KU.createHintWrapper(widgetModel, hintID, accessHint);
					if($KU.isRoleRequired(widgetModel))
						element.setAttribute("role", "option");
				}	
			}
			else {
				element.removeAttribute("aria-describedby");
				if($KU.isRoleRequired(widgetModel))
					element.removeAttribute("role");
                                if(!accessLabel && widgetModel.wType == "Switch" )
                                    $KW.Switch.addA11YAttribute( widgetModel, element, true );
			}
			propertyValue.a11yHidden ?	element.setAttribute("aria-hidden", true):element.removeAttribute("aria-hidden");
			propertyValue.required ? element.setAttribute("aria-required", propertyValue.required):element.removeAttribute("aria-required");		 
		}
		else 
		{
				//accessconfig object is null or undefined
				if(widgetModel.wType == "Image")
				{
					element.removeAttribute("alt");	
				}
				else if(widgetModel.wType == "Calendar"){
					element.childNodes[1].alt = "Calendar";
				}else{														
					element.removeAttribute("aria-label");	
                                            if ( widgetModel.wType == "Switch" ) {
                                                $KW.Switch.addA11YAttribute( widgetModel, element );
					    }
				}	
				element.removeAttribute("aria-hidden");
				element.removeAttribute("aria-describedby");
				element.removeAttribute("aria-required");
				if($KU.isRoleRequired(widgetModel))
					element.removeAttribute("role");
		}			
	},
	
	
	//creates a wrapper div(with style display:none) to body element. wrapper div has div with IDs corresponding to describedby attribute value of a widget.
	
	createHintWrapper : function(widgetModel, id, desc)
	{
		var wrapperId = widgetModel.pf + "_hint";
		var wrapper = document.getElementById(wrapperId);		
		if(desc)
		{
			var hintString = "<div id='" + id + "'>" + desc + "</div>";
			var hintElem = document.getElementById(id);
			if(!wrapper)
			{
				var wrapper = document.createElement('div');
				wrapper.id = wrapperId;
				wrapper.style.display = 'none';
				document.body.appendChild(wrapper);
			}
			if(hintElem){
				if(hintElem.textContent)
					hintElem.textContent = desc;
				else
					hintElem.innerText = desc;
			}
			else{
				wrapper.innerHTML += hintString;
			}	
		}
	
	},
	
	/*****
	widgetModel : Widget Model.
	accessibilityObj : accessibilityConfig object for a property.
	groupWidgetValue : Only Applicable to group widgets. Its value of element in a group widget.
	Returns string consists of aria-label(config label + config value), aria-describedby(config hint) and aria-hidden(config hidden)	
	label and value are appeneded and formed as aria-label string. if both are empty do not generate 'aria-label' attribute in DOM.
	*****/
	getAccessibilityValues : function(widgetModel, accessibilityObj, groupWidgetValue, rowIndex)
	{
		var accessObj = accessibilityObj || widgetModel.accessibilityconfig;
		
		//for group-widgets, then pass ( index + 1 ) in place of groupwidgetvalue instead of undefined
		if(groupWidgetValue && groupWidgetValue != "") {
			groupWidgetValue = groupWidgetValue? "_" + groupWidgetValue : "";
			//groupwidgetvalue is available only for group widget mmaster data. so accessObj is overriding with option accessibilityObj
			accessObj = accessibilityObj;
		}		
		
		var accessAttr = "";
		if(accessObj)
		{
			
			//accessObj.hint is for 5.0 backward compatibility
			var accessLabel = (accessObj.a11yLabel || accessObj.a11yLabel == "") ? accessObj.a11yLabel : accessObj.hint;	
			var accessValue = accessObj.a11yValue; 

			var accessHint = accessObj.a11yHint;
			var segrowIndex = rowIndex || "";
			var hintID = "";
			if(groupWidgetValue)
				hintID = widgetModel.pf + "_" + widgetModel.id + segrowIndex + groupWidgetValue + "_hint";
			else
				hintID = widgetModel.pf + "_" + widgetModel.id + segrowIndex + "_hint";
				
			if(accessLabel!=null && typeof accessLabel!=undefined && accessLabel.trim() == "")   
			{
				accessLabel = " ";		
			}
			if(accessValue!=null && typeof accessValue!=undefined && accessValue.trim() == "")
			{
				accessValue = " ";
			}
			if(widgetModel.wType != 'Calendar'){
						
				accessLabel = accessLabel  ? accessLabel + " "+ (accessValue ? accessValue : "") : (accessValue ? accessValue : null);
				accessLabel = accessLabel ? (widgetModel.wType == "Image" ? "  alt='" + accessLabel + "' ": "  aria-label='" + accessLabel + "' ") : "" ;	
			}	
			else{
				accessLabel = accessLabel + ' ' + (widgetModel.date?widgetModel.date:widgetModel.placeholder);
				accessLabel = accessLabel ? ("aria-label='" + accessLabel +"' ") : "";
			}
				
			if(accessLabel && $KU.isRoleRequired(widgetModel)) //accessLabel is a string with aria-Label attributes
				accessLabel  += "  role='option'";
				
			var accessHintAttr = "";
			if(accessHint)
			{
				accessHintAttr = " aria-describedby='" + hintID + "' " ;
				if($KU.isRoleRequired(widgetModel))
					accessLabel  += "  role='option'";
			}
			
			var accessHidden = accessObj.a11yHidden ? " aria-hidden ='" + true + "'" : "";
			
			$KU.createHintWrapper(widgetModel, hintID, accessHint);
			accessAttr =  (accessLabel + "  " + accessHintAttr + " " + accessHidden);
		}
		else{
			if(widgetModel.wType == 'Calendar'){
				accessLabel = "Calendar " +  widgetModel.placeholder;
				accessLabel = ("aria-label='" + accessLabel +"' ");
				accessAttr =  (accessLabel);
			}
		}
		return accessAttr;
	},
	
	updateGestureTempList: function(model, data){
		var tempList = $KG.gestureTemplates || [];
		if(data && data.length > IndexJL){
			tempList = [model.rowtemplate.id];
			for(var i = IndexJL; i < data.length; i++) {
				var template = data[i].template;
				if(template && !tempList.contains(template.id))
					tempList.push(template.id);
					
			}
		}
		$KG.gestureTemplates = tempList;
	},
	
	setMainHeight: function(){
		var main = $KU.getElementById("__MainContainer");
		if(main){
			main.style.height = window.innerHeight + "px";
		}
	}
	
};

// Prototype methods

//Object.prototype.merge = (function (obj) {var o = this;var i = 0;for (var z in obj) {if (obj.hasOwnProperty(z)) {o[z] = obj[z];}}return o;})

/* Array */
/* Added as property with enumerable as false to avoid to include in for loop.*/
/* Added as property with enumerable as false to avoid to include in for loop.*/
var Arraycontains = function(val){
    var len = this.length;
    if (len == 0)
        return false;
    else
    {
        for (var i=0;i<len;i++)
        {
            if (this[i]==val)
                return true;
        }
    }
    return false;
}
var ArraycontainsTimerAction = function(val){
      var len = this.length;
      if (len == 0)
          return false;
      else
      {
          for (var i=0;i<len;i++)
          {
              if ((this[i].actionName == val.actionName))
                  return true;
          }
      }
      return false;
  }
  
 var Arrayremove = function(val){
      var len = this.length;
      if (len == 0)
          return null;
      else
      {
          for (var i=0;i<len;i++)
          {
              if (this[i]==val)
              {
                  return this.removeRange(i);
              }
          }
      }
      return this;
  }
  
 var ArrayremoveRange = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  }

    Object.defineProperty(Array.prototype, "contains", {value: Arraycontains, enumerable:false});
    Object.defineProperty(Array.prototype, "containsTimerAction", {value: ArraycontainsTimerAction, enumerable:false});
    Object.defineProperty(Array.prototype, "remove", {value: Arrayremove, enumerable:false});
    Object.defineProperty(Array.prototype, "removeRange", {value: ArrayremoveRange, enumerable:false}); 

/* String */
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}

String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
}
String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
}

String.prototype.startsWith = function(str) {
    return this.slice(0, str.length) === str;
}

kony.json = {

	concat: function(obj1, obj2){
	
		for (var key in obj2) {
			obj1[key] = obj2[key];
		}
		
		return obj1;
	}	
}

// Simulating bind on mobile
if (!Function.prototype.bind) 
{
  Function.prototype.bind = function (oThis) 
  {
	if (typeof this !== "function")
	  throw new TypeError("Function.prototype.bind - what is trying to be fBound is not callable");

	var aArgs = Array.prototype.slice.call(arguments, 1), 
		fToBind = this, 
		fNOP = function () {},
		fBound = function () {
		  return fToBind.apply(this instanceof fNOP ? this : oThis || window, aArgs.concat(Array.prototype.slice.call(arguments)));    
		};

	fNOP.prototype = this.prototype;
	fBound.prototype = new fNOP();

	return fBound;
  }
}

//BB10 adds extra white space to the right of the screen with translate3d
if($KU.isBlackBerry && $KU.getPlatformVersion("blackberry").startsWith("10")) 
	$KU.has3d = false;
if(($KU.isBlackBerry || $KU.isBlackBerryNTH) && $KU.getPlatformVersion("blackberry").startsWith("7")) 
	$KU.BB7 = true;
if(($KU.isBlackBerry || $KU.isBlackBerryNTH) && $KU.getPlatformVersion("blackberry").startsWith("6")) 
	$KU.BB6 = true;	
if($KU.isAndroid && $KU.getPlatformVersion("android").startsWith("4.1"))
	$KU.placeholderSupported = false;
	
var translateOpen = 'translate' + ($KU.has3d ? '3d(' : '(');
var translateClose = $KU.has3d ? ',0)' : ')';


/* This file is part of OWL JavaScript Utilities.

OWL JavaScript Utilities is free software: you can redistribute it and/or 
modify it under the terms of the GNU Lesser General Public License
as published by the Free Software Foundation, either version 3 of
the License, or (at your option) any later version.

OWL JavaScript Utilities is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public 
License along with OWL JavaScript Utilities.  If not, see 
<http://www.gnu.org/licenses/>.
*/

owl = (function() {

	// the re-usable constructor function used by clone().
	function Clone() {}

	// clone objects, skip other types.
	function clone(target) {
		if ( typeof target == 'object' ) {
			Clone.prototype = target;
			return new Clone();
		} else {
			return target;
		}
	}


	// Shallow Copy 
	function copy(target) {
		if (typeof target !== 'object' ) {
			return target;  // non-object have value sematics, so target is already a copy.
		} else {
			var value = target.valueOf();
			if (target != value) { 
				// the object is a standard object wrapper for a native type, say String.
				// we can make a copy by instantiating a new object around the value.
				return new target.constructor(value);
			} else {
				// ok, we have a normal object. If possible, we'll clone the original's prototype 
				// (not the original) to get an empty object with the same prototype chain as
				// the original.  If just copy the instance properties.  Otherwise, we have to 
				// copy the whole thing, property-by-property.
				if ( target instanceof target.constructor && target.constructor !== Object ) { 
					var c = clone(target.constructor.prototype);
				
					// give the copy all the instance properties of target.  It has the same
					// prototype as target, so inherited properties are already there.
					for ( var property in target) { 
						if (target.hasOwnProperty(property)) {
							c[property] = target[property];
						} 
					}
				} else {
					var c = {};
					for ( var property in target ) c[property] = target[property];
				}
				
				return c;
			}
		}
	}

	// Deep Copy
	var deepCopiers = [];

	function DeepCopier(config) {
		for ( var key in config ) this[key] = config[key];
	}
	DeepCopier.prototype = {
		constructor: DeepCopier,

		// determines if this DeepCopier can handle the given object.
		canCopy: function(source) { return false; },

		// starts the deep copying process by creating the copy object.  You
		// can initialize any properties you want, but you can't call recursively
		// into the DeeopCopyAlgorithm.
		create: function(source) { },

		// Completes the deep copy of the source object by populating any properties
		// that need to be recursively deep copied.  You can do this by using the
		// provided deepCopyAlgorithm instance's deepCopy() method.  This will handle
		// cyclic references for objects already deepCopied, including the source object
		// itself.  The "result" passed in is the object returned from create().
		populate: function(deepCopyAlgorithm, source, result) {}
	};

	function DeepCopyAlgorithm() {
		// copiedObjects keeps track of objects already copied by this
		// deepCopy operation, so we can correctly handle cyclic references.
		this.copiedObjects = [];
		thisPass = this;
		this.recursiveDeepCopy = function(source) {
			return thisPass.deepCopy(source);
		}
		this.depth = 0;
	}
	DeepCopyAlgorithm.prototype = {
		constructor: DeepCopyAlgorithm,

		maxDepth: 256,
			
		// add an object to the cache.  No attempt is made to filter duplicates;
		// we always check getCachedResult() before calling it.
		cacheResult: function(source, result) {
			this.copiedObjects.push([source, result]);
		},

		// Returns the cached copy of a given object, or undefined if it's an
		// object we haven't seen before.
		getCachedResult: function(source) {
			var copiedObjects = this.copiedObjects;
			var length = copiedObjects.length;
			for ( var i=0; i<length; i++ ) {
				if ( copiedObjects[i][0] === source ) {
					return copiedObjects[i][1];
				}
			}
			return undefined;
		},
		
		// deepCopy handles the simple cases itself: non-objects and object's we've seen before.
		// For complex cases, it first identifies an appropriate DeepCopier, then calls
		// applyDeepCopier() to delegate the details of copying the object to that DeepCopier.
		deepCopy: function(source) {
			// null is a special case: it's the only value of type 'object' without properties.
			if ( source === null ) return null;

			// All non-objects use value semantics and don't need explict copying.
			if ( typeof source !== 'object' ) return source;

			var cachedResult = this.getCachedResult(source);

			// we've already seen this object during this deep copy operation
			// so can immediately return the result.  This preserves the cyclic
			// reference structure and protects us from infinite recursion.
			if ( cachedResult ) return cachedResult;

			// objects may need special handling depending on their class.  There is
			// a class of handlers call "DeepCopiers"  that know how to copy certain
			// objects.  There is also a final, generic deep copier that can handle any object.
			for ( var i=0; i<deepCopiers.length; i++ ) {
				var deepCopier = deepCopiers[i];
				if ( deepCopier.canCopy(source) ) {
					return this.applyDeepCopier(deepCopier, source);
				}
			}
			// the generic copier can handle anything, so we should never reach this line.
			throw new Error("no DeepCopier is able to copy " + source);
		},

		// once we've identified which DeepCopier to use, we need to call it in a very
		// particular order: create, cache, populate.  This is the key to detecting cycles.
		// We also keep track of recursion depth when calling the potentially recursive
		// populate(): this is a fail-fast to prevent an infinite loop from consuming all
		// available memory and crashing or slowing down the browser.
		applyDeepCopier: function(deepCopier, source) {
			// Start by creating a stub object that represents the copy.
			var result = deepCopier.create(source);

			// we now know the deep copy of source should always be result, so if we encounter
			// source again during this deep copy we can immediately use result instead of
			// descending into it recursively.  
			this.cacheResult(source, result);

			// only DeepCopier::populate() can recursively deep copy.  So, to keep track
			// of recursion depth, we increment this shared counter before calling it,
			// and decrement it afterwards.
			this.depth++;
			if ( this.depth > this.maxDepth ) {
				throw new Error("Exceeded max recursion depth in deep copy.");
			}

			// It's now safe to let the deepCopier recursively deep copy its properties.
			deepCopier.populate(this.recursiveDeepCopy, source, result);

			this.depth--;

			return result;
		}
	};

	// entry point for deep copy.
	//   source is the object to be deep copied.
	//   maxDepth is an optional recursion limit. Defaults to 256.
	function deepCopy(source, maxDepth) {
		var deepCopyAlgorithm = new DeepCopyAlgorithm();
		if ( maxDepth ) deepCopyAlgorithm.maxDepth = maxDepth;
		return deepCopyAlgorithm.deepCopy(source);
	}

	// publicly expose the DeepCopier class.
	deepCopy.DeepCopier = DeepCopier;

	// publicly expose the list of deepCopiers.
	deepCopy.deepCopiers = deepCopiers;

	// make deepCopy() extensible by allowing others to 
	// register their own custom DeepCopiers.
	deepCopy.register = function(deepCopier) {
		if ( !(deepCopier instanceof DeepCopier) ) {
			deepCopier = new DeepCopier(deepCopier);
		}
		deepCopiers.unshift(deepCopier);
	}

	// Generic Object copier
	// the ultimate fallback DeepCopier, which tries to handle the generic case.  This
	// should work for base Objects and many user-defined classes.
	deepCopy.register({
		canCopy: function(source) { return true; },

		create: function(source) {
			if ( source instanceof source.constructor ) {
				return clone(source.constructor.prototype);
			} else {
				return {};
			}
		},

		populate: function(deepCopy, source, result) {
			for ( var key in source ) {
				if ( source.hasOwnProperty(key) && key != 'gestures') {
					
					/*var g = source.__lookupGetter__(key), s = source.__lookupSetter__(key);
       
			        if ( g || s ) {
			            if ( g )
			                result.__defineGetter__(key, g);
			            if ( s )
			                result.__defineSetter__(key, s);
			         } else*/
						result[key] = deepCopy(source[key]);
				}
			}
			return result;
		}
	});

	// Array copier
	deepCopy.register({
		canCopy: function(source) {
			return ( source instanceof Array );
		},

		create: function(source) {
			return new source.constructor();
		},

		populate: function(deepCopy, source, result) {
			for ( var i=0; i<source.length; i++) {
				result.push( deepCopy(source[i]) );
			}
			return result;
		}
	});

	// Date copier
	deepCopy.register({
		canCopy: function(source) {
			return ( source instanceof Date );
		},

		create: function(source) {
			return new Date(source);
		}
	});

	// HTML DOM Node

	// utility function to detect Nodes.  In particular, we're looking
	// for the cloneNode method.  The global document is also defined to
	// be a Node, but is a special case in many ways.
	function isNode(source) {
		if ( window.Node ) {
			return source instanceof Node;
		} else {
			// the document is a special Node and doesn't have many of
			// the common properties so we use an identity check instead.
			if ( source === document ) return true;
			return (
				typeof source.nodeType === 'number' &&
				source.attributes &&
				source.childNodes &&
				source.cloneNode
			);
		}
	}

	// Node copier
	deepCopy.register({
		canCopy: function(source) { return isNode(source); },

		create: function(source) {
			// there can only be one (document).
			if ( source === document ) return document;

			// start with a shallow copy.  We'll handle the deep copy of
			// its children ourselves.
			return source.cloneNode(false);
		},

		populate: function(deepCopy, source, result) {
			// we're not copying the global document, so don't have to populate it either.
			if ( source === document ) return document;

			// if this Node has children, deep copy them one-by-one.
			if ( source.childNodes && source.childNodes.length ) {
				for ( var i=0; i<source.childNodes.length; i++ ) {
					var childCopy = deepCopy(source.childNodes[i]);
					result.appendChild(childCopy);
				}
			}
		}
	});

	return {
		DeepCopyAlgorithm: DeepCopyAlgorithm,
		copy: copy,
		clone: clone,
		deepCopy: deepCopy
	};
})();
