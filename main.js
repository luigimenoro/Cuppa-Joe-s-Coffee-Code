// Check if the user is on the order-information screen - (order-information.html)
if (window.location.href.includes("/order-information.html")) {
  // Specify the varaible of the form
  let deliveryForm = document.getElementById("deliveryForm");

  deliveryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get the values that the user has entered within the text inputs
    let nameEntered = document.getElementById("name").value;
    let addressEntered = document.getElementById("address").value;
    let phoneNumEnt = document.getElementById("phoneNumber").value;

    // Place the varaibles or the entered values to the session storage
    sessionStorage.setItem("name", nameEntered);
    sessionStorage.setItem("address", addressEntered);
    sessionStorage.setItem("phone number", phoneNumEnt);
  });
}

// Check if the user is on the order-information screen - (order-information.html)
if (window.location.href.includes("/pickup-information.html")) {
  // Specify the variable of the form
  let pickupForm = document.getElementById("pickupForm");

  pickupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get the values that the user has entered within the text inputs
    let nameEntered1 = document.getElementById("name").value;
    // Place the varaibles or the entered values to the session storage
    sessionStorage.setItem("name", nameEntered1);
  });
}
