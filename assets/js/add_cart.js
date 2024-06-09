document.addEventListener('DOMContentLoaded', function () {
    var quantityInput = document.querySelector('input[name="quantity"]');
    var addToCartButton = document.querySelector('.button1');
    
    addToCartButton.addEventListener('click', function () {
        var quantity = parseInt(quantityInput.value);
        var product = {
            name: "記．敘 超文青筆記本",
            price: 150,
            quantity: quantity
        };

        addToCart(product);
    });

    function addToCart(product) {
        console.log("添加商品到購物車:", product);
        alert("商品已添加到購物車！");
    }
});