
  
  // Get the "Add to Cart" button
  const addToCartButton = document.getElementById("add-to-cart");

  // Add event listener to the "Add to Cart" button
  addToCartButton.addEventListener("click", function () {
    // Get the quantity input value
    const quantityInput = document.getElementById("quantity-input");
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
      // Create the item object
      const item = {
        image: "https://m.media-amazon.com/images/I/710CHKJ0puL._SX522_.jpg",
        category: "Exterior Parts",
        productName: "Tyre inflator",
        markedPrice: 29.99,
        discountedPrice: 24.99,
        ratings: 4.4,
        quantity: quantity,
      };

      // Save item to local storage
      let cartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
      cartItems.push(item);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      
      // Update UI or perform any other action
      alert("Item added to cart!");
    } else {
      alert("Please enter a valid quantity.");
    }
  });

