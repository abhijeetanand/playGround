define("cartSameFile",        
        function() 
        {
        	return {"cartSameFile":"Cart object"};
       	}
);

require(["cartSameFile"], 
		function(cartSameFile){
			alert("Require with one function as input");
			alert("Showing return value from define cart function: " + cartSameFile.cartSameFile);
		}
);