define("cart_One_Dependent",        
        function() 
        {
        	return {"cart_One_Dependent":"cart object"};
       	}
);

define("inventory_One_Dependent", 
		["cart_One_Dependent"],       
        function(cart_One_Dependent) 
        {
        	alert("Showing return value from dependent cart function: " + cart_One_Dependent.cart_One_Dependent);
        	return {"inventory_One_Dependent":"inventory object"};
       	}
);

require(["inventory_One_Dependent"], 
		function(inventory_One_Dependent){
			alert("In require function");
			alert("Showing return value from inventory function:" + inventory_One_Dependent.inventory_One_Dependent);
		}
);