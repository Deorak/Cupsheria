function modifyValue(button) {
  const productBox = button.closest(".platouri-addtocart");
  const input = productBox.querySelector("input[type=number]");


  if (button.classList.contains("increment")) {
    console.log("increment");
    input.stepUp();
  } else if (button.classList.contains("decrement")) {
    console.log("decrement");
    input.stepDown();
  }
}


function addOrder(button) {
  const productBox = button.closest(".platouri-addtocart");
  const input = productBox.querySelector("input[type=number]");

  const item = button.dataset.item; //item
  const quantity = Number(input.value); //value
  const price = Number(button.dataset.price); //price

  let cart = JSON.parse(sessionStorage.getItem("cart")) || {};


  if (!cart[item]) {
    cart[item] = { quantity: 0, price: price };
  }

  cart[item].quantity += quantity;
  cart[item].price = price * cart[item].quantity;


  sessionStorage.setItem("cart", JSON.stringify(cart));


  console.log("Cart:", cart);
  updateCartCount();
}