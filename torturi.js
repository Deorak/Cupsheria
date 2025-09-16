 function checkOrder(event) {

        event.preventDefault(); // stop submit

        const selectedDimensiune = document.querySelector('input[name="radio-dimensiune"]:checked');
        if (!selectedDimensiune) {
          
          document.querySelector(".field-required").style.display = "block";
          return;
        }

        const selectedGlaz = document.querySelector('input[name="radio-glazura"]:checked');
        if (!selectedGlaz) {
        
          document.querySelectorAll(".field-required")[1].style.display = "block";
          return;
        }


        const selectedUmplutura = document.querySelector('input[name="radio-umplutura"]:checked');
        if (!selectedUmplutura) {
          document.querySelectorAll(".field-required")[2].style.display = "block";

          return;
        }

        const selectedBlat = document.querySelector('input[name="radio-blat"]:checked');
        if (!selectedBlat) {
           
          document.querySelectorAll(".field-required")[3].style.display = "block";
          return;
        }


        document.querySelectorAll(".field-required").forEach(el => {
          el.style.display = "none";
        });

        addOrder();
        updateCartCount();
      }

      function addOrder() {

  let cart = JSON.parse(sessionStorage.getItem("cart")) || {};

  let item = selectionText.textContent;

  const price = 100;

        
        if (!cart[item]) {
          cart[item] = { quantity: 0, price: price };
        }

  //cart[item] = (cart[item] || 0) + 1;
if(cart[item]) {cart[item].quantity += 1;}
  cart[item].price = price*cart[item].quantity;

  sessionStorage.setItem("cart", JSON.stringify(cart));

  console.log(cart);
      }



      const selectionText = document.getElementById('selection-text');

      function updateSelection() {
        const dimensiune = document.querySelector('input[name="radio-dimensiune"]:checked');
        const glazura = document.querySelector('input[name="radio-glazura"]:checked');
        const umplutura = document.querySelector('input[name="radio-umplutura"]:checked');
        const blat = document.querySelector('input[name="radio-blat"]:checked');

        let message = "Tort: ";
        

        if (dimensiune) {
          message += dimensiune.value;
        }
        if (glazura) {
          message += (dimensiune ? " + " : "") + glazura.value;
        }
        if (umplutura) {
          message += (glazura ? " + " : "") + umplutura.value;
        }
        if (blat) {
          message += (umplutura ? " + " : "") + blat.value;
        }
        selectionText.textContent = message;
      }

      document.querySelectorAll('input[name="radio-dimensiune"], input[name="radio-glazura"], input[name="radio-umplutura"], input[name="radio-blat"]').forEach(radio => {
        radio.addEventListener('change', updateSelection);
      });
