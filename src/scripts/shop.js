function addProductToCart(productName) {
  // Add product to cart
  alert(`${productName} added to cart`);
}

// for every button inside .product, add a click event listener
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        // get the product name
        const productName = this.parentNode.parentNode.querySelector('h3').innerText;
        // call the function with the product name
        addProductToCart(productName);
    });
});