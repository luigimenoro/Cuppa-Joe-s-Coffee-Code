// Assign the constants that will be used such the price and the delivery price
const PRICE = 5.5;
const DELIVERYPRICE = 5;
// Assign coffee products
var PRODUCT = {
  1: {
    name: "Cappuccino",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  2: {
    name: "Flat White",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  3: {
    name: "Hot Mocha",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  4: {
    name: "Café Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  5: {
    name: "Café Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  6: {
    name: "White Chocolate Mocha",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  7: {
    name: "Chai Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  8: {
    name: "Vanilla Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  9: {
    name: "Long Black",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  10: {
    name: "Caramel Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  11: {
    name: "Caramel Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  12: {
    name: "Piccolo Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
};

// To identify the length of the array named products as it is a associative array, as simple .length function won't work
let length = function (array) {
  let size = 0;
  // Traversing the array
  for (let key in array) {
    // Checking if key is present
    // in arrays or not
    if (array.hasOwnProperty(key)) {
      size++;
    }
  }

  // Return the size
  return size;
};

// Function to show the the products or the coffees that are for sale
function showMenu() {
  let menuText = "";
  let menuContainer = document.getElementById("menuContainer"); // Get the container where the menu is going to be placed in th HTML file
  // Loops through the length of the product array and adds the items within the product array to the "container" or to the HTML file
  for (i = 1; i < length(PRODUCT) + 1; i++) {
    menuText += `
            <div class="products">
              <h2 class="product-name">${PRODUCT[i].name}</h2> 
              <div class="price-products">
                <p class="price">$${PRODUCT[i].regularPrice.toFixed(2)}</p>
                <div class="choose-size">
                <label for="coffeeSize">Choose your coffee size</label>
                <select name="coffee" id="coffeeSize">
                <option value="regular">Regular -- $${PRODUCT[i].regularPrice.toFixed(2)}</option>
                <option value="medium">Medium -- $${PRODUCT[i].mediumPrice.toFixed(2)}</option>
                <option value="large">Large --$${PRODUCT[i].largePrice.toFixed(2)}</option>
                </select>
                </div>
                <div class="amountProduct flex">
                <select name="amount" id="amountProducts">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                <button class="btn shop-item-btn" type="button">ADD</button>
                </div>
                </div>
            </div>
    `;
  }
  menuContainer.innerHTML = menuText; //Inserts the menu text string to menu container
}

// Check if the user is on the order-information screen - (order-information.html)
if (window.location.href.includes("/order-information.html")) {
  // Specify the varaible of the form
  let deliveryForm = document.getElementById("deliveryForm");
  // Listens to whenever the user clicks the button within the delivery form
  deliveryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get the values that the user has entered within the text inputs
    let nameEntered = document.getElementById("name").value;
    let addressEntered = document.getElementById("address").value;
    let phoneNumEnt = document.getElementById("phoneNumber").value;
    // To identify if the user wanted the order to be pickup
    let pickup = false;
    // Place the varaibles or the entered values to the session storage
    sessionStorage.setItem("name", nameEntered);
    sessionStorage.setItem("address", addressEntered);
    sessionStorage.setItem("phone number", phoneNumEnt);
    sessionStorage.setItem("pickup", pickup);

    // To open the menu.html where the user can choose their coffee
    window.location.assign("menu.html");
  });
}

// Check if the user is on the order-information screen - (order-information.html)
if (window.location.href.includes("/pickup-information.html")) {
  // Specify the variable of the form
  let pickupForm = document.getElementById("pickupForm");
  // Listens to whenever the user clicks the button within the pickup form
  pickupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get the values that the user has entered within the text inputs
    let nameEntered1 = document.getElementById("name").value;
    // To identify if the user wanted the order to be pickup
    let pickup = true;
    // Place the varaibles or the entered values to the session storage
    sessionStorage.setItem("name", nameEntered1);
    sessionStorage.setItem("pickup", pickup);

    // To open the menu.html where the user can choose their coffee
    window.location.assign("menu.html");
  });
}

// Check if the user is on the menu screen - (menu.html)
if (window.location.href.includes("/menu.html")) {
  // Specify the button that is going to be clicked when the user is ready to order
  let startOrder = document.getElementById("startOrder");
  startOrder.addEventListener("click", function (e) {
    e.preventDefault();
    showMenu();
    startOrder.classList.add("hide");
  });
}
