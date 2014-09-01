define("checkoutDependentTwo", ["cartDependentTwo", "inventoryDependentTwo"], function(cartDependentTwo, inventoryDependentTwo) {
    try {
        alert("Showing return value from define cart function: " + cartDependentTwo.cartDependentTwo);
        alert("Showing return value from define inventory function: " + inventoryDependentTwo.inventoryDependentTwo);
        return {
            "checkoutDependentTwo": "checkout object"
        };
    } catch (e) {
        alert("Exception message: " + e.message);
    }
});
require(["checkoutDependentTwo"], function(checkoutDependentTwo) {
    try {
        alert("In require function");
        alert("Showing return value from define checkout function: " + checkoutDependentTwo.checkoutDependent);
    } catch (e) {
        alert("Exception message: " + e.message);
    }
});