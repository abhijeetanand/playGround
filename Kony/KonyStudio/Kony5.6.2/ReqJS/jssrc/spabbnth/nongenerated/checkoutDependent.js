define("checkoutDependent", ["cartDependent", "inventoryDependent"], function(cartDependent, inventoryDependent) {
    alert("Showing return value from define cart function: " + cartDependent.cartDependent);
    alert("Showing return value from define inventory function: " + inventoryDependent.inventoryDependent);
    return {
        "checkoutDependent": "checkout object"
    };
});
require(["checkoutDependent"], function(checkoutDependent) {
    alert("In require function");
    alert("Showing return value from define checkout function: " + checkoutDependent.checkoutDependent);
});