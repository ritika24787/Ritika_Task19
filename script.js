
// Services list
let services = [
    {
        name: "Hair Cutting",
        price: 300,
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500"
    },
    {
        name: "Spa Service",
        price: 800,
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500"
    },
    {
        name: "Facial",
        price: 500,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500"
    },
    {
        name: "Massage",
        price: 1000,
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500"
    }
];

// Empty cart
let cart = [];

// Get HTML elements
let serviceList = document.getElementById("service-list");
let cartItems = document.getElementById("cart-items");
let total = document.getElementById("total");

// Show all services
function showServices() {

    serviceList.innerHTML = "";

    services.forEach(function(service, index) {

        let card = document.createElement("div");
        card.className = "service-card";

        card.innerHTML = `
            <img src="${service.image}" alt="${service.name}">

            <div class="service-info">
                <h3>${service.name}</h3>
                <p class="price">₹${service.price}</p>

                <button class="add-item" onclick="addItem(${index})">
                    Add Item
                </button>

                <button class="skip-item" onclick="skipItem(${index})">
                    Skip Item
                </button>
            </div>
        `;

        serviceList.appendChild(card);
    });
}

// Add service to cart
function addItem(index) {

    cart.push(services[index]);

    showCart();
}

// Skip a service
function skipItem(index) {

    services.splice(index, 1);

    showServices();
}

// Display cart items and total amount
function showCart() {

    cartItems.innerHTML = "";

    let amount = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>No items added yet.</p>";
    }

    cart.forEach(function(item) {

        let div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        `;

        cartItems.appendChild(div);

        amount = amount + item.price;
    });

    total.innerText = amount;
}

// Add to Cart button
document.getElementById("add-cart").addEventListener("click", function() {

    if (cart.length === 0) {
        alert("Please add a service first!");
    } else {
        alert("Services added to your cart!");
    }

});

// Book Now button
document.getElementById("book-now").addEventListener("click", function() {

    if (cart.length === 0) {
        alert("Please select a service first!");
    } else {
        document.getElementById("booking-form").scrollIntoView({
            behavior: "smooth"
        });
    }

});

// Booking form
document.getElementById("my-form").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    if (cart.length === 0) {
        alert("Please select a service first!");
        return;
    }

    alert("Thank you " + name + "! Your booking is confirmed.");

    cart = [];

    showCart();

    document.getElementById("my-form").reset();

});

// Logout button
document.querySelector(".logout").addEventListener("click", function() {

    alert("You have logged out!");

});

// Show services when page loads
showServices();
showCart();
