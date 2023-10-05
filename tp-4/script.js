class Product {
    constructor(name, brand, category) {
        this._name = name;
        this._brand = brand;
        this._category = category;
    }
    
    get name() {
        return this._name;
    }
    
    get brand() {
        return this._brand;
    }
    
    get category() {
        return this._category;
    }
    
    set name(name) {
        this._name = name;
    }
    
    set brand(brand) {
        this._brand = brand;
    }
    
    set category(category) {
        this._category = category;
    }
}

var cartItems = [];

function addProduct(product){
    cartItems.push(product);
    renderCart();
}

function renderCart() {
    console.log("rendering");
    var cart = document.getElementById("cart");
    cart.innerHTML = "";

    for (var i = 0; i < cartItems.length; i++) {
        var listCart = document.createElement('ul');
        listCart.textContent = `Name: ${cartItems[i].name}, Brand: ${cartItems[i].brand}, Category: ${cartItems[i].category}`;

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('data-index', i); // Store the index for removal
        removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
        removeButton.addEventListener('click', removeFromCart);

        listCart.appendChild(removeButton);
        cart.appendChild(listCart);
    }
}
function removeFromCart(event) {
    var indexToRemove = event.target.getAttribute('data-index');
    cartItems.splice(indexToRemove, 1); 
    renderCart();
}
