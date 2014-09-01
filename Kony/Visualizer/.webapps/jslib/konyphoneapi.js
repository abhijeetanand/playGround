$KI.phone = {

	dial: function(phoneno){
		$KW.unLoadWidget();
		var href;
		var platform = $KU.getPlatform();
		if (platform.name == "iphone" && platform.version >= "5")
			href = "tel://" + phoneno;
		else
			href = "tel:" + phoneno;
		
		window.location.href = href;
	},
	myLocation : function()
	{
		console.warn("DEPRECATED API. Instead use geolocation.");
	}
}