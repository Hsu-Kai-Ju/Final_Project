function minus(index) {
    var qty = document.getElementById('qua' + index);
    if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
        updateTotal();
    }
}

function add(index) {
    var qty = document.getElementById('qua' + index);
    qty.value = parseInt(qty.value) + 1;
    updateTotal();
}


function updateTotal() {
    var quantities = document.querySelectorAll('.qq');
    var prices = [300, 450];
    var subtotal = 0;
    
    quantities.forEach((quantity, index) => {
        subtotal += parseInt(quantity.value) * prices[index];
    });
    
    var shipping = 60; 
    var total = subtotal + shipping;
    
    document.getElementById('sub-price').innerText = subtotal;
    document.getElementById('total').innerText = total;
}

updateTotal();
