
const itemsData = [
    { id: 1, name: 'Laptop', price: 1200.00, quantity: 1, image: "https://placehold.co/400x300/f1c1b9/white?text=Premium+Leather+Bag" },  
    { id: 2, name: 'Headphones', price: 150.00, quantity: 1, image: "https://placehold.co/400x300/f1c1b9/white?text=Premium+Leather+Bag" },
    { id: 3, name: 'Mouse', price: 25.00, quantity: 1, image: "https://placehold.co/400x300/f1c1b9/white?text=Premium+Leather+Bag" },
    { id: 4, name: 'Airpods', price: 120.00, quantity: 1, image: "https://placehold.co/400x300/f1c1b9/white?text=Premium+Leather+Bag" },
    { id: 5, name: 'Cable', price: 10.00, quantity: 1, image: "https://placehold.co/400x300/f1c1b9/white?text=Premium+Leather+Bag" },
    { id: 6, name: 'Keyboard', price: 50.00, quantity: 1, image: "https://placehold.co/400x300/f1c1b9/white?text=Premium+Leather+Bag" },
    { id: 7, name: 'Cable', price: 10.00, quantity: 1, image: "https://placehold.co/400x300/f1c1b9/white?text=Premium+Leather+Bag" },
    { id: 8, name: 'Keyboard', price: 50.00, quantity: 1, image: "https://placehold.co/400x300/f1c1b9/white?text=Premium+Leather+Bag" }
];

// Function to initialize cart and store items in localStorage
function initialCart() {
    // Check if cart is already in localStorage, otherwise set it to an empty array
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify(itemsData));
    }
    // Load cart items from localStorage
    loadCartItems();
}

// Function to load cart items from localStorage
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartContainer = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');
    let totalAmount = 0;

    // Clear previous cart content
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        // Create item HTML structure
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
            <input type="number" value="${item.quantity}" min="1" class="item-quantity" data-id="${item.id}" />
            <button class="remove-btn" data-id="${item.id}">Remove</button>
        `;
        
        cartContainer.appendChild(itemDiv);
        totalAmount += item.price * item.quantity;
    });

    // Display total amount
    totalElement.textContent = `Total: $${totalAmount.toFixed(2)}`;

    // Attach event listeners to quantity inputs and remove buttons
    const quantityInputs = document.querySelectorAll('.item-quantity');
    const removeButtons = document.querySelectorAll('.remove-btn');

    quantityInputs.forEach(input => {
        input.addEventListener('input', updateQuantity);
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

// Function to update quantity and recalculate total
function updateQuantity(e) {
    const itemId = parseInt(e.target.getAttribute('data-id'));
    const newQuantity = parseInt(e.target.value);
    
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Reload cart items and total
    loadCartItems();
}

// Function to remove item from cart
function removeItem(e) {
    const itemId = parseInt(e.target.getAttribute('data-id'));
    
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    
    localStorage.setItem('cart', JSON.stringify(cart));

    // Reload cart items and total
    loadCartItems();
}

// Function to clear the cart
function clearCart() {
    // Remove cart data from localStorage
    localStorage.removeItem('cart');
    
    // Reload the page to clear items
    loadCartItems();
}

// Add event listener to Clear Cart button
const clearCartButton = document.querySelector('.clear-cart-btn');
clearCartButton.addEventListener('click', clearCart);

// Initial cart setup
initialCart();
