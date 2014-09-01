define("cart_Two_Dependent",        
        function() 
        {
        	return {"cart_Two_Dependent":"cart object"};
       	}
);

define("inventory_Two_Dependent",        
        function() 
        {
        	return {"inventory_Two_Dependent":"inventory object"};
       	}
);

define("checkout_Two_Dependent",
		["cart_Two_Dependent","inventory_Two_Dependent"],
        function(cart_Two_Dependent,inventory_Two_Dependent) 
        {
        	alert("Showing return value from dependent cart function: " + cart_Two_Dependent.cart_Two_Dependent);
        	alert("Showing return value from dependent inventory function: " + inventory_Two_Dependent.inventory_Two_Dependent);
        	return {"checkout_Two_Dependent":"checkout object"};
       	}
);

require(["checkout_Two_Dependent"], 
		function(checkout_Two_Dependent){
			alert("In require function");
			alert("Showing return value from checkout function: " + checkout_Two_Dependent.checkout_Two_Dependent);
		}
);
