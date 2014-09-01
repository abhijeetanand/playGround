define("checkout", ["cart", "inventory"], function(cart, inventory) {
    alert("Showing return value from define cart function: " + cart.cart);
    alert("Showing return value from define inventory function: " + inventory.inventory);
    return {
        "checkout": "checkout object"
    };
});
require(["checkout"], function(checkout) {
    alert("In require function");
    alert("Showing return value from define checkout function: " + checkout.checkout);
});