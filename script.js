// Cart //
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
var cartShowing = false;

// Toggle Cart //
cartIcon.onclick = () => {
    // Cart is not showing then add active class //
    cart.classList.remove("checkout");
    if (!cartShowing) {

        cart.classList.add("active");
        cartShowing = true;
    }
    // Cart IS showing then remove classlist on-click //
    else {
        cart.classList.remove("active");
        cartShowing = false;
    }
};

// Add to Cart //
let increment = document.querySelector('#increment');
let decrement = document.querySelector('#decrement');
let counter = document.querySelector('#counter');
let addToCart = document.querySelector('#addToCart');
let sendToCart = 0;
let itemsInCart = 0;
let quantityInCart = document.querySelector('.cart-quantity');
let miniCartCounter = document.querySelector('.checkout-amount');



// Increment or decrement on click //
increment.onclick = () => {
    sendToCart++;
    updateCounter();
};
decrement.onclick = () => {
    sendToCart--;
    if (sendToCart < 0) {
        sendToCart = 0;
    }
    updateCounter();

};

// Changes innerHTML of counter button //

let itemPrice = 125
let finalPrice = 0
let cartPrice = document.querySelector('.total')

function updateCounter() {
    counter.innerHTML = sendToCart;
    quantityInCart.innerHTML = itemsInCart;
    miniCartCounter.innerHTML = itemsInCart;
    if (itemsInCart == 0) {
        miniCartCounter.classList.add('none');
    } else {
        miniCartCounter.classList.remove('none');
    }
    finalPrice = itemsInCart * itemPrice;
    cartPrice.innerHTML = "$ " + finalPrice;


}


// Transfers items to the cart then resets counter //
addToCart.onclick = () => {
    itemsInCart += sendToCart;
    sendToCart = 0;
    updateCounter();



};

// Delete Cart //

let removeCartItems = document.querySelector('.cart-remove');

removeCartItems.onclick = () => {
    itemsInCart = 0;
    updateCounter();
}


updateCounter();

let checkoutButton = document.querySelector('.btn-checkout');

checkoutButton.onclick = () => {
    cart.classList.remove("active");
    cartShowing = false;

}