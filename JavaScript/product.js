const products1 = [
    {
        "name": "Premium Leather Bag",
        "description": "Handcrafted leather bag with multiple compartments and adjustable strap. Ideal for daily use or travel.",
        "price": 129.99,
        "image": "https://placehold.co/400x300/f1c1b9/white?text=Premium+Leather+Bag"
    },
    {
        "name": "Smart Watch Series 5",
        "description": "Advanced smartwatch with GPS, heart rate monitoring, and waterproof design. Comes in multiple colors.",
        "price": 199.99,
        "image": "https://placehold.co/400x300/f1c1b9/white?text=Smart+Watch+Series+5"
    },
    {
        "name": "Wireless Noise Cancellation Headphones",
        "description": "High-fidelity wireless headphones with active noise cancellation and up to 30 hours of battery life.",
        "price": 299.99,
        "image": "https://placehold.co/400x300/f1c1b9/white?text=Wireless+Headphones"
    },
    {
        "name": "Designer UV Sunglasses",
        "description": "Fashionable sunglasses with UV protection and scratch-resistant lenses. Available in various styles.",
        "price": 79.99,
        "image": "https://placehold.co/400x300/f1c1b9/white?text=Designer+Sunglasses"
    },
    {
        "name": "Gourmet Coffee Gift Set",
        "description": "A curated selection of gourmet coffee beans from around the world. Perfect gift for coffee lovers.",
        "price": 49.99,
        "image": "https://placehold.co/400x300/f1c1b9/white?text=Gourmet+Coffee+Gift+Set"
    },
    {
        "name": "Fitness Tracker Bracelet",
        "description": "Waterproof fitness tracker with heart rate monitor, sleep tracking, and smartphone notifications.",
        "price": 89.99,
        "image": "https://placehold.co/400x300/f1c1b9/white?text=Fitness+Tracker+Bracelet"
    },
    {
        "name": "Portable Bluetooth Speaker",
        "description": "Compact Bluetooth speaker with powerful sound and built-in microphone for hands-free calls.",
        "price": 59.99,
        "image": "https://placehold.co/400x300/f1c1b9/white?text=Bluetooth+Speaker"
    },
    {
        "name": "Professional Chef's Knife",
        "description": "High-quality chef's knife made from Damascus steel. Perfect for slicing and dicing in the kitchen.",
        "price": 149.99,
        "image": "https://placehold.co/400x300/f1c1b9/white?text=Chef's+Knife"
    }
]

function displayProducts() {
    // Select the container where you want to display the products (e.g., an element with class 'product-grid')
    const productGrid = document.querySelector('.product-grid');

    // Loop through the products array and create HTML for each product
    products1.forEach(product => {
        // Create a new div element for each product
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        // Create and append the product image
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productElement.appendChild(productImage);

        // Create and append the product name
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productElement.appendChild(productName);

        // Create and append the product description
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productElement.appendChild(productDescription);

        // Create and append the product price
        const productPrice = document.createElement('div');
        productPrice.classList.add('price');
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        productElement.appendChild(productPrice);

        // Create and append the "Add to Cart" button
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart');
        addToCartButton.textContent = 'Add to Cart';
        productElement.appendChild(addToCartButton);

        // Append the product element to the grid
        productGrid.appendChild(productElement);
    });
}

// Call the function to display the products
displayProducts();