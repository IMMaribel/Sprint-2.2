// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    let product = null;
    // Buscar el product por id en el array products
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            product = products[i];
            break;
        }
    }
    if (product) {
        // Validar si el producto ya está en el cart - añadir cantidad +1
        let productInCart = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                cart[i].quantity += 1;
                productInCart = true;
                break;
            }
        }
        // Si el product no está en el cart añadirlo con cantidad 1
        if (!productInCart) {
            cart.push({ ...product, quantity: 1 });
        }
    }

    applyPromotionsCart()
    printCart()

}

// Exercise 2
function cleanCart() {
    
    cart = [];
    printCart()

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    let total = 0;

    for (let i = 0; i < cart.length; i++){
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        
        if (product.offer) {
            let offer = product.offer;

            if (product.quantity >= offer.number) {
                product.subtotalWithDiscount = product.price * product.quantity * (1 - offer.percent / 100);
            } else {
                delete product.subtotalWithDiscount;
            }
        } else {
            delete product.subtotalWithDiscount;
        }
    }
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let cartItems = document.getElementById('cart_list');
    let totalPriceElement = document.getElementById('total_price');
    
    cartItems.innerHTML = '';
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        let subtotal = product.price * product.quantity;
        let subtotalWithDiscount = product.subtotalWithDiscount || subtotal;
            totalPrice += subtotalWithDiscount;

        let row = `
        <tr>
            <th scoop="row">${product.name}</th>
            <td>${product.price.toFixed(2)}$</td>
            <td>${product.quantity}</td>
            <td>${subtotalWithDiscount.toFixed(2)}$</td>
        </tr>
        `;
        cartItems.insertAdjacentHTML('beforeend', row);
    }

    totalPriceElement.textContent = totalPrice.toFixed(2);
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}