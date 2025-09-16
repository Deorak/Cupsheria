function toggleRequired(checkbox) {
      const extraField = document.getElementById("extra");
      if (checkbox.checked) {
        extraField.setAttribute("required", "true");
      } else {
        extraField.removeAttribute("required");
      }
    }

    function setCustomMessage(input) {
      if (input.validity.valueMissing) {
        input.setCustomValidity("Camp Obligatoriu!");
      } else {
        input.setCustomValidity(""); 
      }
    }



     function renderSum() {
       let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const summaryDiv = document.getElementById('cart-total');
  summaryDiv.innerHTML = ''; 
         let total = 0;
  for (const key in cart) {
    total += cart[key].price;
  }
    summaryDiv.innerHTML = `<strong>Total:</strong> ${total} RON`;
  }

    renderSum();


     function renderCart() {
       let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      const cartDiv = document.getElementById('cart');
      cartDiv.innerHTML = '';

      if (Object.keys(cart).length === 0) {
        cartDiv.innerHTML = '<p>Cosul tau este gol</p>';
        return;
      }

      Object.entries(cart).forEach(([key, value]) => {
        const div = document.createElement('div');
        const cartActions=document.createElement('div');
        const decrement = document.createElement("BUTTON");
        const increment = document.createElement("BUTTON");

        const initialPrice = cart[key].price/cart[key].quantity;

        div.className = 'cart-item';
        div.textContent = `${key}`+` (x${value.quantity})` + ` - ${value.price} RON`;
        
        cartActions.className = "cart-actions";

        decrement.className = "cart-button";
        decrement.textContent = "-";

        increment.className = "cart-button"
        increment.textContent = "+";

       decrement.onclick = function() {
          
          cart[key].quantity -=1;
            cart[key].price = initialPrice*cart[key].quantity;
          if (cart[key].quantity === 0) {
            delete cart[key];
          }
          

          sessionStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
          renderSum();
          updateCartCount();
        };

        increment.onclick = function() {
           cart[key].quantity +=1;
          cart[key].price = initialPrice*cart[key].quantity;
          
          sessionStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
          renderSum();
          updateCartCount();
        };

        cartActions.appendChild(decrement);
        cartActions.appendChild(increment);
        div.appendChild(cartActions);
        
        
        cartDiv.appendChild(div);
      });
    }

  
    renderCart();