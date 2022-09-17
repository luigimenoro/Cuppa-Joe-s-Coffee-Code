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
  });
}
