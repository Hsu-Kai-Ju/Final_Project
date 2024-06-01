
function goCart() {
    var cartMenu = document.getElementById('cart-menu');
    cartMenu.classList.toggle('active');
}

function minus(index) {
    var qty = document.getElementById('qty' + index);
    if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
        updateTotal();
    }
}

function add(index) {
    var qty = document.getElementById('qty' + index);
    qty.value = parseInt(qty.value) + 1;
    updateTotal();
}

function updateTotal() {
    var quantities = document.querySelectorAll('.qua');
    var prices = [300, 450];
    var total = 0;
    quantities.forEach((quantity, index) => {
        total += parseInt(quantity.value) * prices[index];
    });
    document.getElementById('total-price').innerText = "NT$" + total;
}


