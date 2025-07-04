// Execute when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get all price option elements
  const options = document.querySelectorAll("[data-price]");

  // Element to display total price
  const totalPrice = document.getElementById("total-price");

  // Get all radio buttons with name "unit"
  const radios = document.querySelectorAll('input[type="radio"][name="unit"]');

  // Button to add item to cart
  const addToCartBtn = document.getElementById("add-to-cart");

  // Popup modal elements
  const popup = document.getElementById("popup-modal");
  const closePopupBtn = document.getElementById("close-popup");

  // Handle option selection (when clicked)
  function selectOption(option) {
    options.forEach((opt) => opt.classList.remove("selected"));

    // Add 'selected' class to the clicked one
    option.classList.add("selected");

    // Update the price display
    const price = option.dataset.price;
    if (price) {
      totalPrice.textContent = `$${price} USD`;
    }

    // Check the corresponding radio button
    const radio = option.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
    }
  }

  // When any option is clicked
  options.forEach((option) => {
    option.addEventListener("click", () => selectOption(option));
  });

  // When radio button is changed manually
  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      const parentOption = this.closest("[data-price]");
      if (parentOption) {
        selectOption(parentOption);
      }
    });
  });

  // Show popup on 'Add to Cart' button click
  addToCartBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Close popup on 'X' button click
  closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close popup if user clicks outside the popup box
  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
