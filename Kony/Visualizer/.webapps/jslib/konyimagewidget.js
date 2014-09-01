
/*
 * Widget : Image
 */
$KW.Image = {

    initialize: function(){
        kony.events.addEvent("click", "Image", this.eventHandler);
    },
    
    /**
     * Updates the view of the listbox widget.
     */
    updateView: function(widgetModel, propertyName, propertyValue, oldPropertyValue){

        var element = $KU.getNodeByModel(widgetModel);
		
		switch (propertyName) {       
            case "src": 
				widgetModel.srcType = 1;
				//widgetModel.srcType=(!propertyValue||propertyValue=="")?(widgetModel.base64?2:0):1;
                if (element && !$KW.Utils.belongsToSegment(element)) {
                    if (propertyValue != oldPropertyValue) {
                        if (!$KU.inArray($KU.imgCache, propertyValue, true)) 
                            element.parentNode.style.background = "url(" + $KU.getImageURL(widgetModel.imagewhiledownloading) + ") center center no-repeat";
                    }
                    element.src = propertyValue ? $KU.getImageURL(propertyValue) : "";
                }
				
				
				 break;
                
            case "base64":    
                widgetModel.srcType = 2;
				//widgetModel.srcType=(!propertyValue||propertyValue=="")?(widgetModel.src?1:0):2;
                if (element && propertyValue) {
                    element.src = this.getBase64String(propertyValue);
                }
                break;
            
            case "referenceheight":
            case "referencewidth":			
            case "imagescalemode":
                element && (element.parentNode.parentNode.innerHTML = this.render(widgetModel,new $KW.WidgetGenerationContext(widgetModel.pf)));
				break; 
        }
    },
    
	/**
     * Img Scalemodes : 
     * default : natural width & height
     * maintainaspectratio : set width 100%
     * fixed : (coming as 'retaininitialimagedimensions') : apply the given height and width    				 
     */
    render: function(imageModel, context){
    
        var computedSkin = $KW.skins.getSplitSkinsBetweenWidgetAndParentDiv(imageModel, context);
        var htmlString = "";
        var style = "";
       
        if(context.scrollBoxID)
            imageModel.scrollBoxID = context.scrollBoxID;

        var isWaitAllowed = true;
        if ($KU.inArray($KU.imgCache, imageModel.src, true)) 
            isWaitAllowed = false;
        // Precache widget level loading image, if any
        if (isWaitAllowed && imageModel.imagewhiledownloading)
            new Image().src = $KU.getImageURL(imageModel.imagewhiledownloading);
        
        imageModel.imagewhiledownloading = imageModel.imagewhiledownloading || $KG["imagewhiledownloading"] || "imgload.gif";
        var css = (!$KW.Utils.isWidgetVisible(imageModel, context) ? "hide" : "");       
        var useWidgetSize = '';
        if (context.ispercent === false) {
            useWidgetSize = context.layoutDir ? "float:" + context.layoutDir : "";
        }
        else {
            useWidgetSize = "width:100%";
        }
        
        if(imageModel.srcType==2)
            imgsrc = this.getBase64String(imageModel.base64)
        else
            imgsrc =  $KU.getImageURL(imageModel.src)
			
        var imgdownld="onload='$KU.imgLoadHandler(arguments[0],this)' onerror='$KU.imgLoadHandler(arguments[0])' ";
        var onimgonload= "$KU.imgLoadHandler(arguments[0],this)";
        var dimensions=[]; //only new image works as old image psp generation to be considered

        if(context.container){
			var container = context.container;
			if(container.wType == "Segment" && container.selectionindicator == imageModel.id && container.behavior  != "default" && container.selectimage && container.unselectimage){
				//var indicator = $KU.inArray(container.selectedindices, IndexJL ? container.counter : (container.counter - 1))[0] ? container.selectimage : container.unselectimage;
				var indicator = $KU.inArray(container.selectedRows, (IndexJL) ? [null, container.seccounter, container.rowcounter] : [container.seccounter, container.rowcounter])[0] ? container.selectimage : container.unselectimage;
				imgsrc = $KU.getImageURL(indicator);
			}
		}        

        if(imageModel.referencewidth && imageModel.imagescalemode==constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS) //as reference width is mandatory property
        {            
            onimgonload="$KW.Image.imgLoadHandler2(arguments[0])";
			if(context.ispercent === false)
                dimensions[1]=imageModel.referencewidth;              
            else
                dimensions[1]=(((screen.width*(imageModel.containerweight/100))>imageModel.referencewidth)?imageModel.referencewidth: (screen.width*(imageModel.containerweight/100)));              
            
            dimensions[0]=imageModel.referenceheight;
            style += (dimensions[1] != "0" ? ("width:" + dimensions[1] + "px;") : "") + (dimensions[0] != "0" ? ("height:" + dimensions[0] + "px;") : "");
        }
        // else if(kony.ui && !(imageModel instanceof kony.ui.Image) && imageModel.imageScaleMode==constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO) //as reference width is mandatory property
        else if((imageModel.name=="kony.ui.Image2" || imageModel.name=="konyLua.Image2") && imageModel.imagescalemode==constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO) //as reference width is mandatory property
        {
            imageModel.ispercent=context.ispercent;
            onimgonload="$KW.Image.imgLoadHandler2(arguments[0])";
        }
		else if(!imageModel.referencewidth && imageModel.heightwidth && imageModel.imagescalemode!=constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO)
        {
            dimensions = imageModel.heightwidth;  //Need PSP change
            dimensions = dimensions.split(",");
            style += (dimensions[1] != "0" ? ("width:" + dimensions[1] + "px;") : "") + (dimensions[0] != "0" ? ("height:" + dimensions[0] + "px;") : "");
        }
        else
		{
            style = "max-width:100%;";
            
			
				//c_span = "kwt100 "; // This is here to compenstate max-width 100% properly. Otherwise max-width wont work inside kcell.
			
		}
		
	

			// span
			htmlString += "<span id='" + (imageModel.pf + "_" + imageModel.id) + "_span' class='" + css + " " + computedSkin[0] + "' style='display:inline-block;" + (isWaitAllowed && imageModel.src ? "background:url(" + $KU.getImageURL(imageModel.imagewhiledownloading) + ") center center no-repeat;" : ";") + $KW.skins.getMarginSkin(imageModel, context) + $KW.skins.getPaddingSkin(imageModel, context) + useWidgetSize + ";" + style + "'>";
			
			// img
			htmlString += "<img class='"  + "' src='" + imgsrc+ "'" + $KW.Utils.getBaseHtml(imageModel, context) + "onload= "+onimgonload +" onerror='$KU.imgLoadHandler(arguments[0],this)' ";
		

			if (!(imageModel.name=="kony.ui.Image2" || imageModel.name=="konyLua.Image2") && imageModel.scalemode == "maintainaspectratio") {
            style = "width:100%;";
			}
			/*else if (imageModel.scalemode == "retaininitialimagedimensions" && imageModel.heightwidth) {
					var dimensions = imageModel.heightwidth;
					dimensions = dimensions.split(",");
					style += (dimensions[1] != "0" ? ("width:" + dimensions[1] + "px;") : "") + (dimensions[0] != "0" ? ("height:" + dimensions[0] + "px;") : "");
			} */
			else if (imageModel.scalemode == "retaininitialimagedimensions") {
				style = "";
		}
        
        if (isWaitAllowed && imageModel.src){
            if(kony.appinit.isIE8 || kony.appinit.isIE7){
              style += "opacity:0;";  
            }
            else{
              style += "visibility:hidden;opacity:0;";     
            }
        } // As loading of the images is dictated by the scalemode to avoid flickering after the image is loaded once. Need to reviewed if any issue exists on the loading indicator
        //htmlString += (style ? ("style= '" + style +";"+ $KW.skins.getMarginSkin(imageModel) + $KW.skins.getPaddingSkin(imageModel)+"'") : "style= '"+ $KW.skins.getMarginSkin(imageModel)+";"+$KW.skins.getPaddingSkin(imageModel)+"'") + " /></span>";
        var downloadComplete = imageModel.ondownloadcomplete || "";
		if(downloadComplete){
			downloadComplete = (typeof(downloadComplete) == 'function') ? $KU.getFunctionName(imageModel.ondownloadcomplete) : imageModel.ondownloadcomplete;
			downloadComplete = " ondownloadcomplete= '" + downloadComplete + "'";
		}
        htmlString += "style= '" + style +"'" +  downloadComplete + "/></span>";
        //imageModel.base64 = null;
        return htmlString;
    },
       
    getBase64String: function(propertyValue){
        return "data:image/png;base64," + propertyValue;
    },
  
    eventHandler: function(eventObject, target) {
        var imgWidgetModel = $KU.getModelByNode(target), containerId = target.getAttribute("kcontainerID");
        //If the widget is a segment child, update segment data i.e focusedindex and focuseditem         
        if (containerId) {
            $KW.Utils.updateContainerData(imgWidgetModel, target, true);
        } else {
            kony.events.executeBoxEvent(imgWidgetModel);
        }
    },
   
    imgLoadHandler2: function(event){
        
        event = event || window.event; 
	img = event.target || event.srcElement;	
        var tabPaneID = img.getAttribute("ktabpaneid");
        var type = img.getAttribute("kwidgettype");
        //var targetWidgetID="";
        var targetWidgetID = (type == 'Image') ? $KU.getElementID(img.getAttribute("id")) : img.getAttribute("id");
        var src = img.src;
		
		
		var widgetModel = kony.model.getWidgetModel(img.getAttribute("kformname"), targetWidgetID, tabPaneID);
		
		
        var imageModel = widgetModel;	     
        var actimgdim = {}        
        var dimensions = []; //only new image works as old image psp generation to be considered
        actimgdim.width =  img.width || img.naturalWidth;
        actimgdim.height = img.height || img.naturalHeight;
	

        if (event.type == "load") {
            var isWaitAllowed = true;
            if ($KU.inArray($KU.imgCache, src, true)) 
                isWaitAllowed = false;
            else 
                $KU.imgCache.push(src);
            
            if (isWaitAllowed || img.parentNode.style.background.indexOf("url") != -1) {
                img.parentNode && (img.parentNode.style.background = "none");
                if($KU.isBlackBerry && $KU.getPlatformVersion("blackberry").startsWith("7")) //Screen flickers with css transition on BB
                    img.style.opacity = 1;
                else{   
                    img.style[vendor + 'Transition'] = "opacity 500ms ease-in-out";
                    img.style.opacity = 1;
                }
            }            
        }    	
        //var imgwidth = screen.width*(imageModel.containerweight/100);//img.parentNode.parentNode.offsetWidth;
        if(!img.parentNode) return;
		
		var imgwidth = img.parentNode.parentNode.offsetWidth;
		if(imageModel.containerWeight > 0 && imgwidth == 0) 
		imgwidth= actimgdim.width;
        // img.setAttribute("src",src);
        var aspectRatio=(actimgdim.width/actimgdim.height);          
        var ondownloadcompleteref = $KU.returnEventReference(img.getAttribute("ondownloadcomplete"));
        ondownloadcompleteref  && ondownloadcompleteref.call(widgetModel,widgetModel, src, false);        

   		
        if(!imageModel.referencewidth)
        {
            if(imageModel.ispercent === false)
		    {                
                dimensions[1]=actimgdim.width;
                dimensions[0]=actimgdim.height;	               
            }
            else
            {
                if(actimgdim.width<=imgwidth)
                {
				    if(imageModel.referenceheight && actimgdim.height>imageModel.referenceheight)
					{
					dimensions[0]=imageModel.referenceheight;
					dimensions[1]=dimensions[0]*aspectRatio;
					}
					else
					{
                    dimensions[1]=actimgdim.width;
                    dimensions[0]=actimgdim.height;
                }
                }
                else
                {
                    dimensions[1]=imgwidth;
                    if(!imageModel.referenceheight)
                        dimensions[0]=dimensions[1]/aspectRatio;
                    else
                    {
                        dimensions[0]=dimensions[1]/aspectRatio;
                        if(dimensions[0]>imageModel.referenceheight)
                        {
                            dimensions[0]=imageModel.referenceheight;
                            dimensions[1]=dimensions[0]*aspectRatio;
                        }  
                    }
                }   
                	   
            }
        } 
        else {
            if(imageModel.ispercent === false){  
                
               if(actimgdim.width<imageModel.referencewidth)
				{
                    dimensions[1]=actimgdim.width;
                    dimensions[0]=actimgdim.height;	
				}
				else
				{
                    dimensions[1]=imageModel.referencewidth;
                    dimensions[0]=dimensions[1]/aspectRatio;    
				}           
              
            }
            else
			{
			    var computedimgwidth=(imageModel.referencewidth<=imgwidth)?imageModel.referencewidth:imgwidth;
                if(!imageModel.referenceheight)
                {
					if(actimgdim.width<computedimgwidth)
					{
					 dimensions[0]=actimgdim.height;
                     dimensions[1]=actimgdim.width;                     
				    }
					else
					{
                    dimensions[1]=computedimgwidth;
                    dimensions[0]=	dimensions[1]/aspectRatio;		
                }
	
                }
                else
                {  
                    var checkDim=(actimgdim.width<computedimgwidth)?(actimgdim.height<imageModel.referenceheight?true:false):false;
                    if(!checkDim)
                    {		
                        dimensions[1]=(((imgwidth)>imageModel.referencewidth)?imageModel.referencewidth: (imgwidth));            
                        dimensions[0]=imageModel.referenceheight;            
                        //var dimimg=((dimensions[1]/aspectRatio)<dimensions[0])?(dimensions[1]/aspectRatio):((dimensions[0]*aspectRatio < imageModel.referencewidth)? dimensions[0]*aspectRatio :false) 
                        var imgdim=(dimensions[1]/aspectRatio)<dimensions[0]?(dimensions[1]/aspectRatio):false;
                        if(imgdim===false)         
                            dimensions[1]=(dimensions[0]*aspectRatio <= imageModel.referencewidth)? dimensions[0]*aspectRatio :false;            
                        else
                            dimensions[0]=imgdim;            
                    }
                    else
                    {
                        dimensions[0]=actimgdim.height;
                        dimensions[1]=actimgdim.width;                
                    } 
                }               				
			}
        }
        //img.setAttribute("style",img.setAttribute("style")+style);
        
		// Finally set image dimensions
        img.style.width = img.parentNode.style.width = dimensions[1] + "px";
		img.style.height = img.parentNode.style.height = dimensions[0] + "px";
		img.style.display = "";
		img.style.visibility = "visible";
        
        if (type == "HStrip" && (widgetModel.viewtype == "stripview" || widgetModel.viewtype == "pageview" )) {
            widgetModel.count++;
            if (widgetModel.masterdata.length - IndexJL == widgetModel.count ) 
            {  
                widgetModel.count = 0;
                if(widgetModel.viewtype == "stripview" &&  widgetModel.scrollInstance)
                {
                    var scrolleele=img.getAttribute("kformname")+"_"+ targetWidgetID +"_scrollee";
                    document.getElementById(scrolleele).style.width="auto";					
					$KW.HStrip.refreshScroller(widgetModel);
                }
                else if(widgetModel.viewtype == "pageview")
                {   
					var pageview=document.getElementById(img.getAttribute("kformname")+"_"+ targetWidgetID);
					pageview.style.height="auto";
					pageview.style.height=pageview.clientHeight+"px";
                }
            }
        } 
        
        img.parentNode.parentNode.style["font-size"]= "0px";
    },
    
    setBase64Img: function(widgetModel){
    
        if (widgetModel.src && !widgetModel.src.startsWith("http")) { //Don't set the base64 for external imgs as the XHR will fail with cross origin issue	
            var req = new XMLHttpRequest();
            req.onreadystatechange = function(){
                if (req.readyState == 4 && req.status == 200) {
                    widgetModel.base64 = $KU.getBase64(req.responseText) || null;
                }
            }
            req.open('GET', $KU.getImageURL(widgetModel.src), true);
            if (req.overrideMimeType) 
                req.overrideMimeType('text/plain; charset=x-user-defined');
            req.send(null);
        }
        else 
            widgetModel.base64 = null;
        
        /*var canvas = document.createElement("canvas"); //It works only in iphone
         canvas.width = img.naturalWidth;
         canvas.height = img.naturalHeight;
         // Copy the image contents to the canvas
         var ctx = canvas.getContext("2d");
         ctx.drawImage(img, 0, 0);
         return canvas.toDataURL("image/png");*/
    }
}
