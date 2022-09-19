// Assign the constants that will be used such the price and the delivery price
const PRICE = 5.5;
const DELIVERYPRICE = 5;
const MEDIUMFEE = 1;

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
    name: "Macchiato",
    regularPrice: PRICE,
    mediumPrice: PRICE + 1,
    largePrice: PRICE + 2,
  },
  6: {
    name: "White Choc Mocha",
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
    name: "Short Black",
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

var numberofCoffees = [];

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

// Function to show the the products or the coffees that are for sale. In this function it loops through the length of the array called products, and the items that are inside the array is then retrieved and placed into a placeholder within a string. And this string is displayed on the HTML when a button is clicked.
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
                <select name="coffee" id="coffeeSize1" class="coffee-Size-Chosen">
                <option value="${PRODUCT[i].regularPrice.toFixed(2)}">Regular --  $${PRODUCT[i].regularPrice.toFixed(2)}</option>
                <option value="${PRODUCT[i].mediumPrice.toFixed(2)}">Medium --  $${PRODUCT[i].mediumPrice.toFixed(2)}</option>
                <option value="${PRODUCT[i].largePrice.toFixed(2)}">Large --      $${PRODUCT[i].largePrice.toFixed(2)}</option>
                </select>
                </div>
                <div class="amountProduct flex">
                  <select name="amount" id="amountProducts" class="amountChosen">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  </select>
                <button class="btn shop-item-btn" type="button" id="shopItem">ADD</button>
                </div>
                </div>
            </div>
    `;
  }
  menuContainer.innerHTML = menuText; //Inserts the menu text string to menu container
}

// Function that will occur when the user is in the menu page -- write more later
function ready() {
  // Specifies the buttons that when clicked will remove the item that is present or inside the shopping cart
  var removeCartBtns = document.getElementsByClassName("btn-danger");
  for (i = 0; i < removeCartBtns.length; i++) {
    var button2 = removeCartBtns[i];
    button2.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // Specifies the buttons that when clicked will add the chosen items to the shopping cart
  var addItemToCartBtns = document.getElementsByClassName("shop-item-btn");
  for (i = 0; i < addItemToCartBtns.length; i++) {
    var button = addItemToCartBtns[i];
    button.addEventListener("click", addItemToCartClicked);
  }
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}
// Function that will remove items that is present in the shopping cart - please write more things in here
function removeCartItem(event) {
  var btnClicked = event.target;
  btnClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

// In this function, as I have a select HTML tag, I have to get the value that was chosen in that tag. In this case I need a parameter so that I can identify which select tag I am getting it from and this the "div"
function getValueFromSelect(div, name) {
  var selectElement = div.getElementsByClassName(name)[0];
  return selectElement; // Returns the selectElement
}

function checkValid(userInput, errorText) {
  if (!userInput || userInput > 10 || userInput < 1) {
    let errorMessage = document.getElementById("error");
    errorMessage.innerHTML = errorText;
    return false;
  } else {
    errorText = "";
    let errorMessage = document.getElementById("error");
    errorMessage.innerHTML = errorText;
    return userInput;
  }
}

// In this function's job is to get the size that the user has chosen by going through the item, and if the item is the same as the regular price, or the medium price or the large price it wil return that size
function getSize(item) {
  if (item == PRICE) {
    var size = "Regular";
  } else if (item == PRICE + MEDIUMFEE) {
    var size = "Medium";
  } else {
    var size = "Large";
  }
  return size;
}
// Adds item that is clicked to thhe cart, in this function it will have 4 different parameters that is needded to be specified in orde for the function to occur.
function addItemtoCart(title, price, size, quantity) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  // Check if the same items has been added to the shoppning cart
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  var cartItemSize = cartItems.getElementsByClassName("cart-size");
  for (i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title && cartItemSize[i].innerText == size) {
      alert("This is item is already added to the cart");
      return;
    }
  }
  var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-size">${size}</span>
        <span class="cart-price cart-column">$${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="${quantity}"  min="1" max="10"/>
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
  cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged);
}
// Function to add items to cart in this function it will get the information of the coffee that the user has chosen. It will get the name of the coffee, the price, the size that they have chosen, and the quantity that they have picked
function addItemToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("product-name")[0].innerText;
  var selectElement = getValueFromSelect(shopItem, "coffee-Size-Chosen");
  var price = selectElement.options[selectElement.selectedIndex].value;
  var size = getSize(price);
  let getQuantity = getValueFromSelect(shopItem, "amountChosen");
  let quantity = getQuantity.options[getQuantity.selectedIndex].value;
  console.log(title, price, size, quantity);
  addItemtoCart(title, price, size, quantity);
  updateCartTotal();
}

// Function to update the cart total whenever the user adds or removes items to the cart
function updateCartTotal() {
  var cartItemContainer = document.getElementById("shoppingCart");
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = `$${total.toFixed(2)}`;
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
  let askNumber = document.getElementById("askNumber");
  let shoppingCart = document.getElementById("shoppingCart");
  let howManyCoffees = document.getElementById("howManyCoffees");

  startOrder.addEventListener("click", function (e) {
    e.preventDefault();
    // Check if the entered number of coffees is valid
    var numOfCoffees = checkValid(howManyCoffees.value, "Please enter an appropriate amount of coffees you are going to buy. Maximum of 10 coffees per order only");
    if (!numOfCoffees) {
      return;
    }
    // Store the entered number of coffees that the user are buying to an array
    numberofCoffees.push(numOfCoffees);
    alert(numberofCoffees[0]);
    startOrder.classList.add("hide");
    shoppingCart.classList.remove("hide");
    askNumber.classList.add("hide");
    showMenu();

    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", ready);
    } else {
      ready();
    }
  });
}
