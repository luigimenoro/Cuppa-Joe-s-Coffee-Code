// Assign the constants that will be used such the price and the delivery price, the medium fee and the large fee
const PRICE = 5.5;
const DELIVERYPRICE = 5;
const MEDIUMFEE = 1;
const LARGEFEE = 2;
const MAXCOFFEE = 10;

// Assign coffee products
var PRODUCT = {
  1: {
    name: "Cappuccino",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  2: {
    name: "Flat White",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  3: {
    name: "Hot Mocha",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  4: {
    name: "Café Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  5: {
    name: "Macchiato",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  6: {
    name: "White Choc Mocha",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  7: {
    name: "Chai Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  8: {
    name: "Vanilla Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  9: {
    name: "Long Black",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  10: {
    name: "Caramel Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  11: {
    name: "Short Black",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
  12: {
    name: "Piccolo Latte",
    regularPrice: PRICE,
    mediumPrice: PRICE + MEDIUMFEE,
    largePrice: PRICE + LARGEFEE,
  },
};

var numberofCoffees = [];
var FINALORDER = [];

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

// To identify the length of the array named products as it is a associative array, a simple .length function won't work
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

// Function that will occur when the user is in the menu page utilises all the functions needed to function.
// In this function, when teh remove cart button has been clicked, it wil run the removeCartItem(), when the quanitity input has been changed it will run the quantityChanged() function, if the add item to cart button has been clicked it wil run the addItemToCartClicked() funciton
// if the purchase button has been clicked, it will run the purchaseClicked() function, if the cancel order button has been clicked it will open the home page, and alert the user that the order will be cancelled. And lastly if the add another order button has been clicked, it will ask go throough the whole process froom the top.
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

  // If the purchase button has been clicked it will run the purchaseClicked() function
  document.getElementById("buyItems").addEventListener("click", purchaseClicked);

  // If the cancel button has been clicked it will redirect the user to the index.html
  document.getElementById("cancelOrder").addEventListener("click", function (e) {
    e.preventDefault();
    numberofCoffees.splice(0);
    alert("Cancelling the order");
    // To open the the index.html when the user clicks the cancel order
    window.location.assign("index.html");
  });

  // If the add another button is clicked
  document.getElementById("addAnotherOrder").addEventListener("click", function (e) {
    e.preventDefault;
    // To open the the index.html when the user clicks the the add another order button
    window.location.assign("index.html");

    var menuContainer = document.getElementById("mainCont ");
    menuContainer.style.display = "flex";
  });
}

// Checks if the purchase button has been clicked, if it is then it will either check if the shopping cart consists of items, it will check if the item quantity inside the shopping cart is greater than the number of coffees that the user have entered
function purchaseClicked() {
  var cartItems = document.getElementsByClassName("cart-items")[0]; // Specify the first cart item on the shopping cart
  var menuContainer = document.getElementById("mainCont "); // Get the menu container from the HTML
  var orderFinalInfo = document.getElementById("orderFinalInfo");
  var lastBtns = document.getElementById("lastBtns");

  // If there is no items found in the shopping cart alert the user saying that there is no items in their shopping cart
  if (cartItems.childNodes.length <= 0) {
    alert("You have not added any items to your shopping cart");

    // Else if the number of items present in teh shopping cart exceeds the number of coffees that they said they were going to buy, alert  the user saying they have exceededd the number of coffees they have entered.
  } else if (checkedQuantity() > numberofCoffees[0]) {
    alert(`You have exceeded the number of coffee that you have entered. 
Please reduce your shopping cart quantity to maximum of ${numberofCoffees[0]} coffees or less`);

    // However if the numebr of items in their shopping cart is greater than one, and is equal or less than the number of coffees that they said that they were going to buy. Will accept the order, and redirect the user to the final order information section.
  } else if (cartItems.childNodes.length >= 1) {
    alert(`Thankyou for you purchase `);
    menuContainer.style.display = "none";
    orderFinalInfo.classList.remove("hide");
    lastBtns.classList.remove("hide");
    orderInformation();
    orderInfoFinal();
  }
}

// Function final message or order confirmation, in this function it will identify whether the user has chosen their order to be either for delivery or for pickup.
function orderInfoFinal() {
  // Get the the position or the divs where the information will be added within the final section or screen
  var subTotal = document.getElementById("subTotal");
  var deliveryFee = document.getElementById("deliveryFee");
  var totalPriceOrder = document.getElementById("totalPriceOrder");

  // Get the variables
  var costumerName = document.getElementById("costumerName");
  var costumerAddress = document.getElementById("costumerAddress");
  var costumerNumber = document.getElementById("costumerNumber");

  // Get the total price
  var totalPrice = document.getElementsByClassName("cart-total-price")[0];

  // Check if the user has chosen for delivery
  if (sessionStorage.getItem("pickup") == "false") {
    // Codes for adding the information of the user if the user chooses delivery option. In this case, will show the adress and the number of the user
    costumerName.innerText = sessionStorage.getItem("name");
    costumerAddress.innerText = sessionStorage.getItem("address");
    costumerNumber.innerText = sessionStorage.getItem("phone number");

    // Codes for the addition of the delivery charge if the user has chosen delivery -  the code below will code for the total dollars
    subTotal.innerText = totalPrice.innerText;
    deliveryFee.innerText = `$${DELIVERYPRICE.toFixed(2)}`;
    var total = parseFloat(totalPrice.innerText.replace("$", ""));
    var totalOrder = total + DELIVERYPRICE;
    totalPriceOrder.innerText = `$${totalOrder.toFixed(2)}`;
  } else if (sessionStorage.getItem("pickup") == "true") {
    // Codes for adding the information of the user if the user chooses pickup option.
    costumerName.innerText = sessionStorage.getItem("name");
    costumerAddress.innerText = "";
    costumerNumber.innerText = "";

    subTotal.innerText = totalPrice.innerText;
    deliveryFee.innerText = `No fee`;
    totalPriceOrder.innerText = `${subTotal.innerText}`;
  }
}

//  Function that when run, it will add the items in the shopping cart to the final order information section
function orderInformation() {
  var cartItemContainer = document.getElementById("shoppingCart");
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");

  for (i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0].innerText;
    var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0].value;
    var itemTitle = cartRow.getElementsByClassName("cart-item-title")[0].innerText;
    var itemSize = cartRow.getElementsByClassName("cart-size")[0].innerText;

    var orderItems = document.getElementsByClassName("order-items")[0];
    var cartRowContents = `
        <div class="order-information">
          <div class="cart-item cart-column-order">
              <span class="cart-item-title">${itemTitle}</span>
          </div>
          <span class="cart-size">${quantityElement} ${itemSize}</span>
          <span class="cart-price cart-column">${priceElement}</span>
          </div>
          <hr>
  `;
    orderItems.innerHTML += cartRowContents;
  }
}

// Function that updates the cart total if the quantity of the items chosen has changed. In this function the event parameter is going to be the event that occured when the value of the input label has been changed. In this function it will check if the input is valid, and if it is it will run the updateCartTotal() function.
// While on the other hand, if the input or the number is not valid for example, it is not a number, less than or equal to 0, or greater than 10, it will automically assign it to 1.
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0 || input.value > MAXCOFFEE) {
    input.value = 1;
  }
  updateCartTotal();
}

// Function that will remove items that is present in the shopping cart, in this function when a particular remove button is clicked, it will remove that specific item or product from the shopping cart.
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

// Function to check if the input that the user has entered is valid or not,it will check if the user input is empty or is greater than 10, or is less than 0 or if it is equal to 0. If it is true, then an error message would be shown and would ask the user again, if it is false, then the value that the user has entered (user input) will be returned
function checkValid(userInput, errorText) {
  if (!userInput || userInput > MAXCOFFEE || userInput < 1 || userInput.charAt(0) == "0") {
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

  // Check if the same items has been added to the shopping cart
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  var cartItemSize = cartItems.getElementsByClassName("cart-size");
  for (i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title && cartItemSize[i].innerText == size) {
      alert("This item is already added to the cart");
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
  // Get the add button from the document
  var button = event.target;
  var shopItem = button.parentElement.parentElement.parentElement; //This variable is going to be the parent element of the items, this variable is going to be used to get the name of the product.

  // Get the information of the coffees picked
  var title = shopItem.getElementsByClassName("product-name")[0].innerText; //Retrieve the name of the product
  var selectElement = getValueFromSelect(shopItem, "coffee-Size-Chosen"); // Retrrieve the size chosen by the user
  var price = selectElement.options[selectElement.selectedIndex].value; //Retrieve the price
  var size = getSize(price); //Retrieve the size that hthey have chosen
  let getQuantity = getValueFromSelect(shopItem, "amountChosen"); // Retrieve the quantity of products that they are thinking of buying.
  let quantity = getQuantity.options[getQuantity.selectedIndex].value;
  // console.log(title, price, size, quantity);
  addItemtoCart(title, price, size, quantity);
  updateCartTotal();
}

// Function to check the quantity that the user have chosen
function checkedQuantity() {
  var cartItemContainer = document.getElementById("shoppingCart");
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  quantityTotal = 0;
  for (i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
    var quantity1 = quantityElement.value;
    quantityTotal += +quantity1;
  }
  return quantityTotal;
}

// Function to update the cart total whenever the user adds or removes items to the cart
function updateCartTotal() {
  // Set up the variables
  var cartItemContainer = document.getElementById("shoppingCart");
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;

  // Loop through the length of the cart rows or the products/items present in the shopping cart
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
      howManyCoffees.value = "";
      return;
    }

    // Store the entered number of coffees that the user are buying to an array
    numberofCoffees.push(numOfCoffees);
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
