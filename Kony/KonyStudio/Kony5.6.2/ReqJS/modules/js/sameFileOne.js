define("cartSameFileOne",        
        function() 
        {
        	return {"cartSameFileOne":"Cart object"};
       	}
);

define("inventorySameFileOne",        
        function() 
        {
        	return {"inventorySameFileOne":"Inventory object"};
       	}
);

require(["cartSameFileOne","inventorySameFileOne"], 
		function(cartSameFileOne,inventorySameFileOne){
			alert("Require with two functions as input");
			alert("Showing return value from define cart function: " + cartSameFileOne.cartSameFileOne);
			alert("Showing return value from define inventory function: " + inventorySameFileOne.inventorySameFileOne);
		}
);