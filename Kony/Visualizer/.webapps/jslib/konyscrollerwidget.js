/*
 * Scroller
*/

$KW.Scroller = {

	initializeFormScroller: function(formId){
		var	scrollerNodes = document.querySelectorAll("#" + formId + "[kwidgettype='KFormScroller'] ,#" + formId + " div[kwidgettype='KFormScroller']");
		scrollerNodes && this.initialize(scrollerNodes, "Form");
	},
	
	initializeScrollBoxes: function(formId){
		var	scrollerNodes = document.querySelectorAll("#" + formId + " div[kwidgettype='KScrollBox']");
		scrollerNodes && this.initialize(scrollerNodes, "ScrollBox");
	},
	
	initialize: function(scrollerNodes, type)
	{
		if($KG["stickyScroll"])
		{
			var scrollerInstance = new $KW.touch.StickyScroller();
			$KG[$KG["__currentForm"] + '_scroller'] =  scrollerInstance;
			return;
		}
		else if($KG["nativeScroll"] && type == "Form")
		{
			var forms = document.forms;
			var curForm = forms[0];
			if(forms.length == 2)
				curForm = forms[1];	// Pick right form in case of overlay transitions
			//$KW.Scroller.setHeight(curForm.id, true);
			return;
		}
		 
		
		for (var i = 0; i < scrollerNodes.length; i++) 
		{
			var _scrollerId = scrollerNodes[i].id;
			var scrollerId = _scrollerId.substring(0, _scrollerId.lastIndexOf("_"));
			
			// Read attributes from scroller
			var _scrollerDOMNode = scrollerNodes[i];
			var scrollerDOMNode = document.getElementById(scrollerId);
			var widgetType = _scrollerDOMNode.getAttribute("widgetType");
			var swipeDirection = _scrollerDOMNode.getAttribute("swipeDirection");
			var pf = scrollerDOMNode.getAttribute("kformname") || scrollerId;
			var formModel;
			pf && (formModel = $KG.allforms[pf]);
		
			var options = {};
			options.checkDOMChanges = true;
			if (swipeDirection == "vertical") 
			{
				options.vScroll = true;
				options.scrollbox = true;
				//options.vScrollbar = true;
			}
			else if (swipeDirection == "horizontal") 
			{
				options.hScroll = true;
				options.scrollbox = true;
				//options.hScrollbar = true;
			}
			else 	// both
			{
				options.vScroll = true;
				//options.vScrollbar = true;
				options.hScroll = true;
				//options.hScrollbar = true;
				options.scrollbox = true;
			}
			
			if (widgetType == "form") 
			{
				$KW.Scroller.setHeight(scrollerId);
				options.vScrollbar = true;
				options.formid = scrollerId;
				options.scrollbox = false;
				options.bounce = formModel.scrollbounce != undefined ? formModel.scrollbounce : true;
			}
			// scrollbox
			else
			{
				var widgetModel = $KU.getModelByNode(scrollerDOMNode);
				
				options.scrollbox = true;
				options.formid = widgetModel.pf;
				if(widgetModel.screenLevelWidget)
				{ 
					var hasScroll = formModel.wType == "Popup" ? formModel.enableScroll : true;
					var formScroller = document.getElementById(options.formid+"_scroller");
					if(hasScroll && formScroller) _scrollerDOMNode.style.height = formScroller.offsetHeight + "px";
				}
				options.bounce = widgetModel.scrollbounce != undefined ? widgetModel.scrollbounce : true;
				options.disableUserScroll = (widgetModel.scrolldirection == constants.SCROLLBOX_SCROLL_NONE);
				/*
				if(formModel.wType != "Form")
					options.headerFooter = true;
				*/

				if(widgetModel.scrollbar == "arrows")
				{
					options.showImages = true;
					options.widgetID = widgetModel.id;
				}
				else if(widgetModel.scrollbar == "scrollbar")
				{
					if(widgetModel.autohidescrollbar === false)
						options.hideScrollbar = false;
					if(swipeDirection == "horizontal")
						options.hScrollbar = true;
					else if(swipeDirection == "vertical")
						options.vScrollbar = true;
					else if(swipeDirection == "both")
					{
						options.hScrollbar = true;
						options.vScrollbar = true;
					}
				}
	
				// scorolling events
				var scrollingEvents = widgetModel.scrollingevents;
				if(scrollingEvents)
				{
					var pullDownEl,	pullUpEl, pullInitFlag, pushInitFlag;
					var pullDownOffset = 0, pullUpOffset = 0;
					var onRefresh = "", onScrollMove = "", onScrollEnd = "";
					var scrollerPrefix = "#" + widgetModel.pf + "_" + widgetModel.id + "_scroller ";
					
					pullDownEl = document.querySelector(scrollerPrefix + "#pullDown");
					pullDownEl && (pullDownOffset = pullDownEl.offsetHeight);
					pullUpEl = document.querySelector(scrollerPrefix + "#pullUp");
					pullUpEl && (pullUpOffset = pullUpEl.offsetHeight);
					
					!scrollingEvents.onpull && (pullInitFlag = true);
					!scrollingEvents.onpush && (pushInitFlag = true);
				
					onRefresh =  function() {
						if(pullDownEl && pullDownEl.className.match('loading')) 
						{
							pullDownEl.className = '';
							document.querySelector(scrollerPrefix + ".pullDownLabel").innerHTML = "Pull down to refresh..";
						} 
						else if(pullUpEl && pullUpEl.className.match('loading')) 
						{
							pullUpEl.className = '';
							document.querySelector(scrollerPrefix + ".pullUpLabel").innerHTML = "Pull up to refresh..";
						}
					};
					onScrollMove = function(){
						if(pullDownEl)
						{
							if(((this.options.vScroll && this.y>5) || (this.options.hScroll && this.x>5)) && !pullDownEl.className.match('flip'))
							{
								pullDownEl.className = 'flip';
								pullInitFlag = false;
								document.querySelector(scrollerPrefix + ".pullDownLabel").innerHTML = "Release to refresh..";
								if(this.options.vScroll)
									this.minScrollY = 0;
								else
									this.minScrollX = 0;
							} 
							else if(((this.options.vScroll && this.y<5) || (this.options.hScroll && this.x<5)) && pullDownEl.className.match('flip'))
							{
								pullDownEl.className = '';
								document.querySelector(scrollerPrefix + ".pullDownLabel").innerHTML = "Pull down to refresh..";
								if(this.options.vScroll)
									this.minScrollY = -this.pullDownOffset;
								else
									this.minScrollX = -this.pullDownOffset;
							}
						}
						if(pullUpEl)
						{
							if(((this.options.vScroll && this.y < (this.maxScrollY - 5 - this.pullUpOffset)) || (this.options.hScroll && this.x < (this.maxScrollX - 5 - this.pullUpOffset))) && !pullUpEl.className.match('flip'))
							{
								pullUpEl.className = 'flip';
								pushInitFlag = false;
								document.querySelector(scrollerPrefix + ".pullUpLabel").innerHTML = "Release to refresh..";
								if(this.options.vScroll)
									this.maxScrollY -= this.pullUpOffset;
								else
									this.maxScrollX -= this.pullUpOffset;
							} 
							else if(((this.options.vScroll && this.y > (this.maxScrollY + 5)) || (this.options.hScroll && this.x > (this.maxScrollX + 5))) && pullUpEl.className.match('flip'))
							{
								pullUpEl.className = '';
								document.querySelector(scrollerPrefix + ".pullUpLabel").innerHTML = "Pull up to refresh..";
								this.maxScrollY = this.maxScrollY /*+ this.pullUpOffset*/;
							}
						}
					};
					onScrollEnd = function(){
						if(((this.options.vScroll && this.y >= this.minScrollY) || (this.options.hScroll && this.x >= this.minScrollX)) && pullInitFlag)
						{
							var model = $KU.getModelByScroller(this.wrapper.id);
							if(typeof model  === "undefined")
                                return;
							console.log("On Reach beginning");
							// Dispatch user event
							var handler = $KU.returnEventReference(model.scrollingevents.onreachingbeginning);
							handler && handler.call(model, model);
						}
						if(pullDownEl && pullDownEl.className.match('flip'))
						{
							pullDownEl.className = 'loading';
							document.querySelector(scrollerPrefix + ".pullDownLabel").innerHTML = 'Loading..';				
							$KW.Scroller.pullAction.call(this, "DOWN");	// Execute custom (ajax) function
						}

						if(((this.options.vScroll && this.y <= this.maxScrollY) || (this.options.hScroll && this.x <= this.maxScrollX)) && pushInitFlag)
						{
							var model = $KU.getModelByScroller(this.wrapper.id);
							if(typeof model  === "undefined")
                                return;
							console.log("On Reach end");
							// Dispatch user event
							var handler = $KU.returnEventReference(model.scrollingevents.onreachingend);
							handler && handler.call(model, model);
						}
						if(pullUpEl && pullUpEl.className.match('flip'))
						{
							pullUpEl.className = 'loading';
							document.querySelector(scrollerPrefix + ".pullUpLabel").innerHTML = 'Loading..';
							$KW.Scroller.pullAction.call(this, "UP");	// Execute custom (ajax) function
						}

						// Reset state
						if(!pullInitFlag)
							pullInitFlag = true;
						if(!pushInitFlag)
							pushInitFlag = true;
					};

					// Extend options
					$KU.extend(options, {
						topOffset: pullDownOffset,
						bottomOffset: pullUpOffset,
						onRefresh: onRefresh,
						onScrollMove: onScrollMove,
						onScrollEnd: onScrollEnd}
					);
				}
			}
			
			// disable form scrolling when scrolled in a vbox / hbox
			if(widgetType == "vbox") // || widgetType == "hbox")
				options.onBeforeScrollStart = $KW.Scroller.onBeforeScrollStartHandler();
			
			// Turning of transform if the form contains select
			if (formModel && typeof(formModel.useTransform) == 'boolean') 
				options.useTransform = formModel.useTransform;
			
			var selects = document.querySelectorAll("#" + $KG["__currentForm"].id + " select");
			if(selects.length > 0 && widgetType == "form")
			{
				//alert("switching to non transform");
				options.useTransform = false;
			}
			
			var scrollerInstance = new $KW.touch.konyScroller(scrollerId + '_scroller', options);
			
			
			if (widgetType == "form")
			{
				var headerId = $KG.allforms[scrollerId].header;
				var footerId = $KG.allforms[scrollerId].footer;

				// Listen to external DOM changes every 1s
				$KG.allforms[scrollerId].scrollerTimer = setInterval(function(sID) {
					return function()
					{
						$KW.Scroller.checkDOMChanges(sID + "_scroller", headerId, footerId);
					};
				}(scrollerId), 1000);

			}
			
			if (swipeDirection == "horizontal" || swipeDirection == "both")
			{
				if(_scrollerDOMNode.children[0].scrollWidth !=0)
				{
					//_scrollerDOMNode.children[0].style.width = _scrollerDOMNode.children[0].clientWidth + "px";
					_scrollerDOMNode.children[0].style.width = _scrollerDOMNode.children[0].scrollWidth + "px";
					scrollerInstance.refresh();
				}
			}
			
			// Save scroller instance
			$KG[scrollerId + '_scroller'] = scrollerInstance;
		}
	},
	
    destroyFormScroller: function(formId){
    
        if($KG["stickyScroll"]){
			var scrollerInstance = $KG[formId  + '_scroller'];
			scrollerInstance && scrollerInstance.destroy();
			$KG[formId  + '_scroller'] = "";
        }
		
		var	scrollerNodes = document.querySelectorAll("#" + formId + "[kwidgettype='KFormScroller'] ,#" + formId + " div[kwidgettype='KFormScroller']")
        for (var i = 0; i < scrollerNodes.length; i++) 
		{
            var _scrollerId = scrollerNodes[i].id;
            var scrollerInstance = $KG[_scrollerId];
            scrollerInstance && scrollerInstance.destroy();
			$KG[_scrollerId] = "";
        }
    }, 
	
    destroyScrollBoxes: function(formId){
    
        var scrollerNodes = document.querySelectorAll("#" + formId + " div[kwidgettype='KScrollBox']")
        for (var i = 0; i < scrollerNodes.length; i++) {
            var _scrollerId = scrollerNodes[i].id;
            var scrollerInstance = $KG[_scrollerId];
            scrollerInstance && scrollerInstance.destroy();
        }
    },

    destroyImageStripStripViews: function(formId){

		var stripNodes = document.querySelectorAll("#" + formId + " div[name='ImageStrip_StripView']");
        for (var i = 0; i < stripNodes.length; i++) 
		{
			var widgetModel = $KU.getModelByNode(stripNodes[i]);
			var scrollerInstance = widgetModel.scrollInstance;
			if(scrollerInstance)
			{
				scrollerInstance.destroy();
				// Nullify instance
				widgetModel.scrollInstance = null;
			}
		}
    },
	
	initializePageViews: function(formId)
	{
	    // Imgstrip, segment swipe is not supported for BB NTH || WP9 || IE9
		if($KG["disableTransition"])
			return;
	    
		var	swipeElements = document.querySelectorAll("#" + formId + " div[name='touchcontainer_HStrip'], #" + formId + " div[name='touchcontainer_Segment']");
	    
        
		for (var i = 0; i < swipeElements.length; i++) 
		{
			var swipeElement = swipeElements[i];
			var widgetModel = $KU.getModelByNode(swipeElement);
			// event mechanism
			var options = {};
			options.widgetModel = widgetModel;
			var pScrollerInstance = new $KW.touch.pageviewScroller(swipeElement, options);
			$KG[swipeElement.id] =  pScrollerInstance;
		}
	},
	
	destroyPageViews: function(formId){
    
        var scrollerNodes = document.querySelectorAll("#" + formId + " div[name='touchcontainer_HStrip'], #" + formId + " div[name='touchcontainer_Segment']");
        for (var i = 0; i < scrollerNodes.length; i++) {
            var _scrollerId = scrollerNodes[i].id;
            var scrollerInstance = $KG[_scrollerId];
            scrollerInstance && scrollerInstance.destroy();
        }
    },
	
	checkDOMChanges: function(_scrollerId, headerId, footerId)
	{
		var headerNode = document.getElementById(headerId);
		var footerNode = document.getElementById(footerId);
		var appmenuNode = document.getElementById("konyappmenudiv");

		var formModel = $KG.allforms[_scrollerId.split("_")[0]];
		
		if(headerNode && (this.headerH != headerNode.offsetHeight) && formModel.dockableheader)
		{
			var _scrollerDOMNode = document.getElementById(_scrollerId);
			var scrollerInstance = $KG[_scrollerId];
			
			if(_scrollerDOMNode && scrollerInstance)
			{
				this.headerH = headerNode.offsetHeight;
				_scrollerDOMNode.style.top = headerNode.offsetHeight + "px";
				scrollerInstance.refresh();
				$KW.Scroller.setSLWHeight(formModel, _scrollerDOMNode);
			}
		}	
		if(footerNode && (this.footerH != footerNode.offsetHeight) && formModel.dockablefooter)
		{
			var _scrollerDOMNode = document.getElementById(_scrollerId);
			var scrollerInstance = $KG[_scrollerId];
			
			if(_scrollerDOMNode && scrollerInstance)
			{
				this.footerH = footerNode.offsetHeight;
				_scrollerDOMNode.style.bottom = footerNode.offsetHeight + "px";
				scrollerInstance.refresh();
				$KW.Scroller.setSLWHeight(formModel, _scrollerDOMNode);
			}
		}		
		if(formModel.wType !="Popup" && appmenuNode && (this.appmenuH != appmenuNode.offsetHeight) && formModel.dockableappmenu)
		{
			var _scrollerDOMNode = document.getElementById(_scrollerId);
			var scrollerInstance = $KG[_scrollerId];
			
			if(_scrollerDOMNode && scrollerInstance)
			{
				this.appmenuH = appmenuNode.offsetHeight;
				_scrollerDOMNode.style.bottom = appmenuNode.offsetHeight + "px";
				scrollerInstance.refresh();
				$KW.Scroller.setSLWHeight(formModel, _scrollerDOMNode);
			}
		}
		
		if(!$KG["relativeScroll"] && $KU.isIOS7){
		
			if(!$KG.activeInput && window.pageYOffset > 0){
				window.scrollTo(0, 0);
			}	
			
			//The resize event is not firing anymore when the toolbar is appearing/disappearing in IOS7 (landscape mode).
			if($KG["__currentForm"] && $KG["__orientation"] == "landscape" && !$KG.activeInput){
				var main = $KU.getElementById($KG["__currentForm"].id + "_container");
				if(main && main.offsetHeight > window.innerHeight){					
					main.style.height = window.innerHeight + "px";					
					var scrollerInstance = $KG[_scrollerId];
					scrollerInstance.refresh();
					$KW.ScrollBox.adjustBoxDimensions(_scrollerId);
					var popup = document.querySelector("div[class~='popupmain']");
					if(popup){
						var id = popup.id;
						popup = popup.children[1];
						var model = window[id.substr(0, id.indexOf("_"))];
						if(model && model.wType == 'Popup'){
							var scrollModel = window[scrollerInstance.options.formid];
							if(scrollModel){
								scrollerInstance = (scrollModel.wType == 'Form') ? $KG[model.id + "_scroller"] : $KG[$KG["__currentForm"].id + "_scroller"];
								scrollerInstance && scrollerInstance.refresh();
							}
							$KW.Popup.adjustPopupDimensions(model, popup);
						}
					}
					var _scrollerDOMNode = document.getElementById(_scrollerId);
					if(_scrollerDOMNode){
						$KW.Scroller.setSLWHeight(formModel, _scrollerDOMNode, true);
					}
				}
			}
		}	
	},
	
	setSLWHeight : function( formModel, _scrollerDOMNode, needRefresh)
	{
		var slwModel = $KU.getScreenLevelWidgetModel(formModel);
		if(slwModel) 
		{
			var sLWidget = $KU.getNodeByModel(slwModel);
			if(sLWidget){
				//scroller is set for only segment and not for other ScreenLevelWidgets. 
				if(slwModel.wType == 'Segment')	
					sLWidget = sLWidget.parentNode.parentNode;
				sLWidget.style.height = _scrollerDOMNode.offsetHeight + 'px';
				if(!$KG["relativeScroll"] && $KU.isIOS7 && needRefresh){
					var scrollerInstance = $KG[sLWidget.id];
					scrollerInstance && scrollerInstance.refresh();
				}
			}
		}
	},
	
	setHeight: function(scrollerId, nativeScroll)
	{
		/*
		 Header
		 |
		 Form
		 |
		 Footer
		 |
		 AppMenu
		 */
		 
		var _scrollerDOMNode;
		if(nativeScroll)
			_scrollerDOMNode = document.getElementById(scrollerId);
		else
			_scrollerDOMNode = document.getElementById(scrollerId + "_scroller");
		if(!_scrollerDOMNode)
			return;

		this.headerH = 0;
		this.footerH = 0;
		this.appmenuH = 0;

		
		var formModel = $KG.allforms[scrollerId];	
		var headerId = formModel.header;
		var footerId = formModel.footer;
		//var appmenuId = $KG.appmenu;
		//var appmenuId = "konyappmenudiv";
		
		//var headerId = "header_container";
		//var footerId = "footer_container";
		var appmenuId = "konyappmenudiv";
		
		if($KG.transitAll) {
			header = $KU.getElementById(scrollerId + "_header");
			footer = $KU.getElementById(scrollerId + "_footer");
		}
		else {
			header = $KU.getElementById("header_container");
			footer = $KU.getElementById("footer_container");
		}
		
		/*
		if($KG.transitAll)
		{
			var formSelector = scrollerId + "_container";
			var header = document.querySelectorAll("#" + formSelector + " #" + headerId)[0];
			var footer = document.querySelectorAll("#" + formSelector + " #" + footerId)[0];
		}
		else
		{
			var header = document.getElementById(headerId);
			var footer = document.getElementById(footerId);
		}
		*/

		var appmenu = document.getElementById(appmenuId);
		
		if(header  && formModel.dockableheader) 
			this.headerH = header.offsetHeight;
		
		if(formModel.wType !="Popup" && appmenu && formModel.dockableappmenu)
		{
			this.appmenuH = appmenu.offsetHeight;
		}
		if(footer && formModel.dockablefooter)
		{
			this.footerH = footer.offsetHeight;
			footer.style.bottom = this.appmenuH + "px";
		}
		
		_scrollerDOMNode.style.top = this.headerH + 'px';
		_scrollerDOMNode.style.bottom = this.footerH + this.appmenuH + 'px';
		
		$KW.Scroller.setSLWHeight(formModel, _scrollerDOMNode);
		
		nativeScroll && (_scrollerDOMNode.style.paddingBottom = this.footerH + this.appmenuH + 'px');
	},
	
	onBeforeScrollStartHandler: function(){
		return function(e){
			/*
			var target = e.target || e.srcElement;
			while (target.nodeType != 1) 
				target = target.parentNode;
			// TODO: Extend list for focusable elements as desired
			//if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
			kony.events.preventDefault(e);
			*/
			kony.events.stopPropagation(e);	//  Prevent propagation in case of scrollable vBox n hBox
		}
	},

	pullAction: function(dir) {
		var that = this;
		that.refreshDisabled = true;
		setTimeout(function () 
		{
			var model = $KU.getModelByScroller(that.wrapper.id);
			if(typeof model  === "undefined")
                return;
			// Dispatch user event
			if(model.scrollingevents)
			{
				var handler;
				if(dir == "UP")
				{
					console.log("On Push");
					handler = $KU.returnEventReference(model.scrollingevents.onpush);
				}
				else
				{
					handler = $KU.returnEventReference(model.scrollingevents.onpull);
					console.log("On Pull");
				}
				handler && handler.call(model, model);
				that.refreshDisabled = false;
			}
			that.refresh();
		}, 500);
	}
}