// Cart //
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
var cartShowing = false;

// Toggle Cart //
cartIcon.onclick = (event) => {
    event.preventDefault()
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
let miniCartCounter = document.querySelector('.checkout-amount');
let cartContent = document.querySelector('.cart-content');
let emptyCartContent = document.querySelector('.empty-cart-content');
let cartPrice = document.querySelector('.total')



// Increment or decrement on click //
increment.onclick = (event) => {
    event.preventDefault()
    sendToCart++;
    updateCounter();
};
decrement.onclick = (event) => {
    event.preventDefault()
    sendToCart--;
    if (sendToCart < 0) {
        sendToCart = 0;
    }
    updateCounter();

};

// Changes innerHTML of counter button //

let sendToCart = 0;
let itemsInCart = 0;
let itemPrice = 125
let finalPrice = 0

function updateCounter() {
    counter.innerHTML = sendToCart;
    miniCartCounter.innerHTML = itemsInCart;
    if (itemsInCart == 0) {
        cartContent.classList.add('empty');
        miniCartCounter.classList.add('none');
        emptyCartContent.classList.remove('empty');
    } else {
        cartContent.classList.remove('empty');
        miniCartCounter.classList.remove('none');
        emptyCartContent.classList.add('empty');
    }
    finalPrice = itemsInCart * itemPrice;
    cartPrice.innerHTML = "$" + itemPrice + " x " + itemsInCart + "<b>  $" + finalPrice + "</b>";


}


// Transfers items to the cart then resets counter //
addToCart.onclick = (event) => {
    event.preventDefault()
    itemsInCart += sendToCart;
    sendToCart = 0;
    updateCounter();

};

// Delete Cart //

let removeCartItems = document.querySelector('.cart-remove');

removeCartItems.onclick = (event) => {
    event.preventDefault()
    itemsInCart = 0;
    updateCounter();
}


updateCounter();

let checkoutButton = document.querySelector('.btn-checkout');

checkoutButton.onclick = (event) => {
    event.preventDefault()
    cart.classList.remove("active");
    cartShowing = false;
    itemsInCart = 0;
    updateCounter();

}

// Dropdown Menu and Lightbox //

let dropdownButton = document.querySelector('.toggle_btn');
let dropdownMenu = document.querySelector('.dropdown-menu');
let closeMenuButton = document.querySelector('.menu-close-button');
let openLightBox = document.querySelector('.open-lightbox-button');
let lightboxContainer = document.querySelector('.lightbox');
let lightboxClose = document.querySelector('.lightbox-close-button');
let lightboxPrev = document.querySelector('.lightbox-previous-button');
let lightboxNext = document.querySelector('.lightbox-next-button');
let mainPrev = document.querySelector('.main-previous-button');
let mainNext = document.querySelector('.main-next-button');
let headerMainImage = document.querySelector('#header-image');
let lightboxMainImage = document.querySelector('.lightbox-header-image');
lightboxContainer.classList.add('hide');

dropdownButton.onclick = (event) => {
    event.preventDefault()
    dropdownMenu.classList.add('active');

}

closeMenuButton.onclick = (event) => {
    event.preventDefault()
    dropdownMenu.classList.remove('active');
}


// Lightbox //

openLightBox.onclick = (event) => {
    event.preventDefault()
    lightboxContainer.classList.remove('hide');
}

lightboxClose.onclick = (event) => {
    event.preventDefault()
    lightboxContainer.classList.add('hide');
}

let currentImageId = 0;
let imagesArray = ["image-product-1", "image-product-2", "image-product-3", "image-product-4"]
let thumbsArray = []
let thumbsLightboxArray = []

for (let index = 0; index < imagesArray.length; index++) {
    thumbsArray.push(document.querySelector('#thumbnail-' + (index + 1)))
    thumbsLightboxArray.push(document.querySelector('#lightbox-thumbnail-' + (index + 1)))
}

for (let index = 0; index < thumbsArray.length; index++) {
    thumbsArray[index].src = "images/" + imagesArray[index] + "-thumbnail.jpg";
    thumbsLightboxArray[index].src = "images/" + imagesArray[index] + "-thumbnail.jpg";

}
lightboxPrev.onclick = (event) => {
    event.preventDefault()
    prevImage();
}

lightboxNext.onclick = (event) => {
    event.preventDefault()
    nextImage();
}

mainPrev.onclick = (event) => {
    event.preventDefault()
    prevImage();
}

mainNext.onclick = (event) => {
    event.preventDefault()
    nextImage();
}

updateLightBox();

function prevImage() {
    currentImageId--;
    if (currentImageId < 0) {
        currentImageId += imagesArray.length;
    }
    updateLightBox();
}

function nextImage() {
    currentImageId++;
    currentImageId %= imagesArray.length;

    updateLightBox();

}

function updateLightBox() {
    console.log(currentImageId)
    lightboxMainImage.src = "images/" + imagesArray[currentImageId] + ".jpg";
    headerMainImage.src = "images/" + imagesArray[currentImageId] + ".jpg";

    for (let index = 0; index < thumbsArray.length; index++) {
        thumbsArray[index].classList.remove("selected")
        thumbsLightboxArray[index].classList.remove("selected")
    }

    thumbsLightboxArray[currentImageId].classList.add("selected")

}