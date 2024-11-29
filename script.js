// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Initialize cart count and total price
let cartCount = 0;
let totalPrice = 0;

// Add click event listener to each "Add to Cart" button
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartCount++;
    updateCartCount(cartCount);

    const product = button.parentNode;
    const title = product.querySelector('h2').textContent;
    const price = parseFloat(product.querySelector('p').textContent.slice(1));
    addToCart(title, price);
  });
});

// Function to update the cart count in the header
function updateCartCount(count) {
  const cartLink = document.querySelector('.cart');
  cartLink.textContent = `Cart Items  (${count})`;
}

// Function to add a product to the cart
function addToCart(title, price) {
  const cartItems = document.querySelector('.cart-items');
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${title} - $${price}</span>
    <button class="increase-quantity"> + </button>
    <button class="decrease-quantity"> - </button>
  `;
  cartItems.appendChild(li);

  totalPrice += price;
  updateTotalPrice(totalPrice);

  const increaseBtn = li.querySelector('.increase-quantity');
  const decreaseBtn = li.querySelector('.decrease-quantity');

  increaseBtn.addEventListener('click', () => {
    cartCount++;
    updateCartCount(cartCount);
    totalPrice += price;
    updateTotalPrice(totalPrice);
  });

  decreaseBtn.addEventListener('click', () => {
    if (cartCount > 0) {
      cartCount--;
      updateCartCount(cartCount);
      totalPrice -= price;
      updateTotalPrice(totalPrice);
    }
  });
}

// Function to update the total price in the cart container
function updateTotalPrice(price) {
  const totalPriceElement = document.querySelector('.total-price');
  totalPriceElement.textContent = `Total Price: $${price.toFixed(2)}`;
}

// Handle the click event for the "Proceed to Buy" button
const proceedToBuyButton = document.querySelector('.proceed-to-buy');
proceedToBuyButton.addEventListener('click', () => {
  if (cartCount > 0) {
    // Redirect to the payment page to complete the payment
    window.location.href = 'payment.html';
  } else {
    alert('Your cart is empty. Please add some products.');
  }
});
