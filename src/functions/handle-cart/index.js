import $ from 'jquery';

function handleOpenCart() {
    const cart = $("#cart-id");
    if(cart.hasClass("app-cart-active")) {
        $("#open-cart").removeClass("app-cart-opened");
        cart.removeClass("app-cart-active");
        $("body").css("overflow-y", "auto");
        return;
    }

    cart.addClass("app-cart-active");
    $("body").css("overflow-y", "hidden");
    $("#open-cart").addClass("app-cart-opened");
}

function handleCloseCart() {
    const cart = $("#cart-id");
    if(cart.hasClass("app-cart-active")) {
        $("#open-cart").removeClass("app-cart-opened");
        $("body").css("overflow-y", "auto");
        setTimeout(() => {
            cart.removeClass("app-cart-active");
        }, 400);
        return;
    }
}

export {handleOpenCart, handleCloseCart};