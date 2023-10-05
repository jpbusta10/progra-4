var wishlistItems = [];

function addToWishList(item) {
    console.log(item)
    if(!wishlistItems.includes(item)){
        wishlistItems.push(item);
        renderWishList();
    }
}

function renderWishList() {
    var wishlist = document.getElementById("wishlist");
    wishlist.innerHTML = ""; 

    for (var i = 0; i < wishlistItems.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = wishlistItems[i];

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.setAttribute("data-item", wishlistItems[i]);
        removeButton.addEventListener("click", removeFromWishList);

        listItem.appendChild(removeButton);
        wishlist.appendChild(listItem);
    }
}
function removeFromWishList(event) {
    var itemToRemove = event.target.getAttribute("data-item");
    wishlistItems = wishlistItems.filter(function (item) {
        return item !== itemToRemove;
    });
    renderWishList(); 
}
        